import React from 'react';
import MainContent from '@/components/team/MainTeam';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-6xl items-center justify-between font-mono text-sm lg:flex">
            
            <div className="flex flex-row">
                <MainContent />
            </div>
      </div>
    </main>
  );
}