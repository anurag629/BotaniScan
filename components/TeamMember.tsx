import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab.faLinkedin, fab.faTwitter, fab.faGithub, fab.faInstagram);

interface TeamMemberProps {
    name: string;
    title: string;
    linkedinUrl: string;
    twitterUrl: string;
    githubUrl: string;
    instagramUrl: string;
    imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, linkedinUrl, twitterUrl, githubUrl, instagramUrl, imageSrc }) => {
    return (
        <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div className="flex flex-col">
                <a href="#" className="mx-auto">
                    <img
                        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={imageSrc}
                        alt={name}
                    />
                </a>
                <div className="text-center mt-6">
                    <h1 className="text-white-900 text-xl font-bold mb-1">
                        {name}
                    </h1>
                    <div className="text-red-700 font-light mb-2">
                        {title}
                    </div>
                    <div className="flex items-center justify-center">
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex rounded-full h-10 w-10 hover:scale-105 transition-transform duration-300">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} className="fab fa-instagram text-white mx-auto mt-2" />
                        </a>
                        <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="flex rounded-full h-10 w-10 hover:scale-105 transition-transform duration-300">
                            <FontAwesomeIcon icon={['fab', 'twitter']} className="fab fa-instagram text-white mx-auto mt-2" />
                        </a>
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex rounded-full h-10 w-10 hover:scale-105 transition-transform duration-300">
                            <FontAwesomeIcon icon={['fab', 'github']} className="fab fa-instagram text-white mx-auto mt-2" />
                        </a>
                        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex rounded-full h-10 w-10 hover:scale-105 transition-transform duration-300">
                            <FontAwesomeIcon icon={['fab', 'instagram']} className="fab fa-instagram text-white mx-auto mt-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;
