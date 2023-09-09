import React from "react";
import Link from "next/link";


const Navbar = () => {
    return (
        <nav className="flex justify-center items-center py-4 border-solid border rounded-lg">
            <a href="/mainproject" className="text-white-900 text-2xl px-10 py-2 transition-transform font-bold relative overflow-hidden hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white-900 hover:scale-110">
                Main Project
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </a>
            <a href="/" className="text-white-900 text-2xl px-10 py-2 transition-transform font-bold relative overflow-hidden hover:bg-gradient-to-r from-green-500 to-blue-500 hover:text-white-900 hover:scale-110">
                Our Team
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-500 to-blue-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </a>
            <a href="/" className="text-white-900 text-2xl px-10 py-2 transition-transform font-bold relative overflow-hidden hover:bg-gradient-to-r from-red-500 to-yellow-500 hover:text-white-900 hover:scale-110">
                About Project
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 to-yellow-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </a>
        </nav>


    );
}

export default Navbar;