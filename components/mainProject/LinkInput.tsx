'use client'

import React, { useState } from "react";
import axios from "axios";

interface PredictionResponse {
    message: string;
}

const LinkInput: React.FC = () => {
    const [imageUrl, setImageUrl] = useState<string>("");
    const [predictionResult, setPredictionResult] = useState<PredictionResponse | null>(null);

    const submitComment = async () => {
        console.log(imageUrl);
        try {
            const response = await axios.post<PredictionResponse>(`https://anurag629-botaniscan.hf.space/prediction/?image_link=${imageUrl}`);
            const data = response.data;
            setPredictionResult(response.data);
            console.log(predictionResult?.message);
            console.log(data);
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div>
            <div className="p-4">
                <div className="text-center mb-s4 mt-4">
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Input Image Link:</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                            />
                            <button onClick={submitComment}>Show Result</button> {}
                        </div>
                    </div>
                </div>
            </div>
            {predictionResult &&(
                  <div className="result-box bg-gray-200 border border-gray-400 p-4 rounded-md mt-4 shadow-md">
                  <p className="text-gray-800">{predictionResult.message}</p>
              </div>
            )}
        </div>
    );
}

export default LinkInput;
