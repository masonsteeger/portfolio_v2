import React, { useState, Suspense, useEffect } from "react";
import Loader from "../General/Loader";
import MenuIcon from "../Components/MobileMenu/MenuIcon";
import Logo from "../Components/Logo";
import ProjectExplorer from "../General/ProjectExplorer";
import DesktopMenu from "../Components/DesktopMenu/DesktopMenu";
import "../desktop.css";
import DesktopTitle from "./DesktopTitle";
import DesktopWrapper from "./DesktopWrapper";
import MobilePageTitle from "../Components/MobilePageTitle";
import Mouse from "./Mouse";

const DesktopHome = React.lazy(() => import("../DesktopPages/DesktopHome"));
const MobilePageWrapper = React.lazy(() =>
  import("../Components/MobilePageWrapper")
);

const DesktopLanding = ({ ...props }) => {
  const {
    data,
    page,
    setPage,
    folderOpen,
    setFolderOpen,
    selectedPage,
    setSelectedPage,
    folderToggle,
    setFolderToggle,
    size,
  } = props;
  const [start, setStart] = useState();
  const [time, setTime] = useState(Date.now() - 2000);
  const [containerVar, setContainerVar] = useState(
    "desktop-app-container visible"
  );
  const [classVar, setClassVar] = useState("outer-wrapper");
  const [open, setOpen] = useState(false);

  return (
    <div className={containerVar} style={{ overflow: "hidden" }}>
      <Mouse />
      <DesktopMenu data={data} page={page} setPage={setPage} size={size} />
      <div id='desktop-content-container'>
        <div id='menu-spacer'></div>
        <div id='inner-desktop-content'>
          <DesktopWrapper
            id={"home-desktop-wrapper"}
            styles={{ minHeight: "700px" }}>
            <DesktopHome data={data} />
          </DesktopWrapper>
          <DesktopTitle title={data.pages[page].title} data={data} />
          <DesktopWrapper id={"projects-desktop-wrapper"}>
            <ProjectExplorer
              data={data.pages[1]}
              folderOpen={folderOpen}
              setFolderOpen={setFolderOpen}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              folderToggle={folderToggle}
              setFolderToggle={setFolderToggle}
              outerClass={"desktop-project-explorer"}
              folderContainerClass={"desktop-folder-container"}
              foldersClass={"desktop-folders"}
              collectionStack={"desktop-collection-stack"}
              collectionView={"desktop-collection-view"}
              files={"desktop-files"}
              fileContainer={"desktop-file-container"}
              paper={"desktop-paper"}
              paperLine={"desktop-paper-line"}
              closeSelected={"desktop-project-x"}
            />
          </DesktopWrapper>
          <DesktopWrapper
            id={"about-desktop-wrapper"}
            styles={{ minHeight: " 700px" }}>
            <div
              className='desktop-about-container'
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}>
              <p className='body-text' style={{ textAlign: "right" }}>
                {data.pages[2].about}
              </p>
              <img
                src={data.pages[2].img}
                id='about-img-desktop'
                alt='Mason Steeger'
              />
            </div>
          </DesktopWrapper>
          <DesktopWrapper id={"contact-desktop-wrapper"}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingBottom: "200px",
              }}>
              <p
                className='body-text'
                style={{ paddingBottom: "50px", textAlign: "left" }}>
                {data.pages[3].thanks}
              </p>
              <div className='external-link-container'>
                {data.pages[3].links.map((item, i) => {
                  return (
                    <div>
                      <a
                        className='contact-link'
                        rel='noreferrer'
                        href={item.link}
                        target='_blank'>
                        <img
                          src={item.src}
                          style={{
                            height: "clamp(142px, 10vw ,300px)",
                            margin: "40px",
                          }}
                          alt={item.alt}
                          data-hover={item.text}
                        />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </DesktopWrapper>
        </div>
      </div>
    </div>
  );
};

export default DesktopLanding;
