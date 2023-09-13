import React from 'react';
import TeamMember from './TeamMember';

const Team: React.FC = () => {
    const teamDetails = [
        {
            isTeamLeader: false,
            isMentor: false,
            name: "Akansha", 
            MemberPosition: "(Team Member)",
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
            isTeamLeader: false,
            isMentor: false,
            name: "Rukshali",
            MemberPosition: "(Team Member)",
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
            isTeamLeader: false,
            isMentor: false,
            name: "Bhavy Airi",
            MemberPosition: "(Team Member)",
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
            isTeamLeader: false,
            isMentor: false,
            name: "Abhishek Gupta",
            MemberPosition: "(Team Member)",
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
            isTeamLeader: false,
            isMentor: false,
            name: "Subrat",
            MemberPosition: "(Team Member)",
            title: "Programmer & Web Developer",
            imageSrc: "/assets/profile/subrat.png",
            linkedinUrl: "https://www.linkedin.com/in/subratyadav/",
            twitterUrl: "https://twitter.com/findingsubrat?t=hUHGhRBlKT2ZKJfcmPXaGQ&s=09",
            githubUrl: "https://github.com/Subrat29",
            instagramUrl: "https://www.instagram.com/findingsubrat/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
            email: "subratyadav29@gmail.com",
            description: "I have a strong background in C++ and Java and am currently learning web development.",
        },
        {
            isTeamLeader: true,
            isMentor: false,
            name: "Anurag Verma",
            MemberPosition: "(Team Leader)",
            title: "AI/ML & Web Developer",
            imageSrc: "/assets/profile/anurag-verma.png",
            linkedinUrl: "https://www.linkedin.com/in/anurag629",
            twitterUrl: "https://twitter.com/anurag_629",
            githubUrl: "https://github.com/anurag629",
            instagramUrl: "https://www.instagram.com/anurag_629/",
            email: "akvermaav629@gmail.com",
            description: "Have a strong background in math, statistics, and programming. I am passionate about translating complex data into actionable insights. Have experience in building machine learning & deep learning models. I quick learner and enjoy working in a fast-paced work environment.",
        },
        {
            isTeamLeader: false,
            isMentor: true,
            name: "Ravi",
            MemberPosition: "(Mentor)",
            title: "Python & Web Developer",
            imageSrc: "/assets/profile/woman.png",
            linkedinUrl: "https://www.linkedin.com/in/ravi-kumar-37463/",
            twitterUrl: "https://twitter.com/anurag_629",
            githubUrl: "https://github.com/anurag629",
            instagramUrl: "https://www.instagram.com/anurag_629/",
            email: "akvermaav629@gmail.com",
            description: "Have a strong background in math, statistics, and programming. I am passionate about translating complex data into actionable insights. Have experience in building machine learning & deep learning models. I quick learner and enjoy working in a fast-paced work environment.",
        },
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {teamDetails.map((member, index) => (
                <TeamMember
                    key={index}
                    isTeamLeader={member.isTeamLeader}
                    isMentor={member.isMentor}
                    MemberPosition={member.MemberPosition}
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
