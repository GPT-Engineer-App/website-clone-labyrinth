import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const MainContent = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardContent className="p-0">
          <img src="/placeholder.svg" alt="Main news" className="w-full h-96 object-cover" />
          <div className="p-4">
            <h2 className="text-4xl font-bold mb-4">Moské-angrepet:</h2>
            <h1 className="text-6xl font-bold">- Blindt raseri</h1>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-0">
            <img src="/placeholder.svg" alt="News 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-2xl font-bold">- Veldig ubehagelig</h3>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-0">
            <img src="/placeholder.svg" alt="News 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-2xl font-bold">Helten som ikke fikset livet</h3>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MainContent;