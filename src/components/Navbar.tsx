import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Logo from "../public/9duck-text.png";

const Navbar = () => {
    return (
        <nav className="justify-between container mx-auto flex  relative z-10 py-2">
            <Link href="/">
                <img src={Logo.src} alt="logo" width={140}/>
            </Link>

            <ul className="hidden h-full gap-12 lg:flex content-center">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="regular-16 text-black flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>

                ))}
            </ul>
        </nav>
    )
}


export default Navbar;