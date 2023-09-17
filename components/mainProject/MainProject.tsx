import React, { useState, useEffect } from "react";
import FileUpload from "@/components/mainProject/FileUpload";
import LinkInput from "@/components/mainProject/LinkInput";
import fetch from 'isomorphic-unfetch';





const MainProject: React.FC = () => {  

  return (
    <div className="p-4 sm:ml-64">
      <div className="flex flex-wrap justify-center text-center mb-24 mt-24">
        <div className="w-full lg:w-6/12 px-4">
          <h1 className="text-white-900 text-4xl font-bold mb-4">
            Upload the Plant <b className='text-green-700'>Leaf</b>
          </h1>
          <p className="text-red-500 text-lg font-light">
            Upload an image of a plant leaf, and our advanced image recognition technology, powered by machine learning, will identify the plant species for you
          </p>
        </div>
      </div>
      <LinkInput />
      {/* 'OR' in the middle */}
      <div className="flex flex-wrap justify-center text-center">
        <div className="w-full lg:w-6/12 px-4">
          <h1 className="text-white-900 text-4xl font-bold mb-8">
            OR
          </h1>
        </div>
      </div>

      <FileUpload />

      Result
    </div>
  );
}

export default MainProject;
