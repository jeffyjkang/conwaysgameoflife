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
  sizeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  gridCreate = e => {
    e.preventDefault();
    let num = this.state.size;
    // let boxes = [];
    // let grid = [];
    // for (let i = 0; i < num; i++) {
    //   boxes.push(0);
    // }
    // for (let j = 0; j < num; j++) {
    //   grid.push(boxes);
    // }
    let row = new Array(Number(num));
    console.log(row);
    for (let i = 0; i < row.length; i++) {
      row[i] = new Array(Number(num)).fill(0);
    }
    // console.log(boxes);
    // console.log(grid);
    console.table(row);
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
    // console.log(this.state.patternInput);
    // console.log(this.state.grid);
    let patternInput = this.state.patternInput;
    let mid = Math.floor(this.state.size / 2);
    let grid = [...this.state.grid];
    // console.table(grid);
    console.log(mid);
    switch (patternInput) {
      case "Blinker":
        console.log("Blinker");
        console.log(grid[mid]);
        grid[mid].splice(mid, 1, 1);
        break;
      case "Toad":
        console.log("Toad");
        break;
      case "Beacon":
        console.log("Beacon");
        break;
      default:
        console.log("Default");
    }
    console.table(grid);
    console.table(this.state.grid);
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
