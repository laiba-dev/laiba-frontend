import React from "react";

export default function Button({ text, onClick, disabled = false }) {
  return (
    <button
      className="button"
      style={{ backgroundColor: disabled && "#e2e2e2" }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
