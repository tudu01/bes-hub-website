import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Blog</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {/* Add your blog posts here */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogPage;
