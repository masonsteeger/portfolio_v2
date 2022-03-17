import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [ovFlow, setOvFlow] = useState("hidden");
  const [bgCol, setBgCol] = useState("#282c34");
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log("doin it");
      setOvFlow("visible");
      setBgCol("white");
    }, 2300);
    // setTimeout(() => {
    //   setOvFlow("hidden");
    // }, 2800);
    setTimeout(() => {
      setAnimation(false);
    }, 3200);
  }, []);

  return (
    <div className='App' style={{ overflow: "hidden" }}>
      {animation ? (
        <header className='App-header' style={{ backgroundColor: bgCol }}>
          <div className='div-box' id='tl'></div>
          <div className='div-box' id='tr'></div>
          <div className='div-box' id='bl'></div>
          <div className='div-box' id='br'></div>
          <div className='circle-path'>
            <div className='circle-container'>
              <div id='halfclip-left' style={{ overflow: ovFlow }}>
                <div class='halfcircle' id='clipped'></div>
              </div>
              <div id='halfclip-right' style={{ overflow: ovFlow }}>
                <div class='halfcircle' id='clipped'></div>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <div className='main'>
          <h1>Coming soon!</h1>
        </div>
      )}
    </div>
  );
}

export default App;
