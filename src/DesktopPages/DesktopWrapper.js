import React from "react";

const DesktopWrapper = ({ ...props }) => {
  const { children, id, styles } = props;

  return (
    <div id={id} style={{ ...styles }} className='desktop-wrapper'>
      {children}
    </div>
  );
};

export default DesktopWrapper;
