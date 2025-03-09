"use client";

import { FC } from "react";

export interface MobileMenuButtonProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuButton: FC<MobileMenuButtonProps> = ({ isOpen, setIsOpen }) => {
  const mobileMenuButtonLineStyles =
    "block bg-primary rounded-full absolute w-10 h-[5px] ease transition-all duration-500 left-1/2 translate-x-[-50%]";

  return (
    <div
      className={`z-10 right-little-m bottom-little-m fixed flex flex-col gap-2 w-[60px] h-[60px] bg-background rounded-2xl p-little-xs `}
      onClick={() => setIsOpen((isOpen: boolean) => !isOpen)}
    >
      <div className="relative">
        <span
          className={`${mobileMenuButtonLineStyles} ${
            isOpen ? "rotate-[135deg] translate-y-5" : "translate-y-2"
          }`}
        ></span>
        <span
          className={`${mobileMenuButtonLineStyles} ${
            isOpen ? "rotate-[360deg] opacity-0 scale-0" : "translate-y-5"
          }`}
        ></span>
        <span
          className={`${mobileMenuButtonLineStyles} ${
            isOpen ? "rotate-[225deg] translate-y-5" : "translate-y-8"
          }`}
        ></span>
      </div>
    </div>
  );
}

export default MobileMenuButton;