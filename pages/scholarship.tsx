import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ScholarshipPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Scholarship Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            Learn about our scholarship programs and how to apply...
          </p>
          {/* Add your scholarship content here */}
        </CardContent>
      </Card>
    </div>
  );
};

export default ScholarshipPage;
