import React, { Component } from "react";
import Grid from "./grid/Grid";

import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <header className="App-background">
          <Grid />
        </header>
      </div>
    );
  }
}

export default App;
