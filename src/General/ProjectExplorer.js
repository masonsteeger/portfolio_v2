import React, { useState } from "react";

const ProjectExplorer = () => {
  const [proj, setProj] = useState([
    {
      folder: "Professional",
      files: [
        { title: "LG webOS" },
        { title: "Samsung Smart Simulators" },
        { title: "VKRS Content Creator" },
      ],
    },
    {
      folder: "Bootcamp",
      files: [
        { title: "Pokedex" },
        { title: "RocketClipz" },
        { title: "GitRecipe" },
        { title: "Jokez" },
        { title: "Twitter+1" },
      ],
    },
  ]);

  const [folderOpen, setFolderOpen] = useState();

  return (
    <div
      style={{
        width: "100%",
        height: "100vw",
        margin: "auto",

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          overflowX: "hidden",
          overflowY: "scroll",
          width: "100%",
          flexWrap: "wrap",
        }}>
        {proj.map((p, i) => {
          return (
            <div
              className='folder-container'
              onClick={() => {
                setFolderOpen(i);
              }}>
              <div className='collection-stack'>
                <div className='collection-view'></div>
                <div className='collection-shadow-4'></div>
              </div>
              <p>{p.folder}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectExplorer;
