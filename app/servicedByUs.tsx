import { Show } from "multi-condition";
import { If } from "multi-condition";
import Button from "./components/button";
import { ButtonVariant } from "./components/button";
import Subsection from "./components/subsection";
import { servicedByUsCards } from "./utils/servicedByUsCards";
import Image from "next/image";
import { useState } from "react";

const ServicedByUs = () => {
  const [shouldShowMore, setShouldShowMore] = useState(false);

  return (
    <section>
      <Subsection title="Serwisowane u Nas">
        <div className="gap-little-l grid md:grid-cols-2 px-little-l md:px-big-s pt-little-xl rounded-md">
          {(shouldShowMore
            ? servicedByUsCards
            : servicedByUsCards.slice(0, 2)
          ).map((card, index) => (
            <Image
              key={index}
              src={card.src}
              alt=""
              width={768}
              height={512}
              className="rounded-xl"
            />
          ))}
        </div>
        <Show>
          <If condition={!shouldShowMore}>
            <div className="flex justify-center mt-little-xxl md:pt-little-m w-full">
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
      </Subsection>
    </section>
  );
};

export default ServicedByUs;
