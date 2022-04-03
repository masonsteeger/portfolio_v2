import React from "react";

const DesktopHome = ({ data }) => {
  return (
    <div className='desktop-home-container'>
      <div className='title-container'>
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

        {/* <img src={data.meta.mainLogo} height='500px' alt='logo' /> */}
      </div>
    </div>
  );
};

export default DesktopHome;
