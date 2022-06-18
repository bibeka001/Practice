import React from "react";
import GaruForm from "./GaruForm";
import Form2 from "./Form2";

const GaruWeb = () => {
  return (
    <>
      <div className="container-fluid ">
        <h1>Balance Sheet of RBI</h1>
        <div className="parent">
          <div className="child2">
            <div className="child4">
              {/* <h5>Addition</h5> */}
              <GaruForm />

              {/* <button className="btn btn-primary">Add</button> */}
            </div>
          </div>
          <div className="child3">
            <div className="child4">
              <Form2 />
              {/* <h5 className="">Removal</h5> */}
              {/* <button className="btn btn-warning">Remove</button> */}
            </div>
          </div>
        </div>

        <br />

        <br />
        <div className="adi">
          <div className="adi-body">
            <h1>Mini Statement</h1>
          </div>
          <div className="card-body h-80">
            <h5 className="card-title">
              The total transaction throughout the day
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default GaruWeb;
