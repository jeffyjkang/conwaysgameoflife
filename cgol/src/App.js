import React, { Component } from "react";
import InputContainer from "./input/InputContainer";
import ConfigContainer from "./config/Config";
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
  gameLogic = e => {
    e.preventDefault();
    console.log("fired");
    let g = [...this.state.grid];
    let size = this.state.size;
    // let newGrid = new Array(Number(size));
    // for (let i = 0; i < g.length; i++) {
    //   newGrid[i] = g[i];
    // }
    let newGrid = [];
    console.log(newGrid);
    console.log(this.state.grid);
    // skip 1 col and row
    for (let i = 0; i < size; i++) {
      newGrid.push([]);
      for (let j = 0; j < size; j++) {
        let alive = 0;
        if (i !== 0 && i !== size - 1) {
          if (g[i - 1][j - 1] === 1) alive++;
          if (g[i - 1][j] === 1) alive++;
          if (g[i - 1][j + 1] === 1) alive++;
          if (g[i][j - 1] === 1) alive++;
          if (g[i][j + 1] === 1) alive++;
          if (g[i + 1][j - 1] === 1) alive++;
          if (g[i + 1][j] === 1) alive++;
          if (g[i + 1][j + 1] === 1) alive++;
        }
        console.log(alive);
        if (g[i][j] === 1) {
          if (alive === 2 || alive === 3) {
            newGrid[i].push(1);
          } else {
            newGrid[i].push(0);
          }
        } else {
          if (alive === 3) {
            newGrid[i].push(1);
          } else {
            newGrid[i].push(0);
          }
        }
      }
      console.log(newGrid);
    }
    // for (let i = 1; i < size - 1; i++) {
    //   for (let j = 1; j < size - 1; j++) {
    //     // console.log(grid[i][j]);
    //     let alive = 0;
    //     if (g[i - 1][j - 1] === 1) alive++;
    //     if (g[i - 1][j] === 1) alive++;
    //     if (g[i - 1][j + 1] === 1) alive++;
    //     if (g[i][j - 1] === 1) alive++;
    //     if (g[i][j + 1] === 1) alive++;
    //     if (g[i + 1][j - 1] === 1) alive++;
    //     if (g[i + 1][j] === 1) alive++;
    //     if (g[i + 1][j + 1] === 1) alive++;
    //     console.log(alive);
    //     if (g[i][j] === 1 && (alive < 2 || alive > 3)) {
    //       newGrid[i][j] = 0;
    //     }
    //     if (g[i][j] === 0 && alive === 3) {
    //       newGrid[i][j] = 1;
    //     }
    //   }
    // }
    // console.log(grid);
    this.setState({ grid: newGrid });
  };
  controlGame = e => {
    e.preventDefault();
  };
  resetGame = e => {
    e.preventDefault();
    console.log("fired");
  };
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
          <ConfigContainer
            gameLogic={this.gameLogic}
            controlGame={this.controlGame}
            resetGame={this.resetGame}
          />
          <GridContainer grid={this.state.grid} />
        </header>
      </div>
    );
  }
}

export default App;
