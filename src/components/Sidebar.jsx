import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <div className="p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Nyhetene på 60 sek.</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="siste">
            <TabsList>
              <TabsTrigger value="siste">Siste nytt</TabsTrigger>
              <TabsTrigger value="mest">Mest lest</TabsTrigger>
            </TabsList>
            <TabsContent value="siste">
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-500 mr-2">2 min</span>
                  Norsk OL-håp åpen om mentale utfordringer
                </li>
                <li>
                  <span className="text-gray-500 mr-2">9 min</span>
                  Moské-angrepet: - Det var som en krig
                </li>
                {/* Add more news items here */}
              </ul>
            </TabsContent>
            <TabsContent value="mest">
              {/* Add content for "Mest lest" tab */}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <Button className="w-full mb-8" variant="destructive">Tips VG</Button>
      <Card>
        <CardContent className="p-4">
          <img src="/placeholder.svg" alt="Tip" className="w-full h-32 object-cover mb-4" />
          <h3 className="text-xl font-bold mb-2">- Har ingen egne venner</h3>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;