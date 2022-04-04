import React from "react";

const DesktopTitle = ({ ...props }) => {
  const { title, bar } = props;

  return (
    <div className='desktop-title-container'>
      {bar === "left" ? <div className='desktop-title-bar'></div> : null}
      <h1 className='desktop-titles'>{title.toUpperCase()}</h1>
      {bar === "right" ? <div className='desktop-title-bar'></div> : null}
    </div>
  );
};

export default DesktopTitle;
