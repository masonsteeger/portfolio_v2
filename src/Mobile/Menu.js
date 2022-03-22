import React from "react";

const Menu = () => {
  return (
    <div className='menu-container'>
      <div
        onClick={(e) => {
          console.log(e.target.parent);
          Object.keys(e.target.children).map((el, i) => {
            if (e.target.children[el].id.endsWith("off")) {
              e.target.children[el].setAttribute("id", `x-${i + 1}`);
            } else {
              e.target.children[el].setAttribute("id", `x-${i + 1}-off`);
            }
          });
        }}>
        <hr id='x-1-off' className='mobile-menu-icon' />
        <hr id='x-2-off' className='mobile-menu-icon' />
        <hr id='x-3-off' className='mobile-menu-icon' />
      </div>
    </div>
  );
};

export default Menu;
