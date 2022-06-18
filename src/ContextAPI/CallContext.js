import React, { createContext } from "react";
import CompA from "./CompA";

const FirstName = createContext();
const MiddleName = createContext();
const LastName = createContext();
const CallContext = () => {
  return (
    <>
      <FirstName.Provider value={"Bibek"}>
        <MiddleName.Provider value={"Anand"}>
          <LastName.Provider value={"Singh"}>
            <CompA />
          </LastName.Provider>
        </MiddleName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default CallContext;
export { FirstName,MiddleName, LastName };
