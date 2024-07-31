import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-red-600 text-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <img src="/vg-logo.svg" alt="VG Logo" className="h-8" />
          <nav>
            <ul className="flex space-x-4">
              {['OL 2024', 'VG Live', 'VGTV', 'VG+', 'TV-guide', 'Tips oss'].map((item) => (
                <li key={item}>
                  <Button variant="ghost" className="text-white hover:text-gray-200">{item}</Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="bg-gray-100 text-black py-1">
        <div className="container mx-auto px-4 flex items-center space-x-4">
          <span className="bg-red-600 text-white px-2 py-1 text-sm font-bold">LIVE</span>
          <span>Knivangrep i Southport</span>
          <span className="bg-red-600 text-white px-2 py-1 text-sm font-bold">LIVE</span>
          <span>Casper Ruud i 3. runde</span>
        </div>
      </div>
    </header>
  );
};

export default Header;