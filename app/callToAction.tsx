import Image from "next/image";
import Button from "./components/button";

import { FC, useState } from "react";

interface CallToActionProps {
  title: string;
}

const CallToAction: FC<CallToActionProps> = ({ title }: CallToActionProps) => {
  const [isNumberVisible, setIsNumberVisible] = useState(false);

  const handleClick = () => {
    setIsNumberVisible(true);
    window.location.href = "tel:+48577500184";
  };

  return (
    <section className="relative mt-big-m w-full h-auto">
      <Image
        src="call-to-action_s2000.jpg"
        alt="Call to action"
        width={1200}
        height={800}
        className="w-full h-full object-cover"
      />
      <div className="top-0 left-0 absolute flex flex-col justify-center items-center w-full h-full">
        <h1 className="lg:w-2/3 text-clamp-title-s text-white md:text-clamp-title-l text-center">
          {title}
        </h1>
        <Button label="ZADZWOŃ" onClick={handleClick} />
        <div
          className={`${
            isNumberVisible ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500 ease-in-out`}
        >
          <p className="hidden md:block mt-4 font-bold text-clamp-title-s text-white lg:text-clamp-title-m">577 500 184</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
