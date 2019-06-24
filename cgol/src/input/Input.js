import React from "react";

const InputContainer = props => {
  return (
    <div>
      <form>
        Input size of grid: {"  "}
        <input type="number" min="0" name="size" onChange={props.sizeInput} />
      </form>
    </div>
  );
};

export default InputContainer;
