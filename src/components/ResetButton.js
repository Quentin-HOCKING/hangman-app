import React, { useState } from 'react';

function ResetButton ({setUserWord, setScore, setDisplayWord}) {
  const newGame = () => {
    setUserWord(null);
    setScore(7);
  }
    return (
      <button onClick= { newGame }>
          Play Again
        </button>
    )
}


export default ResetButton;
