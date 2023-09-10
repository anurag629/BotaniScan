import React from "react";
import Detail from "./Detail";

const AboutProject: React.FC = () => {
    return (
        <div className="container max-w-7xl px-4">
            <div className="flex flex-wrap justify-center text-center m-24">
                <div className="w-full lg:w-6/12 px-4">
                    <h1 className="text-white-900 text-4xl font-bold mb-8">
                        Project Details
                    </h1>
                    <p className="text-pink-700 text-lg font-light">
                        BotaniScan is a web application that uses machine learning to identify plant diseases. It is a project that was created for the SIH(Smart India Hackathon) 2023.
                    </p>
                </div>
                
            </div>
            <Detail />
        </div>
    );
}

export default AboutProject;