import React, { FC, useState } from "react";
import FlippingCard from "./components/flippingCard";
import { projectCards } from "./utils/projectCards";
import { If, Show } from "multi-condition";
import Button, { ButtonVariant } from "./components/button";
import Subsection from "./components/subsection";
import Section from "./components/section";

const Projects: FC = () => {
  const [shouldShowMore, setShouldShowMore] = useState(false);

  return (
  <Section
      title="Nasze Projekty"
      id="realizacje"
      image="section_lotus_after.png"
      imageAlt="Lotus sports car"
    >
      <div className="mt-big-l sm:mt-big-xl md:mt-big-xxl">
        <Subsection title="Nasze Projekty" />
      </div>
      <div className="gap-little-l grid grid-cols-1 md:grid-cols-2 md:mt-big-s px-little-l md:px-big-s pt-little-l">
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
              className="mt-big-s"
            />
          </div>
        </If>
      </Show>
    </Section>
  );
};

export default Projects;
