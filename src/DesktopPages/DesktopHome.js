import React from "react";

const DesktopHome = ({ data }) => {
  return (
    <div className='title-container'>
      <img src={data.meta.mainLogo} height='300px' alt='logo' />
      <h1 id='desktop-name'>Mason Steeger</h1>
      <div className='subtitle-container'>
        <h2 id='desktop-subtitle'>software developer</h2>
        <div className='stack-logo-container'>
          {data.meta.techStack.map((tech, i) => {
            return (
              <img
                className='stack-logo'
                src={`/icons/stack/${tech}.svg`}
                alt={tech}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DesktopHome;
