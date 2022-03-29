import React, { useState, useEffect } from "react";
import PageTitle from "../Components/PageTitle";

const PageWrapper = ({ ...props }) => {
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
      <PageTitle title={props.title} />
      <div
        className={props.classVar}
        style={{ ...props.styles, marginLeft: "20px", maxHeight: "110%" }}>
        {props.children}
      </div>
    </>
  );
};

export default PageWrapper;
