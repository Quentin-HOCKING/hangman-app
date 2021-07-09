import React, { useState } from 'react';
import App from '../components/Game';

function ResetButton () {

    const [userWord, setUserWord] = useState(null);
    //state pour stoker la userLetter
    const [userLetter, setUserLetter]= useState(null);
    //state pour le score
    const [displayUserWord, setDisplayUserWord] = useState(null);

    const [displayWord, setDisplayWord] = useState(null);

    const [score, setScore] = useState(1);

    return (
      <button onClick= {ResetButton}>
          Play Again
        </button>
    )
  }


export default ResetButton;
