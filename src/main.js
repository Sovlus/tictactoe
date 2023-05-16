import React from "react";

function Main() {
  return (
    <div className='gameBoard'>
      <div className='row1'>
        <div className='kwadrat'>X</div>
        <div className='kwadrat'>0</div>
        <div className='kwadrat'>X</div>
      </div>
      <div className='row2'>
        <div className='kwadrat'>0</div>
        <div className='kwadrat'>X</div>
        <div className='kwadrat'>0</div>
      </div>
      <div className='row3'>
        <div className='kwadrat'>X</div>
        <div className='kwadrat'>0</div>
        <div className='kwadrat'>X</div>
      </div>
    </div>
  );
}

export default Main;
