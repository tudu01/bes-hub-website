import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const GetInvolvedPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Get Involved</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            There are many ways to get involved with our community...
          </p>
          {/* Add your get involved content here */}
        </CardContent>
      </Card>
    </div>
  );
};

export default GetInvolvedPage;
