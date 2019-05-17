import React from 'react';

const Button = ({ text, checkWinner }) => {
  return (
    <div>
      <button
        className="btn"
        onClick={checkWinner}
      >
        {text || "Button"}
      </button>
    </div>
  );
}

export default Button;