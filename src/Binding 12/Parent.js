import React, { Component } from "react";
import Child from "./Child";
class Parent extends Component {
  empName = "Bibeka";
  salary = 85000;
  state = {
    childData: "",
    asset: "",
  };
  inputToChild = () => {
      this.setState({asset: '50000USD'})
  }
  receiveData = (value) => {
    console.log("Data from Child", value);
    this.setState({ childData: value });
  };
  render() {
    return (
      <>
        <button onClick={this.inputToChild}>50K Send To Child</button>
        <h1>Parent comp -Asset value: {this.state.asset}</h1>
        <Child
          empName={this.empName}
          salary={this.salary}
          data={this.receiveData}
        />
        <hr />
        <h2>Receving Data from child :{this.state.childData}</h2>
      </>
    );
  }
}

export default Parent;
