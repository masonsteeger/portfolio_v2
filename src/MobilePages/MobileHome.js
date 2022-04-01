import React, { useEffect, useState } from "react";

const MobileHome = ({ data }) => {
  const [opVar, setOpVar] = useState(0);
  const [nameMap] = useState(
    data.pages[0].firstName.length > data.pages[0].lastName.length
      ? "firstName"
      : "lastName"
  );

  useEffect(() => {
    const time = () =>
      setTimeout(() => {
        setOpVar(1);
      }, 3500);
    const myTime = time();
    return () => {
      clearTimeout(myTime);
    };
  }, []);

  return (
    <>
      <div className='landing-name-container'>
        {data.pages[0][nameMap].split("").map((letter, i) => {
          return (
            <div className='row-name' key={`home-title-map-${i}`}>
              {console.log(
                i -
                  (data.pages[0][nameMap].split("").length -
                    data.pages[0].tagline.split(" ").length)
              )}
              {data.pages[0][nameMap].length <=
              i + data.pages[0].tagline.split(" ").length ? (
                <div style={{ textAlign: "left" }}>
                  <h2>
                    {
                      data.pages[0].tagline.split(" ")[
                        i -
                          (data.pages[0][nameMap].split("").length -
                            data.pages[0].tagline.split(" ").length)
                      ]
                    }
                  </h2>
                </div>
              ) : null}
              {data.pages[0].firstName.charAt(i) ? (
                <h1 className='name-letters'>
                  {data.pages[0].firstName.charAt(i).toUpperCase()}
                </h1>
              ) : (
                <div className='name-hr'></div>
              )}
              {data.pages[0].lastName.charAt(i) ? (
                <h1 className='name-letters'>
                  {data.pages[0].lastName.charAt(i).toUpperCase()}
                </h1>
              ) : (
                <div className='name-hr'></div>
              )}
            </div>
          );
        })}
        <div id='instructions' style={{ opacity: opVar, marginTop: "30px" }}>
          <p>
            Tap the menu or drag and <br /> hold down to explore
          </p>
        </div>
      </div>
    </>
  );
};

export default MobileHome;
