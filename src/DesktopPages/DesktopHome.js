import React from "react";

const DesktopHome = ({ data }) => {
  return (
    <div className='desktop-home-container'>
      <div className='title-container'>
        <h1>Mason Steeger</h1>
        <h2>software developer</h2>
        <img src={data.meta.mainLogo} height='250px' alt='logo' />
      </div>
    </div>
  );
};

export default DesktopHome;
