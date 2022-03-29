import React from "react";

const Home = () => {
  return (
    <>
      <div className='landing-name-container'>
        <div className='row-name'>
          <h1 className='name-letters'>M</h1>
          <h1 className='name-letters'>S</h1>
        </div>
        <div className='row-name'>
          <h1 className='name-letters'>A</h1>
          <h1 className='name-letters'>T</h1>
        </div>
        <div className='row-name'>
          <h1 className='name-letters'>S</h1>
          <h1 className='name-letters'>E</h1>
        </div>
        <div className='row-name'>
          <h1 className='name-letters'>O</h1>
          <h1 className='name-letters'>E</h1>
        </div>
        <div className='row-name'>
          <h1 className='name-letters'>N</h1>
          <h1 className='name-letters'>G</h1>
        </div>
        <div className='row-name'>
          <div style={{ textAlign: "left" }}>
            <h2>software</h2>
          </div>
          <div className='name-hr'></div>
          <h1 className='name-letters'>E</h1>
        </div>
        <div className='row-name' style={{ marginBottom: "30px" }}>
          <div style={{ textAlign: "left" }}>
            <h2>developer</h2>
          </div>
          <div className='name-hr'></div>
          <h1 className='name-letters'>R</h1>
        </div>
        <div style={{ width: "100vw" }}>
          <p>Welcome!</p>
        </div>
        <div>
          <p>Tap the menu or drag and hold down to explore</p>
        </div>
      </div>
    </>
  );
};

export default Home;
