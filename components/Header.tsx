"use client"

// Header.tsx
import React, { useState } from 'react';
import Navbar from './Navbar';

const Header: React.FC = () => {

  const [main, ourteam] = useState()

  return (
    <div>
      {/* <h1 className="text-center text-white-900 text-4xl font-bold mt-10">
        BOTANI SCAN
      </h1> */}
      <span className="text-center font-bold opacity-30">
        <hr className="mb-4 mt-1" />
      </span>
      <Navbar />
      {/* <span className="text-center font-bold mb-10 opacity-30">

        <hr className="my-4" />
      </span> */}
    </div>
  );
};

export default Header;
