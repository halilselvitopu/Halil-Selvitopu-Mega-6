import React from "react";

const InputField = (props) => {
  return (
    <label className="enterCelsius">
      Celcius:
      <input type="" value={props.itsvalue} onChange={props.onchange} />
    </label>
  );
};

export default InputField;
