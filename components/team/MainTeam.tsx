// MainContent.tsx
import React from 'react';
import Team from './Team';

const MainContent: React.FC = () => {
  return (
      <div className="container max-w-7xl px-4">
        <div className="flex flex-wrap justify-center text-center mb-24 mt-24">
        <div className="w-full lg:w-6/12 px-4">
          <h1 className="text-white-900 text-4xl font-bold mb-8">
            Our team <b className='text-green-700 '>Coder Cops</b>
          </h1>
          <p className="text-red-500 text-lg font-light">
            With some combined experience, we&apos;ve got a well-seasoned team at the helm.
          </p>
        </div>
      </div>
      <Team />
    </div>
  );
};


export default MainContent;
