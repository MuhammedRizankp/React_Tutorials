import React, { Component } from "react";
class If extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: true
    };
  }
  clicked() {
    this.setState({
      loggedin: false
    });
  }
  
  render() {
    let greet;
    
    if (this.state.loggedin) {
      greet = <div>Welcome Rizan</div>;
    } 
        else {
      greet = <div>Welcome Guest</div>;
    }
    return (
      <div>
        <div>{greet}</div>
        <button onClick={() => this.clicked()}>Click me</button>
      </div>
    );
  }
}

export default If;
