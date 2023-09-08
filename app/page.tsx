import React from 'react';
import MainContent from '@/components/MainContent';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-6xl items-center justify-between font-mono text-sm lg:flex">
      
            <div className="flex flex-col">
                <span className="text-center font-bold my-10 opacity-30">

                    <hr className="my-4" />
                </span>
                <MainContent />
            </div>
  
      </div>
    </main>
  );
}
