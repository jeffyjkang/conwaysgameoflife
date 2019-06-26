import React from "react";
import "./Input.css";

const PatternInput = props => {
  return (
    <div>
      <p className="pText">Select initial pattern for life:</p>
      <form className="pForm" onSubmit={props.setPattern}>
        <div className="pSections">
          <p className="pCategory">Still Lifes</p>
          <div className="picon">
            <div>
              <span>Block, min-size: 4</span>
              <input
                type="radio"
                name="patternInput"
                value="Block"
                onChange={props.patternInput}
              />
            </div>
            <div>
              <span>Boat, min-size: 5</span>
              <input
                type="radio"
                name="patternInput"
                value="Boat"
                onChange={props.patternInput}
              />
            </div>
            <div>
              <span>Tub, min-size: 5</span>
              <input
                type="radio"
                name="patternInput"
                value="Tub"
                onChange={props.patternInput}
              />
            </div>
            <div>
              <span>Loaf, min-size: 6</span>
              <input
                type="radio"
                name="patternInput"
                value="Loaf"
                onChange={props.patternInput}
              />
            </div>
          </div>
        </div>
        <div className="pSections">
          <p className="pCategory">Small Oscillators</p>
          <div className="picon">
            <div>
              <span>Blinker, min-size: 5</span>
              <input
                type="radio"
                name="patternInput"
                value="Blinker"
                onChange={props.patternInput}
              />
            </div>
            <div>
              <span>Toad, min-size: 6</span>
              <input
                type="radio"
                name="patternInput"
                value="Toad"
                onChange={props.patternInput}
              />
            </div>
            <div>
              <span>Beacon, min-size: 6</span>
              <input
                type="radio"
                name="patternInput"
                value="Beacon"
                onChange={props.patternInput}
              />
            </div>
          </div>
        </div>
        <div className="pSections">
          <p className="pCategory">Medium Oscillators</p>
          <div className="picon">
            <div>
              <span>Cross, min-size: 12</span>
              <input
                type="radio"
                name="patternInput"
                value="Cross"
                onChange={props.patternInput}
              />
            </div>
            <div>
              <span>Star, min-size: 15</span>
              <input
                type="radio"
                name="patternInput"
                value="Star"
                onChange={props.patternInput}
              />
            </div>
            <div>
              <span>Pulsar, min-size: 17</span>
              <input
                type="radio"
                name="patternInput"
                value="Pulsar"
                onChange={props.patternInput}
              />
            </div>
          </div>
        </div>
        <div className="pSections">
          <p className="pCategory">Large Oscillators</p>
          <div className="picon">
            <div>
              <span>Doublepenta, min-size: 22</span>
              <input
                type="radio"
                name="patternInput"
                value="Doublepenta"
                onChange={props.patternInput}
              />
            </div>
            <div>
              <span>Oneonetwo, min-size: 29</span>
              <input
                type="radio"
                name="patternInput"
                value="Oneonetwo"
                onChange={props.patternInput}
              />
            </div>
          </div>
        </div>
        <div className="pSections">
          <button className="pButton" type="submit">
            Set Pattern
          </button>
          <p>
            {"  "} Pattern Set: {props.patternSet === false ? "No" : "Yes"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default PatternInput;
