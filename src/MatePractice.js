import React, { useState } from "react";

const MatePractice = () => {
  const [num, setNum] = useState(0);
  const onInput = () => {
    setNum(num + 1);
    console.log("clicked");
  };
  const outInput = () => {
    if (num > 0) {
      setNum(num - 1);
    }else{
        setNum(0)
        alert("Sorry! You've reached the Initial Value ")
    }
  };

  return (
    <>
      <h1> {num} </h1>
      <button onClick={onInput}> Inc </button>
      <button onClick={outInput}>Dec</button>
    </>
  );
};

export default MatePractice;
