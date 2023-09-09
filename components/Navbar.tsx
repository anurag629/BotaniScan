import React from "react";
import Link from "next/link";


const Navbar = () => {
    return (
        <nav>
            <Link href="/">Project</Link>
            <Link href="/">Our Team</Link>
            <Link href="/">About Project</Link>
        </nav>
    );
}

export default Navbar;