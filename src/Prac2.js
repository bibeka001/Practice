import React, { Component } from "react";
class Prac2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city1: false,
      city2: false,
      city3: false,
    };
  }
  UpdateInput = (event) => {
    this.setState({
      ...this.state,
      [event.target.checked]: event.target.checked,
    });
  };
  render() {
    return (
      <>
        <div className="card-body">
          <div className="form-check"></div>
          <input type="check box" onClick={this.UpdateInput} value="" />
          <label>Chennai</label>
        </div>
        <div className="card-body">
          <div className="form-check"></div>
          <input type="check box" onClick={this.UpdateInput} value="" />
          <label>Banglore</label>
        </div>
        <div className="card-body">
          <div className="form-check"></div>
          <input type="check box" onClick={this.UpdateInput} value="" />
          <label>Bombay</label>
        </div>
        <div className="col-md-8">
          {this.state.city1 ? (
            <>
              <div className="card">
                <div className="card-body bg-success">
                  <p>About Chennai</p>
                </div>
              </div>
            </>
          ) : null}
          {this.state.city1 ? (
            <>
              <div className="card">
                <div className="card-body bg-primary">
                  <p>About Banglore</p>
                </div>
              </div>
            </>
          ) : null}
          {this.state.city1 ? (
            <>
              <div className="card">
                <div className="card-body bg-danger">
                  <p>About Bombay</p>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </>
    );
  }
}

export default Prac2;
