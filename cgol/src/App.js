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
      patternInput: "",
      running: false,
      generation: 0,
      speed: 0
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
  gameLogic = () => {
    let g = [...this.state.grid];
    let size = this.state.size;
    let newGrid = [];
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
    }
    let generation = this.state.generation;
    generation = generation + 1;
    this.setState({ grid: newGrid, generation });
    if (this.state.running === true) {
      setTimeout(
        this.gameLogic,
        this.state.speed === 0 ? 1000 : 100 * this.state.speed
      );
    }
  };
  setSpeed = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };
  controlGame = e => {
    e.preventDefault();
    this.setState({ running: !this.state.running });
    if (this.state.running === false) {
      setTimeout(
        this.gameLogic,
        this.state.speed === 0 ? 1000 : 100 * this.state.speed
      );
    }
  };
  resetGame = e => {
    // e.preventDefault();
    this.setState({
      size: 0,
      grid: [],
      patternInput: "",
      running: false,
      generation: 0,
      speed: 0
    });
  };
  render() {
    // console.log("size", this.state.size);
    // console.table("grid", this.state.grid);
    // console.log("pattern", this.state.patternInput);
    // console.log("running", this.state.running);
    // console.log("generation", this.state.generation);
    // console.log("speed", this.state.speed);
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
            // gameLogic={this.gameLogic}
            controlGame={this.controlGame}
            resetGame={this.resetGame}
            running={this.state.running}
            generation={this.state.generation}
            setSpeed={this.setSpeed}
          />
          <GridContainer grid={this.state.grid} />
        </header>
      </div>
    );
  }
}

export default App;
