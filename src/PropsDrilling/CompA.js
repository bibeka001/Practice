import React from "react";
import CompB from "./CompB";
function CompA(props) {
  return (
    <>
      <h1>CompA</h1>
      <hr />
      <div className="card">
        <div className="card-header">CompA</div>
        <div className="card-body">
           <CompB userInfo = {props.userInfo} />
        </div>
        <CompB />
      </div>
    </>
  );
};

export default CompA;
