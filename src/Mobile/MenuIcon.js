import React, { useEffect, useState } from "react";
import Menu from "./Menu";

const MenuIcon = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    [0, 1, 2].map((el, i) => {
      if (!open && document.getElementById(`x-${i + 1}-off`)) {
        document
          .getElementById(`x-${i + 1}-off`)
          .setAttribute("id", `x-${i + 1}`);
      } else if (open && document.getElementById(`x-${i + 1}`)) {
        document
          .getElementById(`x-${i + 1}`)
          .setAttribute("id", `x-${i + 1}-off`);
      } else if (document.getElementById(`x-${i + 1}-init`) && open) {
        document
          .getElementById(`x-${i + 1}-init`)
          .setAttribute("id", `x-${i + 1}`);
      }
    });
  }, [open]);
  return (
    <>
      <div
        onClick={(e) => {
          setOpen((p) => {
            p = !p;
            return p;
          });
        }}
        id='menu-icon-container'>
        <div>
          <hr id='x-1-init' className='mobile-menu-icon' />
          <hr id='x-2-init' className='mobile-menu-icon' />
          <hr id='x-3-init' className='mobile-menu-icon' />
        </div>
      </div>
      <Menu open={open} setOpen={setOpen} />
    </>
  );
};

export default MenuIcon;