import { useEffect, useState } from "react";

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => {
      setPosition({
        x: e.clientX - 17,
        y: e.clientY - 15,
        el: document.elementFromPoint(e.clientX - 20, e.clientY - 20),
      });
    };
    window.addEventListener("mousemove", setFromEvent);
    window.addEventListener("click", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
      window.removeEventListener("click", setFromEvent);
    };
  }, []);

  return position;
};

// code from https://www.codedaily.io/tutorials/Create-a-useMousePosition-Hook-with-useEffect-and-useState-in-React
