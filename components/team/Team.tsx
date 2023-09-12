import React from 'react';
import TeamMember from './TeamMember';

const Team: React.FC = () => {
    const teamDetails = [
        {
            name: "Akansha",
            title: "C++ and Web Developer",
            imageSrc: "/assets/profile/woman.png",
            linkedinUrl: "https://www.linkedin.com/in/tranter-jaskulski",
            twitterUrl: "https://twitter.com/tranterjaskulski",
            githubUrl: "https://github.com/Akankshashub",
            instagramUrl: "https://www.instagram.com/tranterjaskulski/",
            email: "a@gnail.com",
            description: "Hello How are",
        },
        {
            name: "Rukshali",
            title: "Python Programmer",
            imageSrc: "/assets/profile/woman.png",
            linkedinUrl: "https://www.linkedin.com/in/tranter-jaskulski",
            twitterUrl: "https://twitter.com/tranterjaskulski",
            githubUrl: "https://github.com/Rukshali",
            instagramUrl: "https://www.instagram.com/tranterjaskulski/",
            email: "a@gnail.com",
            description: "Hello How are",
        },
        {
            name: "Bhavy Airi",
            title: "Web Developer",
            imageSrc: "/assets/profile/bhavy.png",
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
            linkedinUrl: "https://www.linkedin.com/in/abhishek-gupta-g/",
            twitterUrl: "/",
            githubUrl: "https://github.com/Abhi-gits",
            instagramUrl: "https://www.instagram.com/abhishekgupta0012/",
            email: "ravi37463@gmail.com",
            description: "Have a strong background in python and c++. I am passionate about finding bugs in code and transforming ideas into reality. Have experience in cybersecurity and Machine learning",
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
