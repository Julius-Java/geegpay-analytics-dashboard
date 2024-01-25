import overviewVector from "@/public/assets/layout/overview-vector.png";
import trendVector from "@/public/assets/layout/trend-vector.png";
import profileVector from "@/public/assets/layout/profile-vector.png";
import boxVector from "@/public/assets/layout/box-vector.png";
import infoVector from "@/public/assets/layout/info-circle-vector.png";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const navLinks = [
    { name: "Overview", href: "/", icon: overviewVector },
    { name: "Trends", href: "/", icon: trendVector },
    { name: "Profile", href: "/", icon: profileVector },
    { name: "Box", href: "/", icon: boxVector },
    { name: "info", href: "/", icon: infoVector },
];

export default function NavLinks() {
    return (
        <>
            {navLinks.map((link, index) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={twMerge()}
                    >
                        <Image
                            src={link.icon}
                            alt={link.name}
                            className="w-6 sm:w-7 md:mx-auto"
                        />
                    </Link>
                );
            })}
        </>
    );
}
