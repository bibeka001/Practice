import React from "react";
import { FirstName, MiddleName, LastName } from "./CallContext";

const CompC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <MiddleName.Consumer>
              {(mname) => {
                return (
                  <LastName.Consumer>
                    {(lname) => {
                      return (
                        <h1>
                          Hy, my name is {fname} {mname} {lname}
                        </h1>
                      );
                    }}
                  </LastName.Consumer>
                );
              }}
            </MiddleName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default CompC;
