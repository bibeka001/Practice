import React, { useState } from "react";

const DigitalWatch2 = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const UpdateTime = () => {
     time = new Date().toLocaleTimeString();

    setCtime(time);
  };
  setInterval(UpdateTime, 3000)
  return (
    <>
      <h1>{time}</h1>


    </>
  );
};

export default DigitalWatch2;
