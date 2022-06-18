import React, { useState } from "react";
import { questions } from "./AccApi";
import MyAccord from "./MyAccord";
import './Acc.css'
const Accord = () => {
  const [data, setData] = useState(questions);
  return (
    <><section>
      <h1>React Interview Questions</h1>
      {data.map((currElem) => {
          const {id} = currElem;
        return <MyAccord key={id} {...currElem} />;
      })}
      </section>
    </>
  );
};

export default Accord;
