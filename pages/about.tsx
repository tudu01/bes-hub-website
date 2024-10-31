import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>About Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            Welcome to our community! We are dedicated to...
          </p>
          {/* Add your about page content here */}
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;
