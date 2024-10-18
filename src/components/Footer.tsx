import { NAV_LINKS } from "@/constants"; // Ensure this has your footer links
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social icons
import Logo from "../public/9duck-text.png";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-6">
                {/* Logo Section */}
                <div className="flex items-center justify-center md:justify-start">
                    <Link href="/">
                        <img src={Logo.src} alt="logo" width={200} height={40} />
                    </Link>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col md:flex-row md:gap-6 text-center md:text-left">
                    {NAV_LINKS.map((link) => (
                        <Link href={link.href} key={link.key} className="text-gray-600 hover:text-black transition">
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center md:justify-end gap-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-gray-600 hover:text-black transition" size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-gray-600 hover:text-black transition" size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-gray-600 hover:text-black transition" size={24} />
                    </a>
                </div>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <div className="text-center">
                <p className="text-gray-500">&copy; 2024 Daniel Kawalo | CC2. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
