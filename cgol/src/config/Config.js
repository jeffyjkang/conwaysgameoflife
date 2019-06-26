import React from "react";
import "./Config.css";

const ConfigContainer = props => {
  return (
    <div className="configContainer">
      <div>
        <form>
          <span>Change speed of game (10th of a second): {"  "} </span>
          <input
            className="cInput"
            type="number"
            min={0}
            max={100}
            placeholder="1-100"
            name="speed"
            onChange={props.setSpeed}
          />
          <p>(Default 1 sec, *alter while running allowed)</p>
        </form>
      </div>
      <div className="gController">
        <form onSubmit={props.controlGame}>
          <button
            className={props.running ? "paButton" : "stButton"}
            type="submit"
          >
            {props.running ? "Pause" : "Start"}
          </button>
        </form>
        <form onSubmit={props.resetGame}>
          <button className="reButton" type="submit">
            Reset Game
          </button>
        </form>
        <div className="cText">
          {"  "}Generation: {props.generation}{" "}
        </div>
      </div>
    </div>
  );
};

export default ConfigContainer;
