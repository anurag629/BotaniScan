'use client' // 👈 use it here

import React, { useState } from 'react';

const FileUpload: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string | null>(null);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileInput = event.target;
        if (fileInput && fileInput.files && fileInput.files[0]) {
            const file = fileInput.files[0];
            if (file.type === 'image/svg+xml' || file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/gif') {
                setSelectedFile(file);
                setUploadStatus('File selected and valid.');
            } else {
                setSelectedFile(null); // Clear the selected file if it's not valid
                setUploadStatus('Invalid file format. Please select an SVG, PNG, JPEG, or GIF file.');
            }
        } else {
            setSelectedFile(null); // Clear the selected file if no file is selected
            setUploadStatus(null);
        }


        // You can perform additional validation here if needed

    };

    return (
        <div>
            <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-auto h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                />
            </label>
            {selectedFile && (
                <div className="mt-4">
                    <p>Selected File: {selectedFile.name}</p>
                    {uploadStatus && <p>Status: {uploadStatus}</p>}
                </div>
            )}
        </div>
    );
};

export default FileUpload;
