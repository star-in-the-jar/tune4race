import Subsection from "./components/subsection";
import { servicedByUsCards } from "./utils/servicedByUsCards";
import Image from "next/image";

const ServicedByUs = () => {
  return (
    <section>
      <Subsection title="Serwisowane u Nas">
        <div className="gap-little-l grid md:grid-cols-2 px-little-l md:px-big-s rounded-md">
          {servicedByUsCards.map((card, index) => (
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
      </Subsection>
    </section>
  );
};

export default ServicedByUs;
