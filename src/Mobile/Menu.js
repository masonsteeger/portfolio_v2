import React, { useEffect, useState } from "react";

const Menu = ({ open, setOpen }) => {
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
      console.log(button.clientHeight);
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
      }, 300);
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
      <svg id='init' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='50' cy='50' r='50' fill='#80a2ac' />
      </svg>

      <div className={showMenu ? "menu" : "menu hide-menu"}>
        <div className='menu-button'>
          <h1 style={{ color: "#24232c", fontSize: "56px" }}>
            <i>ABOUT</i>
          </h1>
        </div>
        <div className='menu-button'>
          <h1 style={{ color: "#24232c", fontSize: "56px" }}>
            <i>PROJECTS</i>
          </h1>
        </div>{" "}
        <div className='menu-button'>
          <h1 style={{ color: "#24232c", fontSize: "56px" }}>
            <i>CONTACT</i>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Menu;
