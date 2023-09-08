import React from 'react';
import TeamMember from './TeamMember';

const Team: React.FC = () => {
    const teamDetails = [
        {
            name: "Tranter Jaskulski",
            title: "Founder & Specialist",
            imageSrc: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80",
            linkedinUrl: "https://www.linkedin.com/in/tranter-jaskulski",
            twitterUrl: "https://twitter.com/tranterjaskulski",
            githubUrl: "https://github.com/tranterjaskulski",
            instagramUrl: "https://www.instagram.com/tranterjaskulski/",
            email: "a@gnail.com",
            description: "Hello How are",
        },
        {
            name: "Denice Jagna",
            title: "Tired & M. Specialist",
            imageSrc: "https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80",
            linkedinUrl: "https://www.linkedin.com/in/denicejagna",
            twitterUrl: "https://twitter.com/denicejagna",
            githubUrl: "https://github.com/denicejagna",
            instagramUrl: "https://www.instagram.com/denicejagna/",
            email: "aa@gmail.com",
            description: "With over 100 years of combined experience, we've got a well-seasoned team at the helm.",
        },
        {
            name: "Abhishek Gupta",
            title: "Python & Web Developer",
            imageSrc: "https://github.com/Abhi-gits.png",
            linkedinUrl: "https://www.linkedin.com/in/kenjimilton",
            twitterUrl: "https://twitter.com/kenjimilton",
            githubUrl: "https://github.com/kenjimilton",
            instagramUrl: "https://www.instagram.com/kenjimilton/",
            email: "aaa@gmail.com",
            description: "With over 100 years of combined experience, we've got a well-seasoned team at the helm.",
        },
        {
            name: "Anurag Verma",
            title: "AI/ML & Web Developer",
            imageSrc: "https://github.com/anurag629.png",
            linkedinUrl: "https://www.linkedin.com/in/anurag629",
            twitterUrl: "https://twitter.com/anurag_629",
            githubUrl: "https://github.com/anurag629",
            instagramUrl: "https://www.instagram.com/anurag_629/",
            email: "akvermaav629@gmail.com",
            description: "With over 100 years of combined experience, we've got a well-seasoned team at the helm.",
        },
    ];

    return (
        <div className="flex flex-wrap">
            {teamDetails.map((member, index) => (
                <TeamMember
                    key={index}
                    name={member.name}
                    title={member.title}
                    imageSrc={member.imageSrc}
                    linkedinUrl={member.linkedinUrl}
                    twitterUrl={member.twitterUrl}
                    githubUrl={member.githubUrl}
                    instagramUrl={member.instagramUrl}
                    email={member.email}
                    description={member.description}
                />
            ))}
        </div>
    );
};

export default Team;
