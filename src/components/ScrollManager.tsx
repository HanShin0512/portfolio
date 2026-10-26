
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();
  const lenis = useLenis();

  useLayoutEffect(() => {
    if (!lenis) return;

    let frameId: number | undefined;

    if (pathname === "/" && hash) {
      frameId = requestAnimationFrame(() => {
        const section = document.getElementById(
          decodeURIComponent(hash.slice(1))
        );

        if (section) {
          lenis.scrollTo(section, {
            duration: 1.2,
            force: true,
          });
        }
      });
    } else {
      lenis.scrollTo(0, {
        immediate: true,
        force: true,
      });
    }

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [pathname, hash, key, lenis]);

  return null;
};

export default ScrollManager;