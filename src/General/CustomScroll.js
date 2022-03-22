import React, { useState, useEffect } from "react";

const CustomScroll = ({ size }) => {
  const [scrollbarHeight, setScrollBarHeight] = useState();
  const [scrollbarPosition, setScrollBarPosition] = useState();
  const [scrollBarRendered, setScrollBarRendered] = useState();
  const [scrollHeight, setScrollHeight] = useState();
  const [trackHeight, setTrackHeight] = useState();
  useEffect(() => {
    console.log(size);
    const myScrollFunc = () => {
      let SH = document.getElementById("outer").offsetHeight;
      let TH = size.height;
      let STH = document.getElementById("scroll-track").offsetHeight;
      setScrollHeight((p) => {
        p = document.getElementById("outer").offsetHeight;
        return p;
      });
      setTrackHeight((p) => {
        p = `${size.height}px`;
        return p;
      });
      setScrollBarHeight((p) => {
        p = `${Math.max((TH / SH) * STH, 20)}px`;
        return p;
      });
      document.getElementById("scrollbar").style.backgroundColor = "#d38239";

      let min = (+window.scrollY / +SH) * TH;
      setScrollBarPosition((p) => {
        p = `${Math.min(min, TH - Math.max((TH / SH) * STH, 20))}px`;

        console.log(trackHeight);

        return p;
      });
      setTimeout(() => {
        document.getElementById("scrollbar").style.backgroundColor =
          "transparent";
      }, 1000);
    };

    document.addEventListener("scroll", myScrollFunc);

    return () => {
      document.removeEventListener("scroll", myScrollFunc);
    };
  }, [size]);

  return (
    <div id='scroll-track' style={{ height: trackHeight }}>
      <div
        id='scrollbar'
        style={{
          height: scrollbarHeight,
          top: scrollbarPosition,
        }}></div>
    </div>
  );
};

export default CustomScroll;
