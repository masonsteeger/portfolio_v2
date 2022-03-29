import React from "react";

const PageTitle = ({ title }) => {
  return (
    <div className='landing-name-container' style={{ marginTop: "50px" }}>
      {title.split("").map((char, i) => {
        return (
          <div className='row-title'>
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

export default PageTitle;
