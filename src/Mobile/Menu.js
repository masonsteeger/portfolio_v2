import React, { useEffect, useState } from "react";

import circle from "./menu.svg";

const Menu = ({ open, setOpen, handleSetPage, setContainerVar, setTime }) => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (!open && document.getElementById("drop-animation")) {
      document
        .getElementById("drop-animation")
        .setAttribute("id", "close-animation");
      setShowMenu(false);
    } else if (open && document.getElementById("close-animation")) {
      document
        .getElementById("close-animation")
        .setAttribute("id", "drop-animation");
      setTimeout(() => {
        setShowMenu(true);
      }, 700);
    } else if (document.getElementById("init") && open) {
      document.getElementById("init").setAttribute("id", "drop-animation");
      setTimeout(() => {
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
      button.appendChild(circ);
      setTimeout(() => {
        setOpen(false);
      }, 200);
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
    <div id='menu-container'>
      <img
        id='init'
        style={{ width: "100%", height: "100%" }}
        src={circle}
        alt='menu-bg'
      />
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
        className={showMenu ? "menu" : "menu hide-menu"}>
        <div className='menu-button'>
          <h1 style={{ color: "#24232c", fontSize: "48px" }}>
            <i>ABOUT</i>
          </h1>
        </div>
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
            <i>PROJECTS</i>
          </h1>
        </div>{" "}
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
      </div>
    </div>
  );
};

export default Menu;
