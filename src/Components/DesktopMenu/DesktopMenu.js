import React, { useState, useEffect, useRef, useCallback } from "react";
import CustomScroll from "../../General/CustomScroll";

let scrollID;

const DesktopMenu = ({ data, page, setPage, size }) => {
  const [scrollbarHeight, setScrollBarHeight] = useState();
  const [scrollbarPosition, setScrollBarPosition] = useState();
  const [scrollBarRendered, setScrollBarRendered] = useState();
  const [scrollHeight, setScrollHeight] = useState();
  const [trackHeight, setTrackHeight] = useState();

  const myScrollFunc = useCallback(
    (e) => {
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

      // console.log(
      //   document.getElementById("desktop-content-container").scrollTop
      // );

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
    },
    [size.height]
  );

  useEffect(() => {
    window.addEventListener("wheel", myScrollFunc);
    window.addEventListener("scroll", myScrollFunc);

    return () => {
      window.removeEventListener("wheel", myScrollFunc);
      window.removeEventListener("scroll", myScrollFunc);
    };
  }, [size]);

  return (
    <>
      <div className='desktop-menu-container'>
        {data.menu.map((item, i) => {
          return (
            <img
              onClick={() => {
                const element = document.getElementById(
                  `${item.pageName.toLowerCase()}-desktop-wrapper`
                );
                setPage(i);
                element.scrollIntoView({ behavior: "smooth" });
              }}
              key={`desktop-menu-${i}`}
              style={
                i === page
                  ? { transform: "scale(1.4)" }
                  : { transform: "scale(1)" }
              }
              className='desktop-menu-icon'
              src={item.icon}
              alt={item.pageName}
            />
          );
        })}
      </div>
      <div id='scroll-track' style={{ height: trackHeight }}>
        <div
          id='scrollbar'
          style={{
            height: scrollbarHeight,
            top: scrollbarPosition,
          }}></div>
      </div>
    </>
  );
};

export default DesktopMenu;
