"use client";

import { useEffect, useState } from "react";

enum Breakpoints {
  MOBILE = 425,
  TABLET = 768,
  LAPTOP = 1024,
  DESKTOP = 1440,
  WIDESCREEN = 2560,
}

const isWindowDefined = () => typeof window !== "undefined";

const useWidth = () => {
  const [width, setWidth] = useState(
    isWindowDefined() ? window.innerWidth : 0
  );

  const handleResize = () => {
    if (isWindowDefined()) {
      setWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    if (isWindowDefined()) {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const getRange = () => ({
    isMobileOrSmaller: width <= Breakpoints.MOBILE,
    isTabletOrSmaller: width <= Breakpoints.TABLET,
    isLaptopOrSmaller: width <= Breakpoints.LAPTOP,
    isDesktopOrSmaller: width <= Breakpoints.DESKTOP,
    isWidescreenOrSmaller: width <= Breakpoints.WIDESCREEN,
  })

  return getRange();
};

export default useWidth;
