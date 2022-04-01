import React, { useEffect, useState, Suspense } from "react";
import Loader from "./General/Loader";

import useWindowSize from "./Hooks/useWindowSize";
import "./App.css";
import data from "./data.json";

const Intro = React.lazy(() => import("./Intro"));
const MobileLanding = React.lazy(() => import("./MobilePages/MobileLanding"));

const DesktopLanding = React.lazy(() =>
  import("./DesktopPages/DesktopLanding")
);
// import CustomScroll from "./General/CustomScroll";

function App() {
  const [ovFlow, setOvFlow] = useState("hidden");
  const [bgCol, setBgCol] = useState("#80a2ac");
  const [animation, setAnimation] = useState(true);
  const [page, setPage] = useState(0);
  const [folderOpen, setFolderOpen] = useState(null);
  const [selectedPage, setSelectedPage] = useState(null);
  const [folderToggle, setFolderToggle] = useState(null);

  const size = useWindowSize();
  const getUserAgent = () => {
    const ua = navigator.userAgent;
    if (
      /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua) ||
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    } else {
      return "desktop";
    }
  };

  const [device] = useState(getUserAgent());
  return (
    <>
      <div id='outer' className='App' style={{ overflow: "hidden" }}>
        {animation ? (
          <Suspense fallback={<Loader />}>
            <Intro
              ovFlow={ovFlow}
              bgCol={bgCol}
              setOvFlow={setOvFlow}
              setBgCol={setBgCol}
              setAnimation={setAnimation}
            />
          </Suspense>
        ) : device === "mobile" ? (
          <Suspense fallback={<Loader />}>
            <MobileLanding
              size={size}
              data={data}
              page={page}
              setPage={setPage}
              folderOpen={folderOpen}
              setFolderOpen={setFolderOpen}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              folderToggle={folderToggle}
              setFolderToggle={setFolderToggle}
            />
          </Suspense>
        ) : (
          <>
            <Suspense fallback={<Loader />}>
              <DesktopLanding
                size={size}
                data={data}
                page={page}
                setPage={setPage}
                folderOpen={folderOpen}
                setFolderOpen={setFolderOpen}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                folderToggle={folderToggle}
                setFolderToggle={setFolderToggle}
              />
            </Suspense>
          </>
        )}
      </div>
      <div
        id='backup-bg'
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "-1",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#24232c",
        }}></div>
    </>
  );
}

export default App;
