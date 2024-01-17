import React from "react";

const ActionButtons = ({ dispatch }) => {
  const handleButtonClick = (actionType) => {
    dispatch({ type: actionType });
  };

  return (
    <div className="bg-primary h-[10%] flex justify-center items-center gap-1 py-2">
      <button
        className="btn  btn-accent "
        onClick={() => handleButtonClick("UPPERCASE")}
      >
        Convert to Uppercase
      </button>
      <button
        className="btn  btn-accent "
        onClick={() => handleButtonClick("LOWERCASE")}
      >
        Convert to Lowercase
      </button>
      <button
        className="btn  btn-accent "
        onClick={() => handleButtonClick("REMOVEEXTRASPACE")}
      >
        Remove Extra Spaces
      </button>
      <button
        className="btn  btn-error "
        onClick={() => handleButtonClick("CLEARALL")}
      >
        Clear All
      </button>

      <button
        className="btn  btn-success "
        onClick={() => handleButtonClick("COPY")}
      >
        Copy to Clipboard
      </button>
    </div>
  );
};

export default ActionButtons;
