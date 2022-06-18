import React, { useState } from "react";

const NewForm = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    mobileNo: "",
    qualif: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;


    const {name, value} = event.target;

    setFullName((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      }


  //     if (name === "fName") {
  //       return {
  //         fname: value,
  //         lname: preValue.lname,
  //         email: preValue.email,
  //         mobileNo: preValue.mobileNo,
  //       };
  //     } else if (name === "lName") {
  //       return {
  //         fname: preValue.fname,
  //         lname: value,
  //         email: preValue.email,
  //         mobileNo: preValue.mobileNo,
  //       };
  //     }else if (name === "email") {
  //       return {
  //         fname: preValue.fname,
  //         lname: preValue.lname,
  //         email: value,
  //         mobileNo: preValue.mobileNo,
  //       };
  //     }else if (name === "mobileNo") {
  //       return {
  //         fname: preValue.fname,
  //         lname: preValue.lname,
  //         email: preValue.email,
  //         mobileNo: value,
  //       };
  //     }

    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <p>{fullName.email}</p>
            <p>{fullName.mobileNo}</p>
            <p>{fullName.qualif}</p>
            <input
              type="text"
              placeholder="Enter Your  Name"
              name="fname"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              name="lname"
              onChange={inputEvent}
              value={fullName.lname}
            />
            <br />
            <input
              type="email"
              placeholder="Enter Your Email Id"
              name="email"
              onChange={inputEvent}
              value={fullName.email}
            />
            <br />
            <input
              type="number"
              placeholder="Enter Your Mobile No"
              name="mobileNo"
              onChange={inputEvent}
              value={fullName.mobileNo}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your Qualification"
              name="qualif"
              onChange={inputEvent}
              value={fullName.qualif}
            />
            <br />

            <button type="submit">Submit Me</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewForm;
