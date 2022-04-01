import React from "react";

const DesktopHome = ({ data }) => {
  return (
    <div className='desktop-home-container'>
      <div className='title-container'>
        <h1>Mason Steeger</h1>
        <h2>software developer</h2>
        <img src={data.meta.mainLogo} height='250px' alt='logo' />
        <h2>Desktop site coming soon!</h2>
      </div>
    </div>
  );
};

export default DesktopHome;
