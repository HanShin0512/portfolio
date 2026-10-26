
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();
  const lenis = useLenis();

  useLayoutEffect(() => {
    if (pathname === "/ProjectPage") {
      lenis?.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
      return;
    }

    if (pathname === "/" && hash) {
      requestAnimationFrame(() => {
        const section = document.getElementById(hash.slice(1));

        if (section) {
          lenis
            ? lenis.scrollTo(section, { duration: 1.2 })
            : section.scrollIntoView({ behavior: "smooth" });
        }
      });

      return;
    }

    lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname, hash, key, lenis]);

  return null;
};

export default ScrollManager;