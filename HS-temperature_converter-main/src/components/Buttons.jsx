import React from "react";

const Buttons = (props) => {
  return (
    <div>
      <button onClick={props.onclickF}>Fahrenheit'e çevir</button>
      <button onClick={props.onclickK}>Kelvin'e çevir</button>
    </div>
  );
};

export default Buttons;
