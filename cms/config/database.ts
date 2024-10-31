import path from 'path';

// Define types for the environment function
type EnvFunction = {
  (key: string, defaultValue?: any): string;
  int(key: string, defaultValue?: number): number;
  bool(key: string, defaultValue?: boolean): boolean;
};

// Define SSL configuration type
interface SSLConfiguration {
  key?: string;
  cert?: string;
  ca?: string;
  capath?: string;
  cipher?: string;
  rejectUnauthorized?: boolean;
}

// Define connection types
interface BaseConnection {
  connection: {
    host?: string;
    port?: number;
    database?: string;
    user?: string;
    password?: string;
    ssl?: false | SSLConfiguration;
  };
  pool?: {
    min: number;
    max: number;
  };
}

interface MySQLConnection extends BaseConnection {
  connection: BaseConnection['connection'];
}

interface PostgresConnection extends BaseConnection {
  connection: BaseConnection['connection'] & {
    connectionString?: string;
    schema?: string;
  };
}

interface SQLiteConnection {
  connection: {
    filename: string;
  };
  useNullAsDefault: boolean;
}

// Define the connections object type
interface Connections {
  mysql: MySQLConnection;
  postgres: PostgresConnection;
  sqlite: SQLiteConnection;
}

export default ({ env }: { env: EnvFunction }) => {
  const client = env('DATABASE_CLIENT', 'sqlite') as keyof Connections;

  const connections: Connections = {
    mysql: {
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};