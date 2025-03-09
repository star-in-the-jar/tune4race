"use client";

import { FC } from "react";

export interface MobileMenuButtonProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuButton: FC<MobileMenuButtonProps> = ({ isOpen, setIsOpen }) => {
  const mobileMenuButtonLineStyles =
    "block bg-white rounded-full absolute w-12 h-little-xxs ease transition-all duration-500";

  return (
    <div
      className={`z-10 right-0 absolute flex flex-col gap-2 py-little-xl px-little-l`}
      onClick={() => setIsOpen((isOpen: boolean) => !isOpen)}
    >
      <div className="relative w-12 h-8">
        <span
          className={`${mobileMenuButtonLineStyles} ${
            isOpen ? "rotate-[135deg] translate-y-3" : "translate-y-0"
          }`}
        ></span>
        <span
          className={`${mobileMenuButtonLineStyles} ${
            isOpen ? "rotate-[360deg] opacity-0 scale-0" : "translate-y-3"
          }`}
        ></span>
        <span
          className={`${mobileMenuButtonLineStyles} ${
            isOpen ? "rotate-[225deg] translate-y-3" : "translate-y-6"
          }`}
        ></span>
      </div>
    </div>
  );
}

export default MobileMenuButton;