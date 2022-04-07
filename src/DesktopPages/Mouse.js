import React from "react";
import { useMousePosition } from "../Hooks/useMousePos";

const Mouse = () => {
  const pos = useMousePosition();

  return (
    <div
      style={
        pos.el && pos.el.dataset && pos.el.dataset.tech
          ? { left: pos.x, top: pos.y, zIndex: "9999", transform: "scale(1.8)" }
          : pos.el && pos.el.dataset && pos.el.dataset.hover
          ? { left: pos.x, top: pos.y, zIndex: "9999", transform: "scale(2.6)" }
          : { left: pos.x, top: pos.y, zIndex: "9999", transform: "scale(1)" }
      }
      id='mouse'>
      <p
        style={
          pos.el && pos.el.dataset && pos.el.dataset.tech
            ? { marginBottom: "0px", fontSize: "6px", color: "#24232c" }
            : { marginBottom: "0px", fontSize: "5px", color: "#24232c" }
        }>
        <strong>
          {pos.el && pos.el.dataset && pos.el.dataset.hover
            ? pos.el.dataset.hover
            : null}
        </strong>
      </p>
    </div>
  );
};

export default Mouse;
