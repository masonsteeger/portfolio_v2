import React from "react";

const SelectedProject = ({ setSelectedPage, projData }) => {
  return (
    <div id='selected-proj'>
      <div
        onClick={() => {
          setSelectedPage(null);
        }}
        className='project-x'>
        <img src={"/icons/iconmonstr-x-mark-1.svg"} alt='close' />
      </div>
      <div
        style={{
          padding: "10px",
          margin: "70px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}>
        <h1 style={{ color: "#24232c", fontSize: "50px" }}>{projData.title}</h1>
        <p style={{ color: "#24232c" }}>{projData.desc}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "40px",
          }}>
          {projData.gitLink ? (
            <a
              style={{ fontSize: "30px", pointerEvents: "all" }}
              rel='noreferrer'
              href={projData.gitLink}
              target='_blank'>
              Github
            </a>
          ) : null}
          <a
            style={{ fontSize: "30px", pointerEvents: "all" }}
            rel='noreferrer'
            href={`${projData.liveLink}`}
            target='_blank'>
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default SelectedProject;
