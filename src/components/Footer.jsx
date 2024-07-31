import React from 'react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <div className="space-x-4">
            {['OL 2024', 'Siste', 'Program', 'Medaljer'].map((item) => (
              <Button key={item} variant="ghost">{item}</Button>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-red-600 text-white px-2 py-1 text-sm font-bold">LIVE</span>
            <span>Kvinner Boksing: 75 kg, åttedelsfinale</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;