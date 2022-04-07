import React from "react";

const SelectedProject = ({ setSelectedPage, projData, closeSelected }) => {
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
        data-hover={"Close"}
        className={closeSelected}>
        <img data-hover={"Close"} src={"/icons/x.svg"} alt='close' />
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
              data-hover={"Open Repo"}
              className='link-container'
              onClick={() => {
                document.getElementById("repo-link").click();
              }}>
              <a
                data-hover={"Open Repo"}
                id='repo-link'
                rel='noreferrer'
                href={projData.gitLink}
                target='_blank'>
                <img
                  data-hover={"Open Repo"}
                  src='/icons/git-black.svg'
                  height='50px'
                  alt='GitLink'
                />
              </a>
              <p data-hover={"Open Repo"} className='proj-link-text'>
                Repo
              </p>
            </div>
          ) : null}
          <div
            className='link-container'
            data-hover={"Open Link"}
            onClick={() => {
              document.getElementById("live-link").click();
            }}>
            <a
              data-hover={"Open Link"}
              id='live-link'
              rel='noreferrer'
              href={`${projData.liveLink}`}
              target='_blank'>
              <img
                src='/icons/link.svg'
                data-hover={"Open Link"}
                height='50px'
                alt='LiveLink'
              />
            </a>
            <p data-hover={"Open Link"} className='proj-link-text'>
              Link
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProject;
