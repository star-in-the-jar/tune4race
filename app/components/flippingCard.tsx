"use client"
import Image from "next/image";
import { FC, useEffect } from "react";
import { decode } from "blurhash";

interface ImageCard {
  src: string;
  blurHash: string;
}

export interface FlippingCardProps {
  front: ImageCard;
  back: ImageCard;
}

const FlippingCard: FC<FlippingCardProps> = ({ front, back }) => {
  function decodeBlurHash(hash: string) {
    const pixels = decode(hash, 32, 32);
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      const imageData = ctx.createImageData(32, 32);
      imageData.data.set(pixels);
      ctx.putImageData(imageData, 0, 0);
    }

    return canvas.toDataURL();
  }

    useEffect(() => {
    // Run only on client
    console.log(decodeBlurHash("L7CQGF00VpIA.lxHD$ozXRxDtm%M"));
  }, []);

  return (
    <div className={`group mx-auto w-full perspective`}>
      <div className="relative w-full transform-style-3d group-hover:rotate-y-180 transition-transform duration-500">
        <div className="inset-1 flex justify-center items-center min-h-[200px] md:min-h-[300px] xl:min-h-[400px] overflow-hidden backface-hidden">
          <Image
            src={front.src}
            alt="Front Side"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABTtJREFUWEe1V8tuFEcUvfXoHo/9FSRKFmHBhk0iIdnGjsFYWDxsk0AsgiJFihBK/l/uis4591bXAItsAhpXz4zd53GfnT78c9uM/7KllCzlYikVy8OZc9X7XCzzO/xu9jPp73AL/ogTt239/9eu+au//33b8Ie4BW4K8EQAger1vxL4zR1wAq6Sah14PcOdbBlkSZTUqT6FAyb1+EweLN0NfYJ/+pnef3rrV2FrWF0tl3BhOAmMUIRjCoFz6MABPZ67nylU6fbjLx4CKUKME5SXaoUOBJE1JIw/wzWCQ75US936ouYU78MD1/3ur2teKakETmCqn6zg5PWQEwQfCIy514FkfifCz51cvzZLv/75krSDQC4TwUqZrNTJSp4Mn5WinJD9I7hXQI/r56CRDzTanQgiZunmj+dNFVAsEwTAMwlUP0VgNwR0YA28Wdu1PZQnt18nnHbrPWHT1ftzfsNyQ9zLTAIEJwGccGJNyrBfxSs1LQh0IouN4MzTIKCcFaGX704bvgEBgpXZ6rSxWjefEVnzYCRApRQFEio38xMEoFgvqdcJx0UiXb45dAJSL/A9m3AOREr9CoGOjYsgsPA6ofYBaM2yA+ccLgwELl7/1JJl2V8BCvCtTfNeJ1An5QSrAWWa/E4U7va3RWGA+gb7FykmATP8Cc6cBY5rXKSnlw8bK4DqAb5n0wwC2/5+h0AuvFuUO4ttcfUOLgJygWAZJJIVkAgCZGCWzp49aGxAJLC1adq3abO1ed53F+CEHEAlaFhlZZCrh/K2SHlrd5Y6gebgADYrGbmmV8+Dkyc/0IFSNlbnfQFvDmx2FxCKMs1Wy8wQiAD9WwksCwkwCQE+hABCpVwEgkR00fT49LuGHlAqlDo4CcgJhIQOVBFAE2JAvZeE+rbcicDi8fccKCQA1Wal5C9dOD7+pkFVKVs5sDmQAxuEAC9VA3pBdEJVf2LSrQQAfucluFj27KcDBSTgcjiAtu9hODq61x2Y5gPjKwh0B0YCmgMs9/9AIGwnOAkg3zDMsPwkS8eHIpBR+50A7Id6lSM7IhwYQxAEogIQAtgf8YcDQ9wrCcAFbVLdgceH3zZjDsDqAIYLCAlyYMMkZB/gMPIKiBwYE7ATUPdj/N12ANcgQBIegpOj7+WAlyHyoMJ69IHejJCAIDA0oRZVgApoTL7egLz5KP6pA4cDDENsUz8f36dXAEALLpOAQaCwHQ8VMPaAKEOAe/ZHC0aKRvkFaKjnWB8deHL6oKGs+hhm2cF2P1F+XgFywHvAUIZS3yxxBqj3s/N50pWq2AM8CHGgIQznZ2jFyMhqOUYwJmEo50hG7LUPaHnhtukvDaK1/a49nxXA2CPHVgJKQl9qLs5/1ELi+wBIcAEJ5T6EogVHG9Ze4eNwUK9Bo3rvMafylcQOgcuLRxzHtCT2vzJZiunn6rWCYwh5F4ztiusM7Neo5cQjgbA9W6lBIOKPzcur4MXlUV9KqTIAve/30uMYhle7BOJRAJ2P3/Z+L8uZfE4gxwkxEYJXL060pjAM2vnNH8PiMY3j12dALGExjiMl6Q1Hr/f7sJ3Wf+kAExCCrl6drVsitwY9nrGN9eVDC0jMAK1zSbb7oyBsD+tRZmvWY9ERATigxVdJyHteXz31dRW3jZ3J5yenXmw/AbXSCErsjR53OeAZT+AggCqLHBhCcHP9bNiTkzVuiwGa9b7r9C1mdAC2037EfwDv1otArtg55YBC7SF4c3PhBRVPl0HCRy4diGdur/8goId6z3zZ2tXvEJD6XQIItdm/wsHJbCF0uKsAAAAASUVORK5CYII="
          />
        </div>
        <div className="absolute inset-1 flex justify-center items-center rounded-lg min-h-[200px] md:min-h-[300px] xl:min-h-[400px] rotate-y-180 backface-hidden">
          <Image
            src={back.src}
            alt="Back Side"
            layout="fill"
            placeholder="blur"
            blurDataURL={back?.blurHash ?? "data:image/svg+xml;base64"}
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
