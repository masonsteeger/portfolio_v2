import React, { useState, useEffect } from "react";

let scrollID;

const CustomScroll = ({ size }) => {
  const [scrollbarHeight, setScrollBarHeight] = useState();
  const [scrollbarPosition, setScrollBarPosition] = useState();
  const [scrollBarRendered, setScrollBarRendered] = useState();
  const [scrollHeight, setScrollHeight] = useState();
  const [trackHeight, setTrackHeight] = useState();

  useEffect(() => {
    const myScrollFunc = (e) => {
      if (typeof scrollID === "number") {
        clearTimeout(scrollID);
      }
      let SH = document.getElementById("inner-desktop-content").offsetHeight;
      let TH = size.height;
      let STH = document.getElementById("scroll-track").offsetHeight;
      // console.log("SH: " + SH, "TH: " + TH, "STH: " + STH);
      setScrollHeight((p) => {
        p = document.getElementById("inner-desktop-content").offsetHeight;
        // console.log(p);
        return p;
      });
      setTrackHeight((p) => {
        p = `${size.height}px`;
        return p;
      });
      setScrollBarHeight((p) => {
        p = `${Math.max((TH / SH) * STH - 20, 20)}px`;
        return p;
      });
      document.getElementById("scrollbar").style.backgroundColor = "#d38239";

      let min =
        (document.getElementById("desktop-content-container").scrollTop / +SH) *
        TH;
      console.log();

      setScrollBarPosition((p) => {
        p = `${Math.min(min, TH - Math.max((TH / SH) * STH, 20))}px`;
        // console.log(p);
        return p;
      });
      const timer = () =>
        setTimeout(() => {
          document.getElementById("scrollbar").style.backgroundColor =
            "transparent";
        }, 500);

      scrollID = timer();
    };

    window.addEventListener("wheel", myScrollFunc);

    return () => {
      window.removeEventListener("wheel", myScrollFunc);
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
