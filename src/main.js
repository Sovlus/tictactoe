import React, { useState } from "react";
import "./App.css";

function Kwadrat1({ value, onClick }) {
  return (
    <button className='kwadrat1' onClick={onClick}>
      {value}
    </button>
  );
}

function ktoWygral(squares) {
  const patterny = [
    [0, 1, 2], // poziomo
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], //pionowo
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // na krzyż
    [2, 4, 6],
  ];

  for (let i = 0; i < patterny.length; i++) {
    const [a, b, c] = patterny[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function GameStatus({ winner, playerXName, player0Name }) {
  if (winner) {
    const winnerName = winner === "X" ? playerXName : player0Name;
    return <h5>{winnerName} wygrał grę!</h5>;
  } else {
    return null;
  }
}

function Main() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [playerXName, setPlayerXName] = useState("");
  const [player0Name, setPlayer0Name] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  const winner = ktoWygral(squares);

  const handleClick = (i) => {
    if (!gameStarted || squares[i] !== null || winner) {
      return;
    }

    const updatedSquares = [...squares];
    updatedSquares[i] = isX ? "X" : "0";
    setSquares(updatedSquares);
    setIsX(!isX);
  };

  const handleStartGame = () => {
    if (playerXName.trim() !== "" && player0Name.trim() !== "") {
      setGameStarted(true);
      setPlayerXError(false);
      setPlayer0Error(false);
    } else {
    }
  };

  return (
    <div className='gameBoard'>
      <h1>Tic Tac Toe</h1>
      {!gameStarted && (
        <div className='inputy'>
          <input
            type='text'
            placeholder='Nazwa gracza X'
            value={playerXName}
            onChange={(e) => setPlayerXName(e.target.value)}
            required
          />
          <br></br>
          <input
            type='text'
            placeholder='Nazwa gracza 0'
            value={player0Name}
            onChange={(e) => setPlayer0Name(e.target.value)}
            required
          />
          <br></br>
          <button onClick={handleStartGame}>Zacznij grę</button>
        </div>
      )}
      <div className='row'>
        <Kwadrat1
          className='sqr'
          value={squares[0]}
          onClick={() => handleClick(0)}
        />
        <Kwadrat1
          className='sqr'
          value={squares[1]}
          onClick={() => handleClick(1)}
        />
        <Kwadrat1
          className='sqr'
          value={squares[2]}
          onClick={() => handleClick(2)}
        />
      </div>
      <div className='row'>
        <Kwadrat1
          className='sqr'
          value={squares[3]}
          onClick={() => handleClick(3)}
        />
        <Kwadrat1
          className='sqr'
          value={squares[4]}
          onClick={() => handleClick(4)}
        />
        <Kwadrat1
          className='sqr'
          value={squares[5]}
          onClick={() => handleClick(5)}
        />
      </div>
      <div className='row'>
        <Kwadrat1
          className='sqr'
          value={squares[6]}
          onClick={() => handleClick(6)}
        />
        <Kwadrat1
          className='sqr'
          value={squares[7]}
          onClick={() => handleClick(7)}
        />
        <Kwadrat1
          className='sqr'
          value={squares[8]}
          onClick={() => handleClick(8)}
        />
      </div>
      <GameStatus
        winner={winner}
        playerXName={playerXName}
        player0Name={player0Name}
      />
    </div>
  );
}

export default Main;
