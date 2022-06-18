import React, { useState } from "react";

function DigitalWatch() {
  let newTime = new Date().toLocaleTimeString();
  const state = useState;
  const [ctime, setCtime] = useState(newTime);
  let UpTime = () => {
  let   newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  };
  return (
    <div>
      <h1>{newTime}</h1>
      <button onClick={UpTime}>Get Time</button>
    </div>
  );
}

export default DigitalWatch;
