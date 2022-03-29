import React, { useEffect, useState, Suspense } from "react";
import Intro from "./Intro";
import Loader from "./General/Loader";

import useWindowSize from "./Hooks/useWindowSize";
import "./App.css";

const MobileLanding = React.lazy(() => import("./MobilePages/MobileLanding"));
// import CustomScroll from "./General/CustomScroll";

function App() {
  const [ovFlow, setOvFlow] = useState("hidden");
  const [bgCol, setBgCol] = useState("#80a2ac");
  const [animation, setAnimation] = useState(true);
  const [bottomPull, setBottomPull] = useState("-50vh");

  const size = useWindowSize();
  useEffect(() => {
    setTimeout(() => {
      setOvFlow("visible");
      setBgCol("#24232c");
    }, 2300);
    setTimeout(() => {
      setAnimation(false);
    }, 3200);
  }, []);

  return (
    <>
      <div id='outer' className='App' style={{ overflow: "hidden" }}>
        {animation ? (
          <Intro ovFlow={ovFlow} bgCol={bgCol} />
        ) : (
          <Suspense fallback={<></>}>
            <MobileLanding size={size} />
          </Suspense>
        )}
        {/* <CustomScroll size={size} /> */}
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
