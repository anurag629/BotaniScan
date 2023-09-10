import React from "react";
import FileUpload from "@/components/mainProject/FileUpload";

const MainProject: React.FC = () => {
    return (
        <div className="container max-w-7xl px-4">
            <div className="flex flex-wrap justify-center text-center mb-24 mt-24">
                <div className="w-full lg:w-6/12 px-4">
                    <h1 className="text-white-900 text-4xl font-bold mb-8">
                        Upload the Plant <b className='text-green-700 '>Leaf</b>
                    </h1>
                    <p className="text-red-500 text-lg font-light">
                        Botani Scan is a web application that can identify the plant leaf disease using image processing and deep learning.
                    </p>
                </div>
            </div>
            <FileUpload />
        </div>
    );
}

export default MainProject;
