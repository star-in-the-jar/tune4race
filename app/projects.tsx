import React, { FC, useState } from "react";
import Image from "next/image";
import FlippingCard from "./components/flippingCard";
import { projectCards } from "./utils/projectCards";
import { If, Show } from "multi-condition";

const Projects: FC = () => {
  const [shouldShowMore, setShouldShowMore] = useState(false);

  return (
    <section className="mt-big-m w-full h-auto">
      <div className="isolate relative w-full h-auto">
        <Image
          className="z-1"
          src="arrows-primary-big.svg"
          alt="Arrows pointing to the right"
          width={768}
          height={512}
          objectFit="contain"
        />
        <Image
          className="top-0 left z-2 absolute"
          src="section_lotus_after.png"
          alt="Lotus sports car"
          width={768}
          height={512}
        />
        <h1 className="top-0 right-little-xxl z-3 absolute font-bold text-clamp-title-m sm:text-clamp-title-m md:text-clamp-title-xl">
          REALIZACJE
        </h1>
      </div>
      <div className="gap-little-l md:gap-little-xxl grid grid-cols-1 md:grid-cols-2 md:mt-big-s px-little-l md:px-big-s pt-big-xl">
        {(shouldShowMore ? projectCards : projectCards.slice(0, 2)).map(
          (card) => (
            <FlippingCard
              key={projectCards.indexOf(card)}
              srcFront={card.srcFront}
              srcBack={card.srcBack}
            />
          )
        )}
      </div>
      <Show>
        <If condition={!shouldShowMore}>
        <div className="flex justify-center pt-big-s w-full">
          <button
            className="bg-primary hover:bg-primary-dark hover:bg-primary-dark mx-auto mt-big-s p-little-s rounded-md transition duration-300 ease"
            onClick={() =>
              setShouldShowMore((shouldShowMore) => !shouldShowMore)
            }
          >
            Pokaż Więcej
          </button>
        </div>
        </If>
      </Show>
    </section>
  );
};

export default Projects;
