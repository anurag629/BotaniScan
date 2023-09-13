'use client' // 👈 use it here
// TeamMember.tsx
 

import React from 'react';
import Image from 'next/image';

export interface TeamMentorProps {
  name: string;
  title: string;
  department: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMentorProps> = ({
  name,
  title,
  department,
  imageSrc,
}) => {
  return (
    <div
      className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4 hover:scale-110 transition-transform duration-300"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <Image
            className="rounded-2xl drop-shadow-md"
            src={imageSrc}
            alt={name}
            width={300}
            height={200}
          />
        </div>
        <div className="text-center mt-6">
          <h1 className="text-white-900 text-xl font-bold mb-1">{name}</h1>
          <div className="text-red-500 font-light mb-2">{title}</div>
          <div className="text-red-500 font-light mb-2">{department}</div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
