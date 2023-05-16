import React, { useState } from "react";

function Kwadrat1({ value, onClick }) {
  return (
    <button className='kwadrat1' onClick={onClick}>
      {value}
    </button>
  );
}

function Main() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  
  const handleClick = (i) = {
    squares[i] = isX ? 'X' : '0'
    setSquares(squares)
    setIsX(!isX)
  }

  return (
    <div className='gameBoard'>
      <div className='row'>
        <div className='kwadrat'>X</div>
        <div className='kwadrat'>0</div>
        <div className='kwadrat'>X</div>
      </div>
      <div className='row'>
        <div className='kwadrat'>0</div>
        <div className='kwadrat'>X</div>
        <div className='kwadrat'>0</div>
      </div>
      <div className='row'>
        <div className='kwadrat'>X</div>
        <div className='kwadrat'>0</div>
        <div className='kwadrat'>X</div>
      </div>
    </div>
  );
}

export default Main;
