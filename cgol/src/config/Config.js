import React from "react";
import "./Config.css";

const ConfigContainer = props => {
  return (
    <div className="configContainer">
      <form onSubmit={props.gameLogic}>
        {/* change to controlGame later */}
        <button type="submit"> start/pause</button>
      </form>
      <form onSubmit={props.resetGame}>
        <button type="submit">reset game</button>
      </form>
    </div>
  );
};

export default ConfigContainer;
