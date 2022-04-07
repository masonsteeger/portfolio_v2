import React from "react";

const DesktopHome = ({ data }) => {
  return (
    <div className='title-container'>
      <img src={data.meta.mainLogo} height='300px' alt='logo' />
      <div className='stack-logo-container'>
        {data.meta.techStack.map((tech, i) => {
          return (
            <img
              data-hover={tech}
              data-tech={true}
              className='stack-logo'
              src={`/icons/stack/${tech}.svg`}
              alt={tech}
            />
          );
        })}
        {/* </div> */}
      </div>
    </div>
  );
};

export default DesktopHome;
