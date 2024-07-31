import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex">
        <main className="flex-grow">
          <MainContent />
        </main>
        <aside className="w-1/4">
          <Sidebar />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Index;