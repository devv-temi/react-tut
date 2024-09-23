import React from "react";
import colorNames from "colornames";

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.prevantDefault()}>
      {/* <h2>Input</h2> */}
      <label htmlFor="">Add Color name:</label>
      <input
        type="text"
        autoFocus
        placeholder="add color name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!setIsDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default Input;
