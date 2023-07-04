import React from 'react';
import './Button.css';

function Button({text}) {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button id ="btn" onClick={handleClick}> { text} </button>
  );
}

export default Button;

