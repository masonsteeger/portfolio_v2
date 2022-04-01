import React, { useEffect, useState } from "react";

import SelectedProject from "./SelectedProject";

const ProjectExplorer = ({ ...props }) => {
  const {
    data,
    folderOpen,
    setFolderOpen,
    selectedPage,
    setSelectedPage,
    folderToggle,
    setFolderToggle,
  } = props;

  const handleFolderOpen = (i) => {
    if (folderOpen === i && typeof selectedPage !== "number") {
      setFolderOpen(null);
    } else if (typeof selectedPage !== "number") {
      setFolderOpen(i);
    }
  };

  // useEffect(() => {
  //   setSelectedPage(null);
  // }, [folderOpen]);

  return (
    <div className='project-explorer'>
      <div className='folders'>
        {data.projects.map((p, i) => {
          return (
            <div
              key={`folder-${i}`}
              className={
                folderToggle === i
                  ? "open-bg folder-container"
                  : "folder-container"
              }
              onClick={() => {
                if (folderToggle === i && typeof selectedPage !== "number") {
                  setFolderToggle(null);
                } else if (typeof selectedPage !== "number") {
                  setFolderToggle(i);
                }
                const col = document.getElementsByClassName("file-container");
                console.log(col);
                if (col.length > 0) {
                  let len = col.length;
                  while (len > 0) {
                    col[len - 1].setAttribute("id", "file-container-exit");
                    len--;
                  }
                  const delay = col.length * 200 + 100;
                  console.log(delay);
                  setTimeout(() => {
                    handleFolderOpen(i);
                  }, delay);
                } else {
                  handleFolderOpen(i);
                }
              }}>
              <div className='collection-stack'>
                <div className='collection-view'></div>
                <div
                  className={
                    folderToggle === i
                      ? "collection-shadow-4 collection-shadow-4-open"
                      : "collection-shadow-4"
                  }></div>
              </div>
              <p className={folderToggle === i ? "folder-text" : null}>
                {p.folder}
              </p>
            </div>
          );
        })}
      </div>
      <div className='file-explorer-separator'></div>
      <div className='files'>
        {typeof folderOpen === "number"
          ? data.projects[folderOpen].files.map((file, i) => {
              const delay =
                folderToggle === folderOpen
                  ? (i + 1) * 0.2
                  : (data.projects[folderOpen].files.length - i) * 0.2;
              return (
                <div
                  onClick={() => {
                    if (typeof selectedPage !== "number") setSelectedPage(i);
                  }}
                  className='file-container'
                  style={{ animationDelay: delay + "s" }}
                  key={`folder-${folderOpen}-file-${i}`}>
                  <div
                    className={selectedPage === i ? "paper expand" : "paper"}>
                    <div
                      className='paper-line'
                      style={{ marginTop: "15px" }}></div>
                    <div className='paper-line'></div>
                    <div className='paper-line'></div>
                  </div>
                  <p>{file.title}</p>
                </div>
              );
            })
          : null}
      </div>
      {typeof selectedPage === "number" ? (
        <SelectedProject
          setSelectedPage={setSelectedPage}
          projData={data.projects[folderOpen].files[selectedPage]}
        />
      ) : null}
    </div>
  );
};

export default ProjectExplorer;
