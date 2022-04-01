import React, { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

const MenuIcon = ({
  handleSetPage,
  setContainerVar,
  setTime,
  page,
  open,
  setOpen,
}) => {
  useEffect(() => {
    [0, 1, 2].map((el, i) => {
      if (open && document.getElementById(`x-${i + 1}-off`)) {
        document
          .getElementById(`x-${i + 1}-off`)
          .setAttribute("id", `x-${i + 1}`);
      } else if (open && document.getElementById(`x-${i + 1}-init`)) {
        document
          .getElementById(`x-${i + 1}-init`)
          .setAttribute("id", `x-${i + 1}`);
      } else if (!open && document.getElementById(`x-${i + 1}`)) {
        document
          .getElementById(`x-${i + 1}`)
          .setAttribute("id", `x-${i + 1}-off`);
      }
    });
  }, [open]);
  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
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

      <MobileMenu
        open={open}
        setOpen={setOpen}
        handleSetPage={handleSetPage}
        setContainerVar={setContainerVar}
        setTime={setTime}
        page={page}
      />
    </>
  );
};

export default MenuIcon;
