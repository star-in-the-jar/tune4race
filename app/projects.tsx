import React, { FC, useState } from "react";
import Image from "next/image";
import FlippingCard from "./components/flippingCard";
import { projectCards } from "./utils/projectCards";
import { If, Show } from "multi-condition";
import Button, { ButtonVariant } from "./components/button";

const Projects: FC = () => {
  const [shouldShowMore, setShouldShowMore] = useState(false);

  return (
    <section
      className="mt-[10vh] w-full h-auto scroll-mt-[10vh]"
      id="realizacje"
    >
      <div className="isolate relative w-full h-auto">
        <Image
          className="z-1"
          src="arrows-primary-big.svg"
          alt="Arrows pointing to the right"
          width={768}
          height={512}
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
        {(shouldShowMore
          ? projectCards.slice(0, Math.trunc(projectCards.length / 2) * 2)
          : projectCards.slice(0, 2)
        ).map((card) => (
          <FlippingCard
            key={projectCards.indexOf(card)}
            front={card.front}
            back={card.back}
            details={card?.details}
          />
        ))}
      </div>
      <Show>
        <If condition={!shouldShowMore}>
          <div className="flex justify-center pt-little-l w-full">
            <Button
              onClick={() =>
                setShouldShowMore((shouldShowMore) => !shouldShowMore)
              }
              label="Pokaż Więcej"
              variant={ButtonVariant.SECONDARY}
            />
          </div>
        </If>
      </Show>
    </section>
  );
};

export default Projects;
