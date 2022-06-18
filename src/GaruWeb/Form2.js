import React, { useState } from "react";

const Form2 = () => {
  const [amount, setAmount] = useState(0);
  const[fullAmount, setFullAmount] = useState()
  const [newAmount, setNewAmount] = useState();


  const inputEvent = (event) => {
    console.log(event.target.value);
    setAmount(event.target.value);

  };
  const onSubmit = () => {
    setFullAmount(amount);
    setNewAmount(amount)
  };
  return (
    <>
      <div>
        <h2>Balance {fullAmount}</h2>
        <input type="number" placeholder="Remove Amount" onChange={inputEvent}
        value={amount} value={newAmount} />

        <button onClick={onSubmit}>Remove</button>
      </div>
    </>
  );
};

export default Form2;
