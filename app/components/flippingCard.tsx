"use client";
import { FC, useState } from "react";
import { LazyImage } from "./lazyImage";
import FlippingCardDetails, { Details } from "./flippingCardDetails";
import Image from "next/image";

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
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card from flipping when clicking the maximize icon
    setIsMaximized(true);
  };

  return (
    <>
      <div
        onClick={() => setIsFlipped((prev) => !prev)}
        className={`group mx-auto w-full perspective`}
      >
        <div
          className={`relative w-full transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          } transition-transform duration-500 cursor-pointer`}
        >
          <div className="relative inset-1 flex justify-center items-center min-h-[200px] md:min-h-[300px] xl:min-h-[400px] overflow-hidden backface-hidden">
            <LazyImage
              src={front.src}
              alt="Card front Side - after"
              className="rounded-xl"
              blurHash={front.blurHash}
            />
            <button
              onClick={handleMaximize}
              className="top-2 right-2 absolute bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
            </button>
          </div>

          <div className="absolute inset-1 flex justify-center items-center rounded-lg min-h-[200px] md:min-h-[300px] xl:min-h-[400px] rotate-y-180 backface-hidden">
            <LazyImage
              src={back.src}
              alt="Card Back Side - before"
              className="z-5 rounded-xl"
              blurHash={back.blurHash}
            />
            <button
              onClick={handleMaximize}
              className="top-2 right-2 absolute bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
            </button>
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

      {isMaximized && (
        <div
          className="z-50 fixed inset-0 flex justify-center items-center bg-black/90"
          onClick={() => setIsMaximized(false)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={isFlipped ? back.src : front.src}
              alt={
                isFlipped
                  ? "Card Back Side - before"
                  : "Card front Side - after"
              }
              className="rounded-xl max-w-full max-h-[90vh] object-contain"
              layout="responsive"
              width={500}
              height={500}
            />
            <button
              onClick={() => setIsMaximized(false)}
              className="top-2 right-2 absolute bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FlippingCard;
