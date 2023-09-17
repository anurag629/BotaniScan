import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="shadow dark:bg-black p-4 sm:ml-64">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BOTANI SCAN</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/aboutproject" className="mr-4 hover:underline md:mr-6 ">About Project</a>
                        </li>
                        <li>
                            <a href="/ourteam" className="mr-4 hover:underline md:mr-6">Contact Team</a>
                        </li>
                        <li>
                            <a href="https://github.com/anurag629/BotaniScan" className="hover:underline">Code</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-red-500 lg:my-8" />
                <span className="block text-sm dark:text-gray-300 sm:text-center">© 2023 <a href="/" className="hover:underline">BOTANI SCAN™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;