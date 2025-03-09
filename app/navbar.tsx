"use client";

import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  DirectionsCarOutlined as CarIcon,
  ConstructionOutlined as ToolsIcon,
  CarRepair as CarRepairIcon,
  ReviewsOutlined as ReviewsIcon,
  GroupsOutlined as PartnersIcon,
  PhoneOutlined as ContactIcon,
} from "@mui/icons-material";
import MobileMenuButton from "./components/mobileMenuButton";

const NavBar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ICON_SIZE = "large";
  const links = [
    {
      href: "#about",
      label: "o firmie",
      icon: <CarRepairIcon fontSize={ICON_SIZE} />,
    },
    {
      href: "#projects",
      label: "realizacje",
      icon: <CarIcon fontSize={ICON_SIZE} />,
    },
    {
      href: "#service",
      label: "serwis",
      icon: <ToolsIcon fontSize={ICON_SIZE} />,
    },
    {
      href: "#partners",
      label: "partnerzy",
      icon: <PartnersIcon fontSize={ICON_SIZE} />,
    },
    {
      href: "#reviews",
      label: "opinie",
      icon: <ReviewsIcon fontSize={ICON_SIZE} />,
    },
    {
      href: "#contact",
      label: "kontakt",
      icon: <ContactIcon fontSize={ICON_SIZE} />,
    },
  ];

  return (
    <nav>
      <div
        className={`md:hidden top-0 z-10 fixed h-full w-full transition ease-in-out`}
      >
        <MobileMenuButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        {isMenuOpen}
        <div
          className={`flex flex-col h-full align-middle justify-center transition-all ease-in-out duration-500 transform  ${
            isMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-[-100%]"
          } text-clamp-title-s`}
        >
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className="flex items-center gap-little-l bg-primary-transparent-gradient p-little-xl h-full"
            >
              {link.icon}
              <div>{link.label}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden md:block">
        <div className="top-0 z-10 fixed flex justify-between items-center gap-little-l bg-opacity-30 backdrop-blur-md px-big-s py-little-xxs w-full h-big-s text-nowrap">
          <Image
            src="logo-mono-white.svg"
            alt="Tune4Race logo"
            width={140}
            height={60}
          />
          <div className="flex gap-x-little-xl text-clamp-subtitle-m">
            {links.map((link) => (
              <Link href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
