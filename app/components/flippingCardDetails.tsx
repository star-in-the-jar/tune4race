import { FC, useState, useEffect } from "react";

export interface Details {
  model: string;
  features?: string[];
}

interface FlippingCardDetailsProps extends Details {
  className?: string;
  isFlipped?: boolean;
}

const FlippingCardDetails: FC<FlippingCardDetailsProps> = ({
  model,
  features,
  className,
  isFlipped,
}) => {
  const [typedChars, setTypedChars] = useState(0);
  const [isBlinking, setIsBlinking] = useState(true);

  const type = () => {
    const typeInterval = setInterval(() => {
      setTypedChars((prevChars) => {
        const isTyping = prevChars < model.length;
        if (!isTyping) {
          clearInterval(typeInterval);
          setTimeout(() => {
            setIsBlinking(false);
          }, 1500);
        }
        return isTyping ? prevChars + 1 : prevChars;
      });
    }, 100);
  };

  useEffect(() => {
    if (isFlipped) {
      setIsBlinking(true);
      setTypedChars(0);
      type();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFlipped]);

  return (
    <div
      className={`left-0 bottom-0 absolute transition-opacity duration-500 p-little-s ${className}`}
    >
      <h3
        className={`${
          isBlinking ? "border-r-4" : ""
        } font-bold text-clamp-subtitle-m sm:text-clamp-title-s typewriter outlined-text`}
      >
        {model.slice(0, typedChars)}
      </h3>
      <div className="flex flex-wrap gap-little-xxs md:gap-little-s sm:text-clamp-text-s">
        {features?.map((feature) => (
          <li
            className={`px-2 py-0.5 border-2 border-white rounded-full text-clamp-text-s list-none backdrop-blur-md`}
            key={feature}
          >
            {feature}
          </li>
        ))}
      </div>
    </div>
  );
};

export default FlippingCardDetails;
