import React from "react";

export default function Button({ text, onClick, disabled = false }) {
  const customOnClick = () => {
    if (!disabled) {
      return onClick();
    }
  };
  return (
    <button
      className="button"
      style={{ backgroundColor: disabled && "#e2e2e2" }}
      onClick={customOnClick}
    >
      {text}
    </button>
  );
}
