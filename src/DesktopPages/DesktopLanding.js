import React, { useState, Suspense } from "react";
import Loader from "../General/Loader";
import MenuIcon from "../Components/MobileMenu/MenuIcon";
import Logo from "../Components/Logo";
import ProjectExplorer from "../General/ProjectExplorer";
import DesktopMenu from "../Components/DesktopMenu/DesktopMenu";
import "../desktop.css";

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
      <DesktopMenu data={data} />
      <div id='desktop-content-container'>
        <div id='menu-spacer'></div>
        <div id='inner-desktop-content'>
          <DesktopHome data={data} />
        </div>
      </div>

      {/* <Suspense fallback={<Loader />}>
        <MobilePageWrapper
          title={data.pages[1].title.toUpperCase()}
          classVar={classVar}
          styles={{ textAlign: "left" }}>
          <ProjectExplorer
            data={data.pages[1]}
            folderOpen={folderOpen}
            setFolderOpen={setFolderOpen}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            folderToggle={folderToggle}
            setFolderToggle={setFolderToggle}
          />
        </MobilePageWrapper>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <MobilePageWrapper
          title={data.pages[2].title.toUpperCase()}
          classVar={classVar}
          styles={{ textAlign: "left" }}>
          <img
            src={data.pages[2].img}
            style={{
              width: "100%",
              margin: "0 0 20px",
              borderRadius: "25px",
            }}
            alt='Mason Steeger'
          />
          <p style={{ paddingBottom: "70px" }}>{data.pages[2].about}</p>
        </MobilePageWrapper>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <MobilePageWrapper
          title={data.pages[3].title.toUpperCase()}
          classVar={classVar}
          styles={{ textAlign: "left" }}>
          <p style={{ marginBottom: "25px" }}>{data.pages[3].thanks}</p>
          <div className='content-container'>
            {data.pages[3].links.map((item, i) => {
              return (
                <>
                  <a
                    className='contact-link'
                    rel='noreferrer'
                    href={item.link}
                    target='_blank'>
                    <img
                      src={item.src}
                      style={{
                        width: item.width,
                        marginBottom: "10px",
                      }}
                      alt={item.alt}
                    />
                  </a>
                  <p className='contact-link-text'>{item.text}</p>
                </>
              );
            })}
          </div>
          <div style={{ height: "40px" }}></div>
        </MobilePageWrapper>
      </Suspense> */}
    </div>
  );
};

export default DesktopLanding;
