import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      isLoggedIn: false,
    };
  }
  login = () => {
    this.setState({
      ...this.state,
      isLoggedIn: true,
      message: "Welcome to RBI",
    });
  };
  logout = () => {
    this.setState({
      ...this.state,
      isLoggedIn: false,
      message: "You are Logged Out",
    });
  };
  render() {
    return (
      <>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8">
              <div className="card"></div>
              <div className="card-header">
                <h2>Conditional Statement</h2>
              </div>
              <div className="card-body">
                {!this.state.isLoggedIn ? (
                  <button className="btn btn-warning m-2" onClick={this.login}>
                    Login
                  </button>
                ) : (
                  ""
                )}

                {this.state.isLoggedIn ? (
                  <button className="btn btn-danger " onClick={this.logout}>
                    Logout
                  </button>
                ) : (
                  ""
                )}

                <button className="btn btn-warning m-2" onClick={this.login}>
                  Login
                </button>
                <button className="btn btn-danger " onClick={this.logout}>
                  Logout
                </button>
                <h1> {this.state.message}</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
