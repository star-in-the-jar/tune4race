import { useState } from "react";
import Image from "next/image";
import { Blurhash } from "react-blurhash";

export const LazyImage = ({
  src,
  alt,
  className,
  blurHash,
}: {
  src: string;
  alt: string;
  className?: string;
  blurHash: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className={`transition ease 300ms rounded-xl ${
          isLoaded ? "opacity-100" : "translate-y-3 opacity-0 z-5"
        } ${className}`}
        onLoad={() => setIsLoaded(true)}
      />
      <div className="top-0 left-0 absolute rounded-xl w-full h-full overflow-hidden">
        <Blurhash
          hash={blurHash}
          width={800}
          height={600}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className={`w-full h-full transition ease 300ms ${
            isLoaded ? "opacity-0 translate-y-3" : "opacity-50 z-8"
          }`}
        />
      </div>
    </>
  );
};
