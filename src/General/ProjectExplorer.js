import React, { useEffect, useState } from "react";

import SelectedProject from "./SelectedProject";

const ProjectExplorer = () => {
  const [proj, setProj] = useState([
    {
      folder: "Professional",
      files: [
        {
          title: "VKRS Content Creator",
          desc: "A content management system that was used to create the Smart Simulators for Samsung. Frontend with React using multiple packages such as MUI and Fabric.js with a serverless backend hosted via multiple AWS services including DynamoDB, Cloudfront, S3, Lambda, and many more! I have been working on this project since my start at SJ Design and have been involved in most parts of this current iteration.",
          liveLink: "https://vkrscontent.com/",
        },
        {
          title: "LG webOS",
          desc: "A static website built with React to show off the features of LG's new webOS TV operating system. I was mainly in charge of building out components that could be used multiple times and altered slightly by using a large json object containing each page's data.",
          liveLink: "https://vkrscontent.com/webostv/",
        },
        {
          title: "Samsung Smart Simulators",
          desc: "Samsung phone simulators built using earlier versions of VKRS with some hard coded edits for features we had not implemented in the VKRS Content Creator. These mainly show the template of our project and the power of the conent management system we have been building.",
          liveLink: "https://www.samsung.com/us/support/simulators/",
        },
      ],
    },
    {
      folder: "Bootcamp",
      files: [
        {
          title: "Pokedex",
          desc: "My very first front-end build using HTML, CSS, Javascript, jQuery, and AJAX calls from a the PokeApi. Search up your favorite Pokemon and get some stats, or check their Evolution Chain!",
          gitLink:
            "https://github.com/masonsteeger/masonsteeger.github.io/tree/master/pokedex",
          liveLink: "https://masonsteeger.github.io/pokedex/",
        },
        {
          title: "RocketClipz",
          desc: "My first full-stack build using MongoDB, Express.js, EJS, and Node.js. Share some of your best goals or saves from the hit car-soccer game Rocket League!",
          gitLink: "https://github.com/masonsteeger/project2",
          liveLink: "https://rocketclipz.herokuapp.com/home",
        },
        {
          title: "GitRecipe",
          desc: "A recipe sharing app and first full stack group project using MongoDB, Express.js, React, and Node.js. Create and share recipes or search up some tags for some dinner ideas tonight!",
          gitLink: "https://github.com/masonsteeger/gitrecipev2",
          liveLink: "https://git-recipez.herokuapp.com/",
        },
        {
          title: "Jokez",
          desc: " joke app and my second group project with PostGres, PHP, React, and MAMP. The app allows a user to create jokes and vote on the site! Careful, because if a joke gets less than -10 votes, it's deleted from the database!",
          gitLink: "https://github.com/masonsteeger/jokez",
          liveLink: "https://gitjokez.herokuapp.com/",
        },
        {
          title: "Twitter+1",
          desc: "Twitter Clone using the PERN stack (and the Bulma CSS framework) with one key change... max characters allowed in a tweet are 281!",
          gitLink: "https://github.com/masonsteeger/twitterplusone",
          liveLink: "https://twitterplusone.herokuapp.com/login",
        },
      ],
    },
  ]);
  const [folderOpen, setFolderOpen] = useState(null);
  const [selectedPage, setSelectedPage] = useState(null);

  // useEffect(() => {
  //   setSelectedPage(null);
  // }, [folderOpen]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: "auto",
        paddingBottom: "400px",
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
              key={`folder-${i}`}
              className={
                folderOpen === i
                  ? "open-bg folder-container"
                  : "folder-container"
              }
              onClick={() => {
                if (folderOpen === i && typeof selectedPage !== "number") {
                  setFolderOpen(null);
                } else if (typeof selectedPage !== "number") {
                  setFolderOpen(i);
                }
              }}>
              <div className='collection-stack'>
                <div className='collection-view'></div>
                <div
                  className={
                    folderOpen === i
                      ? "collection-shadow-4 collection-shadow-4-open"
                      : "collection-shadow-4"
                  }></div>
              </div>
              <p className={folderOpen === i ? "folder-text" : null}>
                {p.folder}
              </p>
            </div>
          );
        })}
      </div>
      <div className='file-explorer-separator'></div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}>
        {typeof folderOpen === "number"
          ? proj[folderOpen].files.map((file, i) => {
              return (
                <div
                  onClick={() => {
                    if (typeof selectedPage !== "number") setSelectedPage(i);
                  }}
                  className='file-container'
                  key={`file-${i}`}>
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
          projData={proj[folderOpen].files[selectedPage]}
        />
      ) : null}
    </div>
  );
};

export default ProjectExplorer;
