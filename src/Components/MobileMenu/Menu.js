import React, { useEffect, useState } from "react";

import circle from "./menu.svg";

const Menu = ({
  open,
  setOpen,
  handleSetPage,
  setContainerVar,
  setTime,
  page,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuOpacity, setMenuOpacity] = useState(false);

  useEffect(() => {
    if (!open && document.getElementById("drop-animation")) {
      document
        .getElementById("drop-animation")
        .setAttribute("id", "close-animation");
      setMenuOpacity(false);
      setTimeout(() => {
        setShowMenu(false);
      }, 200);
    } else if (open && document.getElementById("close-animation")) {
      document
        .getElementById("close-animation")
        .setAttribute("id", "drop-animation");
      setTimeout(() => {
        setMenuOpacity(true);
        setShowMenu(true);
      }, 700);
    } else if (document.getElementById("init") && open) {
      document.getElementById("init").setAttribute("id", "drop-animation");
      setTimeout(() => {
        setMenuOpacity(true);
        setShowMenu(true);
      }, 700);
    }
  }, [open]);

  useEffect(() => {
    const causeRipple = (e) => {
      const button = e.currentTarget;
      const circ = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      circ.style.width = circ.style.height = `${diameter}px`;
      circ.style.left = `${e.clientX - (button.offsetLeft + radius)}px`;
      circ.style.top = `${e.clientY - (button.offsetTop + radius)}px`;
      circ.classList.add("ripple");

      const ripple = button.getElementsByClassName("ripple")[0];

      if (ripple) {
        ripple.remove();
      }
      setMenuOpacity(false);
      button.appendChild(circ);
      setTimeout(() => {
        setOpen(false);
      }, 250);
    };
    if (showMenu) {
      console.log(document.getElementsByClassName("menu-button"));
      for (let button of document.getElementsByClassName("menu-button")) {
        button.addEventListener("click", causeRipple);
      }
    }
    return () => {
      for (let button of document.getElementsByClassName("menu-button")) {
        button.removeEventListener("click", causeRipple);
      }
    };
  }, [showMenu]);

  return (
    <div id='menu-container' style={open ? {} : { pointerEvents: "none" }}>
      <img
        id='init'
        style={{ width: "100%", height: "100%" }}
        src={circle}
        alt='menu-bg'
      />
      {open ? (
        <div className={menuOpacity ? "menu" : "menu hide-menu"}>
          {page !== 0 ? (
            <div
              onClick={(e) => {
                e.stopPropagation();
                setContainerVar("app-container");
                setTimeout(() => {
                  handleSetPage(0);
                  setTime(Date.now());
                  console.log("changing page");
                }, 500);
              }}
              className='menu-button'>
              <h1 style={{ color: "#24232c", fontSize: "48px" }}>
                <i>HOME</i>
              </h1>
            </div>
          ) : null}
          {page !== 1 ? (
            <div
              onClick={(e) => {
                e.stopPropagation();
                setContainerVar("app-container");
                setTimeout(() => {
                  handleSetPage(1);
                  setTime(Date.now());
                  console.log("changing page");
                }, 500);
              }}
              className='menu-button'>
              <h1 style={{ color: "#24232c", fontSize: "48px" }}>
                <i>PROJECTS</i>
              </h1>
            </div>
          ) : null}
          {page !== 2 ? (
            <div
              onClick={(e) => {
                e.stopPropagation();
                setContainerVar("app-container");
                setTimeout(() => {
                  handleSetPage(2);
                  setTime(Date.now());
                  console.log("changing page");
                }, 500);
              }}
              className='menu-button'>
              <h1 style={{ color: "#24232c", fontSize: "48px" }}>
                <i>ABOUT</i>
              </h1>
            </div>
          ) : null}
          {page !== 3 ? (
            <div
              onClick={(e) => {
                e.stopPropagation();
                setContainerVar("app-container");
                setTimeout(() => {
                  handleSetPage(3);
                  setTime(Date.now());
                  console.log("changing page");
                }, 500);
              }}
              className='menu-button'>
              <h1 style={{ color: "#24232c", fontSize: "48px" }}>
                <i>CONTACT</i>
              </h1>
            </div>
          ) : null}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Menu;
