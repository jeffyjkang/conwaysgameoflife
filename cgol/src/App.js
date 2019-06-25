import React, { Component } from "react";
import InputContainer from "./input/InputContainer";
import GridContainer from "./grid/Grid";

import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 0,
      grid: [],
      patternInput: ""
    };
  }
  //
  sizeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  gridCreate = e => {
    e.preventDefault();
    let num = this.state.size;
    let row = new Array(Number(num));
    for (let i = 0; i < row.length; i++) {
      row[i] = new Array(Number(num)).fill(0);
    }
    this.setState({ grid: row });
  };
  //
  patternInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  setPattern = e => {
    e.preventDefault();
    let patternInput = this.state.patternInput;
    let mid = Math.floor(this.state.size / 2);
    let grid = [...this.state.grid];
    switch (patternInput) {
      case "Blinker":
        grid[mid].splice(mid - 1, 3, 1, 1, 1);
        break;
      case "Toad":
        grid[mid - 1].splice(mid - 1, 3, 1, 1, 1);
        grid[mid].splice(mid - 2, 3, 1, 1, 1);
        break;
      case "Beacon":
        grid[mid - 2].splice(mid - 2, 2, 1, 1);
        grid[mid - 1].splice(mid - 2, 1, 1);
        grid[mid].splice(mid + 1, 1, 1);
        grid[mid + 1].splice(mid, 2, 1, 1);
        break;
      default:
        console.log("Default");
    }
    this.setState({
      grid
    });
  };
  //
  render() {
    // console.log("size", this.state.size);
    // console.table("grid", this.state.grid);
    // console.log("pattern", this.state.patternInput);
    return (
      <div className="App">
        <header className="App-background">
          <h1>Conway's Game of Life</h1>
          <InputContainer
            sizeInput={this.sizeInput}
            gridCreate={this.gridCreate}
            patternInput={this.patternInput}
            setPattern={this.setPattern}
          />
          <GridContainer grid={this.state.grid} />
        </header>
      </div>
    );
  }
}

export default App;
