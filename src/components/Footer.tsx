import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Logo from "../public/9duck.png"

const Footer = () => {
    return (
        <footer className="flexBetween max-container padding-container relative z-30 py-5">
            <div className="padding-container max-container flex w-full flex-col gap-14">
                <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
                    <Link href="/" className="mb-10">
                        <img src={Logo.src} alt="logo" width={74} height={29}/>
                    </Link>
                </div>
            </div>


            <div className="border bg-gray-20" />
            <p className="regular-14 w-full text-center text-gray-30 pt-1">2024 Daniel Kawalo | CC2</p>
        </footer>
    )
}


export default Footer;