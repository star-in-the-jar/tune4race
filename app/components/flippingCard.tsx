import Image from "next/image";
import { FC } from "react";

export interface FlippingCardProps {
  srcFront: string;
  srcBack: string;
  flexBasis?: string;
}

const FlippingCard: FC<FlippingCardProps> = ({ srcFront, srcBack }) => {
  return (
    <div className={`group mx-auto w-full perspective`}>
      <div className="relative w-full transform-style-3d group-hover:rotate-y-180 transition-transform duration-500">
        <div className="inset-1 flex justify-center items-center min-h-[200px] md:min-h-[300px] xl:min-h-[400px] overflow-hidden backface-hidden">
          <Image
            src={srcFront}
            alt="Front Side"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="absolute inset-1 flex justify-center items-center rounded-lg min-h-[200px] md:min-h-[300px] xl:min-h-[400px] rotate-y-180 backface-hidden">
          <Image
            src={srcBack}
            alt="Back Side"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
