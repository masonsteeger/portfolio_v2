import { useEffect, useState } from "react";
import Intro from "./Intro";
import MobileLanding from "./Mobile/MobileLanding";
import useWindowSize from "./Hooks/useWindowSize";
import "./App.css";

function App() {
  const [ovFlow, setOvFlow] = useState("hidden");
  const [bgCol, setBgCol] = useState("#80a2ac");
  const [animation, setAnimation] = useState(true);

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
    <div id='outer' className='App' style={{ overflow: "hidden" }}>
      {animation ? (
        <Intro ovFlow={ovFlow} bgCol={bgCol} />
      ) : (
        <MobileLanding size={size} />
      )}
    </div>
  );
}

export default App;
