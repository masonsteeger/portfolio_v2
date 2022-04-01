import React from "react";

const MobilePageTitle = ({ title }) => {
  return (
    <div className='landing-name-container' style={{ marginTop: "50px" }}>
      {title.split("").map((char, i) => {
        return (
          <div key={`titleChar-${i}`} className='row-title'>
            <h1 className='title-letters'>{char}</h1>
          </div>
        );
      })}
      <div className='row-title'>
        <div className='title-hr'></div>
      </div>
    </div>
  );
};

export default MobilePageTitle;
