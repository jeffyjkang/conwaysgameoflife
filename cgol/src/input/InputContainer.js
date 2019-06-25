import React from "react";
import GridInput from "./GridInput";
import PatternInput from "./PatternInput";

const InputContainer = props => {
  return (
    <div>
      <GridInput sizeInput={props.sizeInput} gridCreate={props.gridCreate} />
      <PatternInput
        patternInput={props.patternInput}
        setPattern={props.setPattern}
        patternSet={props.patternSet}
      />
    </div>
  );
};

export default InputContainer;
