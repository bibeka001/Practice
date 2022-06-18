import React, { useState } from "react";

const MyAccord = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="main_heading">
        <p onClick={() => setShow(!show)}> {show ? "—" : " + "} </p>
        <h2>{question}</h2>
      </div>
      {show && <p>{answer}</p>}
    </>
  );
};

export default MyAccord;
