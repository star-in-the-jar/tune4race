import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar: FC = () => {
    return (
        <nav className="flex justify-between items-center bg-primary-gradient px-big-s py-little-xxs h-big-s size-li">
            <Image
                src="/logo-mono-white.svg"
                alt="Tune4Race logo"
                width={100}
                height={50}
            />
            <div className="flex gap-x-little-xl text-subtitle-s">
                <Link href="#about" className="hover:underline">o firmie</Link>
                <Link href="#projects" className="hover:underline">realizacje</Link>
                <Link href="#service" className="hover:underline">serwis</Link>
                <Link href="#partners" className="hover:underline">partnerzy</Link>
                <Link href="#reviews" className="hover:underline">opinie</Link>
                <Link href="#contact" className="hover:underline">kontakt</Link>
            </div>
        </nav>
    );
};

export default NavBar;
