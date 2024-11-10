"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";  // Import Image from next/image
import { CiMenuFries } from "react-icons/ci";

const Links = [
    { name: "Home", path: '/' },
    { name: "About Me", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-[#9d36ab]" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                
    {/* Logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                    <Image
                            src="/logo.jpg"
                            alt="Aliza Logo"
                            width={115}   // Set width
                            height={60}   // Set height
                            className="mx-auto"
                    />
                </Link>
         </div>

    {/* Navigation Links */}
            <nav className="flex flex-col justify-center items-center gap-8">
                {Links.map((link, index) => (
                    <Link 
                            href={link.path}
                            key={index}
                            className={`${link.path === pathname ? "text-black border-b-2 border-[#9d36ab]" : ""} text-xl capitalize hover:text-purple transition-all`}
                    >
                            {link.name}
                    </Link>
                ))}
            </nav>
        </SheetContent>
    </Sheet>
  );
};

export default MobileNav;