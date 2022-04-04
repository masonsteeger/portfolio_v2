import React, { useEffect, useState, Suspense } from "react";
import Loader from "../General/Loader";
import MenuIcon from "../Components/MobileMenu/MenuIcon";
import Logo from "../Components/Logo";
import ProjectExplorer from "../General/ProjectExplorer";

const MobileHome = React.lazy(() => import("./MobileHome"));
const MobilePageWrapper = React.lazy(() =>
  import("../Components/MobilePageWrapper")
);

let timerID;

const MobileLanding = ({ ...props }) => {
  const [start, setStart] = useState();
  const [time, setTime] = useState(Date.now() - 2000);
  const [containerVar, setContainerVar] = useState("app-container visible");
  const [classVar, setClassVar] = useState("outer-wrapper");
  const [open, setOpen] = useState(false);

  const {
    data,
    page,
    setPage,
    folderOpen,
    setFolderOpen,
    selectedPage,
    setSelectedPage,
    folderToggle,
    setFolderToggle,
  } = props;

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
        window.scrollTo(null, 0);
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
      bottom: `calc(100vh - ${diameter / 2})px`,
    };

    Object.assign(circ.style, myStyles);

    circ.classList.add("ripple");

    const ripple = element.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }
    element.appendChild(circ);

    setTimeout(() => {
      circ.style.height = 0;
      circ.remove();
    }, 1000);
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
    }, 600);
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
    if (time + 1000 - Date.now() < 0) {
      setTime(Date.now());
      console.log("handling scroll");

      setContainerVar("app-container");
      setClassVar("outer-wrapper");
      setTimeout(() => {
        handleSetPage("null", 1);
        console.log("changing page");
      }, 500);
    } else {
      console.log("too quick!!");

      console.log(time + 700 - Date.now());
    }
  };

  useEffect(() => {
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
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
        open={open}
        setOpen={setOpen}
      />

      <Logo open={open} />
      <div className={containerVar} style={{ overflow: "hidden" }}>
        {page === 0 ? <MobileHome classVar={classVar} data={data} /> : null}
        {page === 1 ? (
          <Suspense fallback={<Loader />}>
            <MobilePageWrapper
              title={data.pages[1].title.toUpperCase()}
              classVar={classVar}
              styles={{ textAlign: "left" }}>
              <ProjectExplorer
                data={data.pages[1]}
                folderOpen={folderOpen}
                setFolderOpen={setFolderOpen}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                folderToggle={folderToggle}
                setFolderToggle={setFolderToggle}
                outerClass={"project-explorer"}
                folderContainerClass={"folder-container"}
                foldersClass={"folders"}
              />
            </MobilePageWrapper>
          </Suspense>
        ) : null}
        {page === 2 ? (
          <Suspense fallback={<Loader />}>
            <MobilePageWrapper
              title={data.pages[2].title.toUpperCase()}
              classVar={classVar}
              styles={{ textAlign: "left" }}>
              <img
                src={data.pages[2].img}
                style={{
                  width: "100%",
                  margin: "0 0 20px",
                  borderRadius: "25px",
                }}
                alt='Mason Steeger'
              />
              <p style={{ paddingBottom: "70px" }}>{data.pages[2].about}</p>
            </MobilePageWrapper>
          </Suspense>
        ) : null}
        {page === 3 ? (
          <Suspense fallback={<Loader />}>
            <MobilePageWrapper
              title={data.pages[3].title.toUpperCase()}
              classVar={classVar}
              styles={{ textAlign: "left" }}>
              <p style={{ marginBottom: "25px" }}>{data.pages[3].thanks}</p>
              <div className='external-link-container-mobile'>
                {data.pages[3].links.map((item, i) => {
                  return (
                    <>
                      <a
                        className='contact-link'
                        rel='noreferrer'
                        href={item.link}
                        target='_blank'>
                        <img
                          src={item.src}
                          style={{
                            width: item.width,
                            marginBottom: "10px",
                          }}
                          alt={item.alt}
                        />
                      </a>
                      <p className='contact-link-text'>{item.text}</p>
                    </>
                  );
                })}
              </div>
              <div style={{ height: "40px" }}></div>
            </MobilePageWrapper>
          </Suspense>
        ) : null}
      </div>
    </>
  );
};

export default MobileLanding;
