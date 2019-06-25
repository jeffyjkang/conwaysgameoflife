import React from "react";
import "./Input.css";

const PatternInput = props => {
  return (
    <div>
      <form onSubmit={props.setPattern}>
        Select initial parameters: {"  "}
        <input
          type="radio"
          name="patternInput"
          value="Blinker"
          onChange={props.patternInput}
        />
        Blinker, min-size: 5
        <input
          type="radio"
          name="patternInput"
          value="Toad"
          onChange={props.patternInput}
        />
        Toad, min-size: 6
        <input
          type="radio"
          name="patternInput"
          value="Beacon"
          onChange={props.patternInput}
        />
        Beacon, min-size: 6
        <button className="patternButton" type="submit">
          Set Pattern
        </button>
      </form>
    </div>
  );
};

export default PatternInput;
