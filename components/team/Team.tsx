import React from 'react';
import TeamMember from './TeamMember';

const Team: React.FC = () => {
    const teamDetails = [
        {
            name: "Tranter Jaskulski",
            title: "Founder & Specialist",
            imageSrc: "/assets/profile/anurag-verma.png",
            linkedinUrl: "https://www.linkedin.com/in/tranter-jaskulski",
            twitterUrl: "https://twitter.com/tranterjaskulski",
            githubUrl: "https://github.com/tranterjaskulski",
            instagramUrl: "https://www.instagram.com/tranterjaskulski/",
            email: "a@gnail.com",
            description: "Hello How are",
        },
        {
            name: "Bhavy Airi",
            title: "Web Developer",
            imageSrc: "/assets/profile/bhavy-airi.png",
            linkedinUrl: "https://www.linkedin.com/in/bhavy-airi-a24090207/",
            twitterUrl: "",
            githubUrl: "https://github.com/tech-bash",
            instagramUrl: "https://www.instagram.com/denicejagna/",
            email: "aa@gmail.com",
            description: "With over 100 years of combined experience, we've got a well-seasoned team at the helm.",
        },
        {
            name: "Abhishek Gupta",
            title: "Python & Web Developer",
            imageSrc: "/assets/profile/abhishek-gupta.png",
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
            imageSrc: "/assets/profile/anurag-verma.png",
            linkedinUrl: "https://www.linkedin.com/in/anurag629",
            twitterUrl: "https://twitter.com/anurag_629",
            githubUrl: "https://github.com/anurag629",
            instagramUrl: "https://www.instagram.com/anurag_629/",
            email: "akvermaav629@gmail.com",
            description: "Have a strong background in math, statistics, and programming. I am passionate about translating complex data into actionable insights. Have experience in building machine learning & deep learning models. I quick learner and enjoy working in a fast-paced work environment.",
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
