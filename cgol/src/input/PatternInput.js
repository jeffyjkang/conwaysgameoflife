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
          <span>Block, min-size: 4</span>
          <input
            type="radio"
            name="patternInput"
            value="Boat"
            onChange={props.patternInput}
          />
          <span>Boat, min-size: 5</span>
          <input
            type="radio"
            name="patternInput"
            value="Tub"
            onChange={props.patternInput}
          />
          <span>Tub, min-size: 5</span>
          <input
            type="radio"
            name="patternInput"
            value="Loaf"
            onChange={props.patternInput}
          />
          <span>Loaf, min-size: 6</span>
        </div>
        <div>
          <span>Small Oscillators</span>
          <input
            type="radio"
            name="patternInput"
            value="Blinker"
            onChange={props.patternInput}
          />
          <span>Blinker, min-size: 5</span>
          <input
            type="radio"
            name="patternInput"
            value="Toad"
            onChange={props.patternInput}
          />
          <span>Toad, min-size: 6</span>
          <input
            type="radio"
            name="patternInput"
            value="Beacon"
            onChange={props.patternInput}
          />
          <span>Beacon, min-size: 6</span>
        </div>
        <div>
          <span>Medium Oscillators</span>
          <input
            type="radio"
            name="patternInput"
            value="Cross"
            onChange={props.patternInput}
          />
          <span>Cross, min-size: 12</span>
          <input
            type="radio"
            name="patternInput"
            value="Star"
            onChange={props.patternInput}
          />
          <span>Star, min-size: 15</span>
          <input
            type="radio"
            name="patternInput"
            value="Pulsar"
            onChange={props.patternInput}
          />
          <span>Pulsar, min-size: 17</span>
        </div>
        <div>
          <span>Large Oscillators</span>
          <input
            type="radio"
            name="patternInput"
            value="Doublepenta"
            onChange={props.patternInput}
          />
          <span>Doublepenta, min-size: 22</span>
          <input
            type="radio"
            name="patternInput"
            value="Oneonetwo"
            onChange={props.patternInput}
          />
          <span>Oneonetwo, min-size: 29</span>
        </div>
        <button className="patternButton" type="submit">
          Set Pattern
        </button>
      </form>
    </div>
  );
};

export default PatternInput;
