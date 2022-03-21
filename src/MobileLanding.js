import { fontSize } from "@mui/system";
import React, { useEffect, useState } from "react";

const MobileLanding = () => {
  const [descriptor, setDescriptor] = useState("");
  const [arrPos, setArrPos] = useState(0);

  return (
    <div className='landing-container'>
      <div className='menu-container'>
        <div>
          <hr className='mobile-menu-icon' />
          <hr className='mobile-menu-icon' />
          <hr className='mobile-menu-icon' />
        </div>
      </div>
      <div className='landing-name-container'>
        <div className='row-1'>
          <h1 className='name-letters'>M</h1>
          <h1 className='name-letters'>S</h1>
        </div>
        <div className='row-1'>
          <h1 className='name-letters'>A</h1>
          <h1 className='name-letters'>T</h1>
        </div>
        <div className='row-1'>
          <h1 className='name-letters'>S</h1>
          <h1 className='name-letters'>E</h1>
        </div>
        <div className='row-1'>
          <h1 className='name-letters'>O</h1>
          <h1 className='name-letters'>E</h1>
        </div>
        <div className='row-1'>
          <h1 className='name-letters'>N</h1>
          <h1 className='name-letters'>G</h1>
        </div>
        <div className='row-1'>
          <div style={{ textAlign: "left" }}>
            <h2>software</h2>
          </div>
          <div className='name-hr'></div>
          <h1 className='name-letters'>E</h1>
        </div>
        <div className='row-1'>
          <div style={{ textAlign: "left" }}>
            <h2>developer</h2>
          </div>
          <div className='name-hr'></div>
          <h1 className='name-letters'>R</h1>
        </div>
      </div>
    </div>
  );
};

export default MobileLanding;
