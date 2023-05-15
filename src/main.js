import React from "react";

function kwadrat({ value }) {
  return <button className='kwadrat'>{value}</button>;
}

function nineSquares() {
  return (
    <div className='gameBoard'>
      <kwadrat value={"X"} />
      <kwadrat value={"0"} />
      <kwadrat value={"X"} />
      <kwadrat value={"0"} />
      <kwadrat value={"X"} />
      <kwadrat value={"0"} />
      <kwadrat value={"X"} />
      <kwadrat value={"0"} />
    </div>
  );
}
