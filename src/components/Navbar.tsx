import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Logo from "../public/9duck-text.png";
import { Link } from '@chakra-ui/react'


const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-transparent z-10 py-4 transition-all duration-300 ">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <Image src={Logo} alt="logo" width={140} height={40} />
                </Link>

                <ul className="hidden h-full gap-12 lg:flex items-center">
                    {NAV_LINKS.map((link) => (
                        <li key={link.key}>
                            <Link href={link.href} className="regular-16 text-black flex items-center cursor-pointer pb-1.5 transition-all hover:font-bold">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
