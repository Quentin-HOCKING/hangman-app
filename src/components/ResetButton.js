import React, { useState } from 'react';

function ResetButton ({setUserWord, setScore, setDisplayWord}) {
  const newGame = () => {
    setUserWord(null);
    setScore(1);
  }
    return (
      <button onClick= { newGame }>
          Play Again
        </button>
    )
}


export default ResetButton;
