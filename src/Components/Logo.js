import React from "react";

const LogoComp = () => {
  return (
    <img
      src={"icons/Ms_Logo-accent.svg"}
      alt='MS Logo'
      style={{
        position: "fixed",
        zIndex: "1000",
        width: "50px",
        top: "10px",
        left: "calc(50vw - 25px)",
      }}
    />
  );
};

export default LogoComp;
