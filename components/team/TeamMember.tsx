'use client' // 👈 use it here
// TeamMember.tsx
 

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

export interface TeamMemberProps {
  isTeamLeader: boolean;
  isMentor: boolean;
  name: string;
  MemberPosition: string;
  title: string;
  linkedinUrl: string;
  twitterUrl: string;
  githubUrl: string;
  instagramUrl: string;
  imageSrc: string;
  description: string;
  email: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  isTeamLeader,
  isMentor,
  name,
  MemberPosition,
  title,
  linkedinUrl,
  twitterUrl,
  githubUrl,
  instagramUrl,
  imageSrc,
  description,
  email,
}) => {
  return (
    <div
      className={`w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4 hover:scale-110 transition-transform duration-300 ${
        isTeamLeader ? 'order-first' : ''
      }`}
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
          <div className="dark:text-gray-300 font-light mb-2">{MemberPosition}</div>
        </div>

        <div className="flex items-center justify-center">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex rounded-full h-7 w-7 hover:scale-150 transition-transform duration-300">
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 mx-auto mt-2" />
          </a>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="flex rounded-full h-7 w-7 hover:scale-150 transition-transform duration-300">
            <FontAwesomeIcon icon={faTwitter} className="text-blue-400 mx-auto mt-2" />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex rounded-full h-7 w-7 hover:scale-150 transition-transform duration-300">
            <FontAwesomeIcon icon={faGithub} className="text-gray-600 mx-auto mt-2" />
          </a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex rounded-full h-7 w-7 hover:scale-150 transition-transform duration-300">
            <FontAwesomeIcon icon={faInstagram} className="text-pink-500 mx-auto mt-2" />
          </a>
        </div>
      </div>
      {/* Render the MemberDetailsPopup conditionally */}
      {/* {isHovered && (
        <MemberDetailsPopup
          name={name}
          title={title}
          description={description}
          email={email}              
        />
      )} */}
    </div>
  );
};

export default TeamMember;
