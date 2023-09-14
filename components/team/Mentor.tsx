import React from 'react';
import TeamMentor from './TeamMentor';

const Mentor: React.FC = () => {
    const mentorDetails = [
        {
            name: "Prashant Maharishi", 
            title: "Assistant Professor",
            department: "CSE Department",
            imageSrc: "/assets/profile/prashant-maharishi.png",
        },
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {mentorDetails.map((mentor, index) => (
                <TeamMentor
                    key={index}
                    name={mentor.name}
                    title={mentor.title}
                    department={mentor.department}
                    imageSrc={mentor.imageSrc}
                />
            ))}
        </div>
    );
};

export default Mentor