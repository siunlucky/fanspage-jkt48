"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiFillInstagram } from "react-icons/ai";

const Navbar = () => {
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 66) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className={`fixed z-50 flex items-center md:justify-between justify-center w-full px-4 py-2 transition duration-500 h-16 ${showBackground ? 'bg-white text-black border border-1 drop-shadow-md' : 'text-white'}`}>
            <div className="md:block hidden">
                FJKT48
            </div>
            <div className="flex items-center gap-x-20 text-sm">
                <Link href="#" className="md:block hidden">
                    Gallery
                </Link>
                <Link href="#" className="md:block hidden">
                    Member
                </Link>
                <Link href="/">
                    <Image src="/image/Logo.svg" alt="main" width={80} height={80} />
                </Link>
                <Link href="#" className="md:block hidden">
                    News
                </Link>
                <Link target="_blank" href="https://jkt48.com/" className="md:block hidden">
                    Official Web
                </Link>
            </div>
            <a target="_blank" href="https://www.instagram.com/faizelfahad_/" className={`rounded-full hidden md:flex justify-center items-center ${showBackground ? 'bg-black bg-opacity-10' : 'bg-white bg-opacity-30'} p-1.5 hover:bg-opacity-100 group transition duration-500`}>
                <AiFillInstagram size={20} className={` transition duration-500 ${showBackground ? 'group-hover:text-white' : 'group-hover:text-black'}`} />
            </a>
        </div >
    );
}

export default Navbar;