import React from "react";

const Intro = ({ bgCol, ovFlow }) => {
  return (
    <header className='App-header' style={{ backgroundColor: bgCol }}>
      <div className='div-box' id='tl'></div>
      <div className='div-box' id='tr'></div>
      <div className='div-box' id='bl'></div>
      <div className='div-box' id='br'></div>
      <div className='circle-path'>
        <div className='circle-container'>
          <h1 id='logo'>M</h1>
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
