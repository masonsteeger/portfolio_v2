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
    outerClass,
    foldersClass,
    folderContainerClass,
    collectionStack,
    collectionView,
    fileContainer,
    files,
    paper,
    paperLine,
    closeSelected,
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
    <div className={outerClass}>
      <div className={foldersClass}>
        {data.projects.map((p, i) => {
          return (
            <div
              data-hover={folderToggle === i ? "Close Folder" : "Open Folder"}
              key={`folder-${i}`}
              className={
                folderToggle === i
                  ? `open-bg ${folderContainerClass}`
                  : `${folderContainerClass}`
              }
              onClick={() => {
                if (folderToggle === i && typeof selectedPage !== "number") {
                  setFolderToggle(null);
                } else if (typeof selectedPage !== "number") {
                  setFolderToggle(i);
                }
                const col = document.getElementsByClassName(fileContainer);
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
              <div
                data-hover={folderToggle === i ? "Close Folder" : "Open Folder"}
                className={collectionStack}>
                <div
                  data-hover={
                    folderToggle === i ? "Close Folder" : "Open Folder"
                  }
                  className={collectionView}></div>
                <div
                  data-hover={
                    folderToggle === i ? "Close Folder" : "Open Folder"
                  }
                  className={
                    folderToggle === i
                      ? "collection-shadow-4 collection-shadow-4-open"
                      : "collection-shadow-4"
                  }></div>
              </div>
              <p
                data-hover={folderToggle === i ? "Close Folder" : "Open Folder"}
                className={folderToggle === i ? "folder-text" : null}>
                {p.folder}
              </p>
            </div>
          );
        })}
      </div>
      <div className='file-explorer-separator'></div>
      <div className={files}>
        {typeof folderOpen === "number"
          ? data.projects[folderOpen].files.map((file, i) => {
              const delay =
                folderToggle === folderOpen
                  ? (i + 1) * 0.2
                  : (data.projects[folderOpen].files.length - i) * 0.2;
              return (
                <div
                  data-hover={"Open File"}
                  onClick={() => {
                    if (typeof selectedPage !== "number") setSelectedPage(i);
                  }}
                  className={fileContainer}
                  style={{ animationDelay: delay + "s" }}
                  key={`folder-${folderOpen}-file-${i}`}>
                  <div
                    data-hover={"Open File"}
                    className={selectedPage === i ? `${paper} expand` : paper}>
                    <div
                      data-hover={"Open File"}
                      className={paperLine}
                      style={{ marginTop: "15px" }}></div>
                    <div data-hover={"Open File"} className={paperLine}></div>
                    <div data-hover={"Open File"} className={paperLine}></div>
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
          closeSelected={closeSelected}
        />
      ) : null}
    </div>
  );
};

export default ProjectExplorer;
