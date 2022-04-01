import React, { useEffect } from "react";

const Intro = ({ bgCol, ovFlow, setOvFlow, setBgCol, setAnimation }) => {
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
    <header className='App-header' style={{ backgroundColor: bgCol }}>
      <div className='div-box' id='tl'></div>
      <div className='div-box' id='tr'></div>
      <div className='div-box' id='bl'></div>
      <div className='div-box' id='br'></div>
      <div className='circle-path'>
        <div className='circle-container'>
          <img id='logo' src={"/icons/Ms_Logo.svg"} alt='MS Logo' />
          <div id='halfclip-left' style={{ overflow: ovFlow }}>
            <div className='halfcircle' id='clipped'></div>
          </div>
          <div id='halfclip-right' style={{ overflow: ovFlow }}>
            <div className='halfcircle' id='clipped'></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Intro;
