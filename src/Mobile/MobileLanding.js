import React, { useEffect, useState, Suspense } from "react";

import MenuIcon from "./MenuIcon";
const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Projects = React.lazy(() => import("./Projects"));
const Contact = React.lazy(() => import("./Contact"));

const MobileLanding = ({ size }) => {
  const [descriptor, setDescriptor] = useState("");
  const [arrPos, setArrPos] = useState(0);
  const [start, setStart] = useState();
  const [time, setTime] = useState(Date.now() - 2000);
  const [containerVar, setContainerVar] = useState("app-container visable");
  const [page, setPage] = useState(0);

  useEffect(() => {});

  const handleSetPage = (direct, dif) => {
    setPage((p) => {
      switch (true) {
        case typeof direct === "number":
          p = direct;
          break;
        case dif > 0 && page >= 3:
          p = 0;
          break;
        case dif < 0 && page === 0:
          p = 3;
          break;
        case dif < 0:
          p--;
          break;
        case dif > 0:
          p++;
          break;
        default:
          break;
      }
      console.log(p);
      window.scroll(0, 0);
      setContainerVar("app-container visable");
      return p;
    });
  };

  const handleTouchStart = (e) => {
    setStart((p) => {
      p = { y: e.changedTouches[0].clientY, time: e.timeStamp };
      return p;
    });
  };
  const handleTouchEnd = (e) => {
    console.log(start.time, e.timeStamp, start.time - e.timeStamp);
    if (start.time - e.timeStamp < -160) {
      handleScroll(null, start.y, e.changedTouches[0].clientY);
    }
  };

  const handleScroll = (e, start, end) => {
    if (time + 700 - Date.now() < 0) {
      console.log("handling scroll");
      let dif;
      if (e) {
        dif = e.deltaY + 1000;
      } else {
        dif = start - end;
      }
      console.log(dif);
      if (75 < dif || dif < -75) {
        setContainerVar("app-container");
        setTimeout(() => {
          handleSetPage("null", dif);
          setTime(Date.now());
          console.log("changing page");
        }, 500);
      }
    } else {
      console.log("too quick!!");
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [start, time, page]);

  return (
    <>
      <MenuIcon
        handleSetPage={handleSetPage}
        setContainerVar={setContainerVar}
        setTime={setTime}
      />
      <div className={containerVar}>
        {page === 0 ? (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ) : null}
        {page === 1 ? (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ) : null}
        {page === 2 ? (
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
          </Suspense>
        ) : null}
        {page === 3 ? (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ) : null}
      </div>
    </>
  );
};

export default MobileLanding;
