import React from "react";

const Editor = ({ value, dispatch }) => {
  const handleChange = (e) => {
    dispatch({ type: "CHANGE", payload: e.target.value });
  }
  return (
    <div className="h-[80%] overflow-hidden">
      <textarea
        value={value}
        onChange={handleChange}
        className="w-full outline-none p-2 overflow-auto"
        style={{ height: "100%" }}
      ></textarea>
    </div>
  );
};

export default Editor;
