import React from "react";

const DesktopWrapper = ({ ...props }) => {
  const { children, id } = props;

  return (
    <div id={id} className='desktop-wrapper'>
      {children}
    </div>
  );
};

export default DesktopWrapper;
