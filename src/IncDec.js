import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import AccessibleIcon from '@mui/icons-material/Accessible';

const IncDec = () => {
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(0);
    }
  };
  return (
    <>
      <h1>{num}</h1>
      <button onClick={incNum}><AddIcon /></button>
      <button onClick={decNum}>Dec</button>
      <AccessibleIcon/>
    </>
  );
};

export default IncDec;
