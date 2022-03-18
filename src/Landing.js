import React, { useEffect, useState } from "react";

const Landing = () => {
  const [descriptor, setDescriptor] = useState("");
  const [arrPos, setArrPos] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const arr = [
        "MUSIC MAKER",
        "HOCKEY LOVER",
        "ANIME BINGER",
        "SOFTWARE DEVELOPER",
      ];
      setDescriptor((p) => {
        p = arr[arrPos];
        return p;
      });
      if (arrPos >= 3) {
        return;
      } else {
        setArrPos((p) => {
          p = p + 1;
          return p;
        });
      }
    }, 3000);
  }, [arrPos]);

  return (
    <div className='main'>
      <div className='row-1'>
        <h2 style={{ textAlign: "left" }}>hello, my name is...</h2>
        <h1 style={{ textAlign: "right" }}>MASON STEEGER</h1>
        <h2 style={{ textAlign: "left" }}>and i am a...</h2>
        <h1 style={{ textAlign: "right", fontSize: "52px" }}>{descriptor}</h1>
      </div>
    </div>
  );
};

export default Landing;
