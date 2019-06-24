import React, { Component } from "react";
import InputContainer from "./input/Input";
import GridContainer from "./grid/Grid";

import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 0
    };
  }
  sizeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    console.log("size", this.state.size);
    return (
      <div className="App">
        <header className="App-background">
          <h1>Conway's Game of Life</h1>
          <InputContainer sizeInput={this.sizeInput} />
          <GridContainer />
        </header>
      </div>
    );
  }
}

export default App;
