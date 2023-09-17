// MainContent.tsx
import React from 'react';
import Team from './Team';
import Mentor from './Mentor';

const MainContent: React.FC = () => {
  return (
      <div className="container max-w-7xl px-4 sm:ml-64">
        <div className="flex flex-wrap justify-center text-center mb-24 mt-24">
        <div className="w-full lg:w-6/12 px-4">
          <h1 className="text-white-900 text-4xl font-bold mb-8">
            Our team <b className='text-green-700 '>Flora Finder</b>
          </h1>
          <p className="text-red-500 text-lg font-light">
            With over 50+ years of combined experience, we&apos;ve got a well-seasoned team at the helm.
          </p>
        </div>
      </div>
      <h3 className="text-white-900 justify-center text-center text-2xl font-bold mb-8 shadow-[0_-1px_0px_2px_rgba(249,7,7,1)]">
        Team Mentor&apos;<b className='text-green-700'>s</b>
      </h3>
      <Mentor />
      <h3 className="text-white-900 justify-center text-center text-2xl font-bold mb-8 shadow-[0_-1px_0px_2px_rgba(249,7,7,1)]">
        Team Member&apos;<b className='text-green-700 '>s</b>
      </h3>
      <Team />
    </div>
  );
};


export default MainContent;
