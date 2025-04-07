"use client";
import { FC, useState } from "react";
import { LazyImage } from "./lazyImage";
import FlippingCardDetails, { Details } from "./flippingCardDetails";

interface ImageCard {
  src: string;
  blurHash: string;
}

export interface FlippingCardProps {
  front: ImageCard;
  back: ImageCard;
  details?: Details;
}

const FlippingCard: FC<FlippingCardProps> = ({ front, back, details }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div onClick={() => setIsFlipped(prev => !prev)} className={`group mx-auto w-full perspective`}>
      <div className={`relative w-full transform-style-3d ${isFlipped ? "rotate-y-180" : ""} transition-transform duration-500 cursor-pointer`}>
        <div className="inset-1 flex justify-center items-center min-h-[200px] md:min-h-[300px] xl:min-h-[400px] overflow-hidden backface-hidden">
          <LazyImage
            src={front.src}
            alt="Card front Side - after"
            className="rounded-xl"
            blurHash={front.blurHash}
          />
        </div>
        <div className="absolute inset-1 flex justify-center items-center rounded-lg min-h-[200px] md:min-h-[300px] xl:min-h-[400px] rotate-y-180 backface-hidden">
          <LazyImage
            src={back.src}
            alt="Card Back Side - before"
            className="z-5 rounded-xl"
            blurHash={back.blurHash}
          />
          {details && (
            <FlippingCardDetails
              model={details.model}
              features={details.features}
              isFlipped={isFlipped}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
