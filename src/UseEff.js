 import React, { useEffect, useState } from "react";

const UseEff = () => {
  const [count, setCount] = useState(0);
  const onInput = () => {
    setCount(count + 1);
  };
  const onOutput = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
      alert("There is no value below 0")
    }
  };
  // useEffect(() => {
  //   alert("I am clicked")
  // }, [])

  useEffect(() => {
  document.title = `Chats (${count})`
  });

  return (
    <div>
      <h1>hello {count}</h1>
      {/* <h1> byby {count}</h1> */}
      <button onClick={onInput}>Click Me</button>
      <button onClick={onOutput}>Click Me</button>
    </div>
  );
};

export default UseEff;
