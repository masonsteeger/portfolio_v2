import React from "react";

const SelectedProject = ({ setSelectedPage, projData }) => {
  return (
    <div id='selected-proj'>
      <div
        onClick={() => {
          document
            .getElementById("selected-proj")
            .setAttribute("id", "selected-proj-exit");

          setTimeout(() => {
            setSelectedPage(null);
          }, 500);
        }}
        className='project-x'>
        <img src={"/icons/x.svg"} alt='close' />
      </div>
      <div
        style={{
          padding: "10px",
          margin: "50px 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}>
        <h1
          style={{ color: "#24232c", fontSize: "50px", marginBottom: ".5em" }}>
          {projData.title}
        </h1>
        <p style={{ color: "#24232c" }}>{projData.desc}</p>
        <div
          className='outer-link'
          style={!projData.gitLink ? { justifyContent: "center" } : {}}>
          {projData.gitLink ? (
            <div
              className='link-container'
              onClick={() => {
                document.getElementById("repo-link").click();
              }}>
              <a
                id='repo-link'
                rel='noreferrer'
                href={projData.gitLink}
                target='_blank'>
                <img src='/icons/git-black.svg' height='50px' alt='GitLink' />
              </a>
              <p className='proj-link-text'>Repo</p>
            </div>
          ) : null}
          <div
            className='link-container'
            onClick={() => {
              document.getElementById("live-link").click();
            }}>
            <a
              id='live-link'
              rel='noreferrer'
              href={`${projData.liveLink}`}
              target='_blank'>
              <img src='/icons/link.svg' height='50px' alt='LiveLink' />
            </a>
            <p className='proj-link-text'>Link</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProject;
