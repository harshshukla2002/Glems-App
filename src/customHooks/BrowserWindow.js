import { useEffect, useState } from "react";

export const useWindow = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.scrollY);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.scrollY);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.addEventListener("scroll", handleResize);
    };
  }, []);

  return { width, height };
};
