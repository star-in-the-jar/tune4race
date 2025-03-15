import { FC } from "react";


export interface Details {
  model: string;
  features: string[];
}

interface FlippingCardDetailsProps extends Details {
  className?: string;
}

const FlippingCardDetails: FC<FlippingCardDetailsProps> = ({
  model,
  features,
  className,
}) => {
  return (
    <div
      className={`left-0 bottom-0 absolute w-full transition-opacity duration-500 p-little-s ${className}`}
    >
      <h3 className="outlined-text font-bold text-clamp-title-s">{model}</h3>
        <div className="flex flex-wrap gap-little-s">
          {features.map((feature) => (
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
