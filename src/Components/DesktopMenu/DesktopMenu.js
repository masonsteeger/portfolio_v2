import React from "react";

const DesktopMenu = ({ data, page, setPage }) => {
  return (
    <div className='desktop-menu-container'>
      {data.menu.map((item, i) => {
        console.log(item);
        return (
          <img
            onClick={() => {
              const element = document.getElementById(
                `${item.pageName.toLowerCase()}-desktop-wrapper`
              );
              setPage(i);
              element.scrollIntoView();
            }}
            key={`desktop-menu-${i}`}
            style={
              i === page
                ? { transform: "scale(1.4)" }
                : { transform: "scale(1)" }
            }
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
