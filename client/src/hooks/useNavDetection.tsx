import { useEffect, useState } from "react";

// This hook is used to:
// -> Check if the user scrolled the window page,
// -> Check which direction the user is scrolling, if the user is scrolls to the top returns true.

// The navbar only shows to the user when scrolling to top

export const useNavDetection = () => {
  const [scrollingTop, setScrollingTop] = useState<boolean>(true),
    [hasScrolled, setHasScrolled] = useState<boolean>(false),
    [lastScroll, setLastScroll] = useState<number>(0);

  const scroll = () => {
    const pageY = window.scrollY;

    if (pageY > lastScroll) setScrollingTop(false);
    else setScrollingTop(true);

    if (pageY > 20) setHasScrolled(true);
    else setHasScrolled(false);

    setLastScroll(pageY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, [lastScroll]);

  return { scrollingTop, hasScrolled };
};
