import React from "react";

const DesktopMenu = ({ data }) => {
  return (
    <div className='desktop-menu-container'>
      {data.menu.map((item, i) => {
        return (
          <img
            key={`desktop-menu-${i}`}
            style={i === 0 ? { transform: "scale(1.4)" } : {}}
            className='desktop-menu-icon'
            src={item.icon}
            alt={item.pageName}
          />
        );
      })}
    </div>
  );
};

export default DesktopMenu;
