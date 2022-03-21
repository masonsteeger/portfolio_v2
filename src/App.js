import { useEffect, useState } from "react";
import Intro from "./Intro";
import MobileLanding from "./MobileLanding";
import "./App.css";

function App() {
  const [ovFlow, setOvFlow] = useState("hidden");
  const [bgCol, setBgCol] = useState("#80a2ac");
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOvFlow("visible");
      setBgCol("#24232c");
    }, 2300);
    setTimeout(() => {
      setAnimation(false);
    }, 3500);
  }, []);

  return (
    <div className='App' style={{ overflow: "hidden" }}>
      {animation ? <Intro ovFlow={ovFlow} bgCol={bgCol} /> : <MobileLanding />}
    </div>
  );
}

export default App;
