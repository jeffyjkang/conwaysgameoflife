import React from "react";
import "./Input.css";

const PatternInput = props => {
  return (
    <div>
      <form onSubmit={props.setPattern}>
        Select initial parameters: {"  "}
        <div>
          <span>Still Lifes</span>
          <input
            type="radio"
            name="patternInput"
            value="Block"
            onChange={props.patternInput}
          />
          Block, min-size: 4
          <input
            type="radio"
            name="patternInput"
            value="Boat"
            onChange={props.patternInput}
          />
          Boat, min-size: 5
          <input
            type="radio"
            name="patternInput"
            value="Tub"
            onChange={props.patternInput}
          />
          Tub, min-size: 5
          <input
            type="radio"
            name="patternInput"
            value="Loaf"
            onChange={props.patternInput}
          />
          Loaf, min-size: 6
        </div>
        <div>
          <span>Oscillators</span>
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
        </div>
        <button className="patternButton" type="submit">
          Set Pattern
        </button>
      </form>
    </div>
  );
};

export default PatternInput;
