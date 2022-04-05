import React, { useEffect, useState } from "react";

const DesktopTitle = ({ ...props }) => {
  const { title, data } = props;
  const [nameMap] = useState(
    data.pages[0].firstName.length > data.pages[0].lastName.length
      ? "firstName"
      : "lastName"
  );

  return (
    <div id='desktop-title-container'>
      {console.log(title)}
      {title === "Home" ? (
        data.pages[0][nameMap].split("").map((letter, i) => {
          return (
            <div className='desktop-row-name' key={`home-title-map-${i}`}>
              {data.pages[0].firstName.charAt(i) ? (
                <h1 className='desktop-titles'>
                  {data.pages[0].firstName.charAt(i).toUpperCase()}
                </h1>
              ) : null}
              {data.pages[0].lastName.charAt(i) ? (
                <h1 className='desktop-titles'>
                  {data.pages[0].lastName.charAt(i).toUpperCase()}
                </h1>
              ) : null}
            </div>
          );
        })
      ) : (
        <>
          {title
            .toUpperCase()
            .split("")
            .map((letter, i) => {
              return <h1 className='desktop-titles'>{letter}</h1>;
            })}
        </>
      )}
      <div className='desktop-hr'></div>
    </div>
  );
};

export default DesktopTitle;
