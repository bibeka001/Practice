import React, { Component } from "react";

class Child extends Component {
  childData = "100000USD";
  sentDataToParent = () => {
    this.props.data(this.childData);
  };
  render() {
    return (
      <>
        <h2>  
          Data From PARENT- Emp Name :{this.props.empName}
          <br />
          salary:{this.props.salary}
        </h2>


        <hr />
        <h2>CHILD Data to Parent - </h2>
        <button onClick={this.sentDataToParent}>Send to Parent</button>
      </>
    );
  }
}

export default Child;
