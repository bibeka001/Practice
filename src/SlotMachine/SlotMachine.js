import React from "react";
import SlotMatch from "./Slotmatch";


const SlotMachine = () => {
  return (
    <>
    <SlotMatch />
      <h1 className="heading_style">
        Welcome to
        <span style={{ fontWeight: "bold" }}>Slot Machine Game</span>
      </h1>
      <div className="slot">
        <SlotMatch x="a" y='a' z= 'a' />
        <hr />
        <SlotMatch y="a" y='b' z= 'a' />
        <hr />
        <SlotMatch z="c" y='d' z= 'c' />
<hr />
        <SlotMatch z="c" y='d' z= 'c' />
        <hr />
      </div>
      <div className="maniac">
      

      </div>
    </>
  );
};

export default SlotMachine;
