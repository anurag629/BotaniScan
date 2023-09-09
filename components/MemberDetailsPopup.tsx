// MemberDetailsPopup.tsx
import React from 'react';

interface MemberDetailsPopupProps {
    name: string;
    title: string;
    description: string;
    email: string;
}

const MemberDetailsPopup: React.FC<MemberDetailsPopupProps> = ({
    name,
    title,
    description,
    email,
}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-hidden outline-none focus:outline-none">
            {/* Popup content */}
            <div className="relative w-96 h-72 max-w-3xl mx-auto my-6 rounded-lg shadow-lg">

                {/* Popup body */}
                <div className="relative bg-gray-900 bg-opacity-800 rounded-lg shadow-lg border-black">
                    {/* Content */}
                    <div className="p-6">
                        <div className="text-center">
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
