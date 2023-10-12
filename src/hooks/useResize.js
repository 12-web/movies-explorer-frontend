import { useEffect, useState } from "react";
import { SCREEN_SIZES } from "../utils/constants";

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (e) => {
      setTimeout(() => {
        setWidth(e.target.innerWidth);
      }, 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let screen = {};

  if (width < SCREEN_SIZES.md.size) screen = SCREEN_SIZES.s;
  else if (width >= SCREEN_SIZES.md.size && width < SCREEN_SIZES.l.size)
    screen = SCREEN_SIZES.md;
  else if (width >= SCREEN_SIZES.l.size && width < SCREEN_SIZES.xl.size)
    screen = SCREEN_SIZES.l;
  else screen = SCREEN_SIZES.xl;

  return { screen };
};
