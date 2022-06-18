import React, { useState } from "react";

const GaruForm = () => {
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const[total, setTotal] = useState(amount);
  const input = (e) => {
    setTotal(e.target.value);
  };


  const addhandler = () => {
    setTotal(...amount+ balance)
    // setBalance(...balance);
    // setBalance(...amount)
    // setAmount(balance + amount );
    // console.log("amount", balance);
    // setTotal(amount+balance);
  };

  // console.log(balance);
  return (
    <>
      <div>total:{ total}</div>
      <input type="number" name="amount" onChange={input} value={amount} />
      {/* <input type="number" name="balance" onChange={input} value={balance} /> */}
      <button onClick={addhandler}>ADD</button>
    </>
  );
};

export default GaruForm;
