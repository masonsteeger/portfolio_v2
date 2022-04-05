import React, { useState, useEffect, useRef, useCallback } from "react";

let scrollID;

const DesktopMenu = ({ data, page, setPage, size }) => {
  const [scrollbarHeight, setScrollBarHeight] = useState();
  const [scrollbarPosition, setScrollBarPosition] = useState();
  const [scrollBarRendered, setScrollBarRendered] = useState();
  const [scrollHeight, setScrollHeight] = useState();
  const [trackHeight, setTrackHeight] = useState();
  const [pageControll, setPageControll] = useState(0);

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

      const homeTop = document.getElementById("home-desktop-wrapper").offsetTop;
      const projectsTop = document.getElementById(
        "projects-desktop-wrapper"
      ).offsetTop;
      const aboutTop = document.getElementById(
        "about-desktop-wrapper"
      ).offsetTop;
      // const contactTop = document.getElementById(
      //   "contact-desktop-wrapper"
      // ).offsetTop;

      const switchVal = window.innerHeight * 0.6;
      const pos = document.getElementById(
        "desktop-content-container"
      ).scrollTop;

      console.log(pos);
      console.log(homeTop, projectsTop, aboutTop);
      switch (true) {
        case pos > switchVal + aboutTop:
          if (page !== 3) {
            setPageControll(3);
            return;
          }
          break;
        case pos > switchVal + projectsTop:
          if (page !== 2) {
            setPageControll(2);
            return;
          }
          break;
        case pos > switchVal + homeTop:
          setPageControll(1);
          return;

          break;
        case pos >= 0 && pos < 800:
          setPageControll(0);
          return;

          break;
        default:
          return;
      }
    },
    [size.height]
  );

  useEffect(() => {
    document
      .getElementById("desktop-content-container")
      .addEventListener("scroll", myScrollFunc);

    return () => {
      document
        .getElementById("desktop-content-container")
        .removeEventListener("scroll", myScrollFunc);
    };
  }, [size]);

  useEffect(() => {
    const title = document.getElementById("desktop-title-container");
    title.style.opacity = 0;
    const myTime = () =>
      setTimeout(() => {
        setPage(pageControll);
        title.style.opacity = 1;
      }, 300);

    let daTimer = myTime();

    return () => {
      clearTimeout(daTimer);
    };
  }, [pageControll]);

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
