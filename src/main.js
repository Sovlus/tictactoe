import React from "react";

function kwadrat1({ value, onClick }) {
  return (
    <button className='kwadrat1' onClick={{ onClick }}>
      {value}
    </button>
  );
}

function Main() {
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
