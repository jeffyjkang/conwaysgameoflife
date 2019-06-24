import React, { Component } from "react";
import InputContainer from "./input/Input";
import GridContainer from "./grid/Grid";

import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 0,
      grid: []
    };
  }
  sizeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  gridCreate = e => {
    e.preventDefault();
    let num = this.state.size;
    let boxes = [];
    let grid = [];
    for (let i = 0; i < num; i++) {
      boxes.push(0);
    }
    for (let j = 0; j < num; j++) {
      grid.push(boxes);
    }
    this.setState({ grid });
  };
  render() {
    console.log("size", this.state.size);
    console.table("grid", this.state.grid);
    return (
      <div className="App">
        <header className="App-background">
          <h1>Conway's Game of Life</h1>
          <InputContainer
            sizeInput={this.sizeInput}
            gridCreate={this.gridCreate}
          />
          <GridContainer />
        </header>
      </div>
    );
  }
}

export default App;
