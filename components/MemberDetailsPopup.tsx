// MemberDetailsPopup.tsx
import React, { useState } from 'react';

interface MemberDetailsPopupProps {
    isOpen: boolean;
    onClose: () => void;
    name: string;
    title: string;
    imageSrc: string;
    description: string;
    email: string;
}

const MemberDetailsPopup: React.FC<MemberDetailsPopupProps> = ({
    isOpen,
    onClose,
    name,
    title,
    imageSrc,
    description,
    email,
}) => {
    if (!isOpen) {
        return null; // Don't render the popup if it's not open
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            {/* Popup content */}
            <div className="relative w-96 h-72 max-w-3xl mx-auto my-6 rounded-lg shadow-lg">

                {/* Popup body */}
                <div className="relative bg-gray-900 bg-opacity-800 rounded-lg shadow-lg border-black">
                    {/* Close button */}
                    <button
                        className="absolute top-0 right-0 m-4 p-2 text-gray-500 hover:text-gray-700"
                        onClick={onClose}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    {/* Content */}
                    <div className="p-6">
                        <div className="text-center">
                            <img
                                className="w-20 h-20 rounded-full mx-auto"
                                src={imageSrc}
                                alt={name}
                            />
                            <h2 className="mt-4 text-xl font-semibold text-white-800">
                                {name}
                            </h2>
                            <p className="text-sm text text-red-600">{title}</p>
                        </div>

                        <div className="mt-8 text-white-700 text-center">{description}</div>

                        <div className="mt-4 text-blue-600 text-center">
                            Email: <a href={`mailto:${email}`}>{email}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberDetailsPopup;
