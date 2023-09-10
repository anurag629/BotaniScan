"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const menu = [
    { name: "Home", url: "/" },
    { name: "Our Team", url: "/ourteam" },
    { name: "About Project", url: "/aboutproject" },
  ];

  const closeNavbar = () => {
    setNavbar(false);
  };

  return (
    <nav className={`w-full bg-black-600 shadow-[0_-1px_0px_2px_rgba(249,7,7,1)] ${navbar ? 'h-screen' : 'h-[70px]'}`}>
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/" className="">
              <div className="avatar">
                <div className="w-10 rounded">
                  <h1 className="text-3xl text-white font-bold">BS</h1>
                </div>
              </div>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <RxCross1 className="text-white" />
                ) : (
                  <AiOutlineMenu className="text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
              {menu.map(({ name, url }, index) => (
                <li
                  key={index}
                  className="text-white hover:scale-110 transition-transform duration-300"
                >
                  <Link href={url} onClick={closeNavbar}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
