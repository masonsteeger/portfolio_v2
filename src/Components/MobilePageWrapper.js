import React, { useState, useEffect } from "react";
import MobilePageTitle from "./MobilePageTitle";

const MobilePageWrapper = ({ ...props }) => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100vw",
          height: "80px",
          backgroundColor: "#24232c",
          zIndex: "991",
          overflow: "hidden",
        }}></div>
      <MobilePageTitle title={props.title} />
      <div
        className={props.classVar}
        style={{ ...props.styles, marginLeft: "20px", maxHeight: "110%" }}>
        {props.children}
      </div>
    </>
  );
};

export default MobilePageWrapper;
