import React from "react";
import "./Config.css";

const ConfigContainer = props => {
  return (
    <div className="configContainer">
      <form>
        Change speed of game (100ths/sec): {"  "}
        <input
          type="number"
          min={0}
          max={100}
          name="speed"
          onChange={props.setSpeed}
        />
      </form>
      <form onSubmit={props.controlGame}>
        <button type="submit">{props.running ? "Pause" : "Start"}</button>
      </form>
      <form onSubmit={props.resetGame}>
        <button type="submit">Reset Game</button>
      </form>
      <div>
        {"  "}Generation: {props.generation}{" "}
      </div>
    </div>
  );
};

export default ConfigContainer;
