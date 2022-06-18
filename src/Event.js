import React, { useState } from "react";

const Event = () => {
  const purple = "#8e44ad";
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState("click me");

  const bgChange = () => {
    let newBg = "#34495e";
    setBg(newBg);
    setName("Danga Cruzo");
  };
  const bgBack = () => {
    let culBg = "#8e44ad";
    setBg(culBg);
    setName("Zinga Hoo");
  };
  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onClick={bgChange} onDoubleClick={bgBack}>
          {name}
        </button>
      </div>
    </>
  );
};

export default Event;

// //
// css for this event
// *{
//   box-sizing: border-box;
//   padding: 0;
//   margin: 0;
//   background-color: #d2dbbd;
// }
// div{
//   width: 100%;
//   height: 100vh;
//   background: #8e44ad;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }
// h1{
//   color: white;
//   background: transparent;
//   text-shadow:  0 2px 2px black;
// }
// button{
//   padding: 12px 20px;
//   background-color: #9b59b6;
//   color: white;
//   border: 2px solid #ecf0f1;
//   outline: none;
//   border-radius: 5px;
//   text-transform: uppercase;
//   cursor: pointer;


// }