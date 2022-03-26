import React, { useEffect, useState, Suspense } from "react";

import MenuIcon from "./MenuIcon";
const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));

const MobileLanding = ({ size }) => {
  const [descriptor, setDescriptor] = useState("");
  const [arrPos, setArrPos] = useState(0);
  const [start, setStart] = useState();
  const [time, setTime] = useState(Date.now());

  const [page, setPage] = useState(0);

  const handleSetPage = (direct) => {
    setPage((p) => {
      if (direct) {
        p = direct;
      } else if (page >= 1) {
        p = 0;
      } else {
        p++;
      }
      console.log(p);
      return p;
    });
  };

  const handleTouchStart = (e) => {
    console.log("touchStart", e);
    setStart((p) => {
      p = { y: e.changedTouches[0].clientY, time: e.timeStamp };
      console.log(p.time);
      return p;
    });
  };
  const handleTouchEnd = (e) => {
    console.log("touchEnd", e);
    console.log(start.time, e.timeStamp, start.time - e.timeStamp);
    if (start.time - e.timeStamp < -225) {
      handleScroll(null, start.y, e.changedTouches[0].clientY);
    }
  };

  const handleScroll = (e, start, end) => {
    if (time + 1500 - Date.now() < 0) {
      console.log("handling scroll");
      let dif;
      if (e) {
        dif = e.deltaY + 1000;
      } else {
        dif = start - end;
      }
      console.log(dif);
      if (100 < dif || dif < -100) {
        console.log("changing page");
        handleSetPage();
        setTime(Date.now());
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
    <div id='app-container'>
      <MenuIcon />
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
    </div>
  );
};

export default MobileLanding;
