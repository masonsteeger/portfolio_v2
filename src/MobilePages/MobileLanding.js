import React, { useEffect, useState, useRef, Suspense } from "react";
import Loader from "../General/Loader";
import MenuIcon from "../Components/MobileMenu/MenuIcon";
import Logo from "../Components/Logo";
import ProjectExplorer from "../General/ProjectExplorer";

const Home = React.lazy(() => import("./Home"));
const PageWrapper = React.lazy(() => import("../Components/PageWrapper"));

let timerID;

const MobileLanding = ({ size }) => {
  const [descriptor, setDescriptor] = useState("");
  const [arrPos, setArrPos] = useState(0);
  const [start, setStart] = useState();
  const [time, setTime] = useState(Date.now() - 2000);
  const [containerVar, setContainerVar] = useState("app-container visible");
  const [page, setPage] = useState(0);
  const [nextPage, setNextPage] = useState(false);
  const [classVar, setClassVar] = useState("outer-wrapper");

  const appRef = useRef();

  const handleSetPage = (direct, dif) => {
    setTimeout(() => {
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
        setContainerVar("app-container visible");
        setClassVar("outer-wrapper visible");
        return p;
      });
    }, 300);
  };

  const causeRipple = () => {
    const element = document.getElementById("outer");
    const circ = document.createElement("span");
    const diameter = Math.max(element.clientWidth);
    const myStyles = {
      position: "absolute",
      overflowX: "hidden",
      zIndex: "996",
      width: `${diameter}px`,
      height: `${diameter}px`,
      left: `${window.innerWidth / 2 - diameter / 2}px`,
      top: `calc(100vh - ${diameter / 2})px`,
    };

    Object.assign(circ.style, myStyles);

    circ.classList.add("ripple");

    const ripple = element.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }
    element.appendChild(circ);
  };

  const handleTouchStart = (e) => {
    clearTimeout(timerID);
    setStart((p) => {
      p = { y: e.changedTouches[0].clientY, time: e.timeStamp };
      return p;
    });
    timerID = timer();
  };
  const timer = () =>
    setTimeout(() => {
      if (
        timerID &&
        window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight
      ) {
        var e = new TouchEvent("touchend");
        window.dispatchEvent(e);
        causeRipple();
        handleScroll();
      }
    }, 850);
  const handleTouchEnd = (e) => {
    console.log(
      window.scrollY + window.innerHeight,
      document.documentElement.scrollHeight
    );
    if (start.time - e.timeStamp < -850) {
    } else {
      console.log("setting to false");
      clearTimeout(timerID);
    }
  };

  const handleScroll = () => {
    const element = document.documentElement;
    // if (
    //   window.innerHeight + window.scrollY >= element.scrollHeight ||
    //   window.scrollY === 0
    // ) {
    //   let currentTime = Date.now();

    //   setTimeout(() => {
    //     if (currentTime + 1000 - Date.now() < 0) {
    //       setNextPage(true);
    //       console.log("NEXT1!!");
    //     } else {
    //       console.log("TOO SLOW");
    //       setNextPage(false);
    //     }
    //   }, 1000);
    // }
    if (time + 1000 - Date.now() < 0) {
      setTime(Date.now());
      setNextPage((p) => {
        p = false;
        return p;
      });
      console.log("handling scroll");

      setContainerVar("app-container");
      setClassVar("outer-wrapper");
      setTimeout(() => {
        window.scroll(0, 0);
        handleSetPage("null", 1);
        console.log("changing page");
      }, 500);
    } else {
      console.log("too quick!!");

      console.log(time + 700 - Date.now());
    }
  };

  useEffect(() => {
    // window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      // window.removeEventListener("wheel", handleScroll);
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
        page={page}
      />

      <Logo />
      <div className={containerVar} style={{ overflow: "hidden" }}>
        {page === 0 ? <Home classVar={classVar} /> : null}
        {page === 1 ? (
          <Suspense fallback={<Loader />}>
            <PageWrapper
              title={"PROJECTS"}
              classVar={classVar}
              styles={{ textAlign: "left" }}>
              <ProjectExplorer />
            </PageWrapper>
          </Suspense>
        ) : null}
        {page === 2 ? (
          <Suspense fallback={<Loader />}>
            <PageWrapper
              title={"ABOUT"}
              classVar={classVar}
              styles={{ textAlign: "left" }}>
              <img
                src={"./images/smile.webp"}
                style={{
                  width: "100%",
                  margin: "0 0 20px",
                  borderRadius: "25px",
                }}
                alt='Me'
              />
              <p style={{ paddingBottom: "70px" }}>
                I’m Mason Steeger and I've been interested in computer
                programming since childhood. In August of 2020 I began studying
                Full-Stack Development at General Assembly. Since then, I’ve
                worked with LG and Samsung through SJ Design Studio to develop
                static web pages and content management systems. I’m typically
                found jamming with friends and playing video games outside of my
                professional practice.
              </p>
            </PageWrapper>
          </Suspense>
        ) : null}
        {page === 3 ? (
          <Suspense fallback={<Loader />}>
            <PageWrapper
              title={"CONTACT"}
              classVar={classVar}
              styles={{ textAlign: "left" }}>
              <p style={{ paddingBottom: "70px" }}>
                This is where i will eventually put all of my contact info and
                probably my github/linkedIn stuff. Maybe an email form or
                something? idrk.
              </p>
            </PageWrapper>
          </Suspense>
        ) : null}
      </div>
    </>
  );
};

export default MobileLanding;
