import React, { Component } from 'react'
constructor(props) {
  super(props)

  this.state = {
     message: "",
     isloggedIn: false,
  }
  
}
login = () =>{
    this.setState({
        ...this.state,
        isloggedIn: true,
        message: "Welcome to React"
    })
}
logout =() =>{
    this.setState({
        ...this.state,
        isloggedIn: false,
        message:" thank you",
    })
}
 class Prac1 extends Component {
  render() {
    return (
      <div>
<h1>conditional rendering</h1>
{!this.state.isloggedIn ? (<button onClick={this.Login} > login </button>)}
{this.state.isloggedIn? (<button onClick={this.logout}>Logout</button>)}

      </div>
    )
  }
}

export default Prac1