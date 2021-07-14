import React, { useState } from "react";


function Game({userWord, score, setScore, userLetter,setUserLetter, displayWord, setDisplayWord, setWin, win,setLoose, loose}){


  const validateLetter = () => {
    let displayWordTemp = displayWord.split('');

    if (userLetter === null) {
      alert("Please enter one letter")
    }
    else if (userLetter.length === 1){
      if (userWord.includes(userLetter)){
        for ( let i = 0; i < userWord.length; i++){
          if (userLetter === userWord[i]){
            displayWordTemp[i] = userLetter
          }
        }
        if (userWord === displayWordTemp.join("")) {
          setDisplayWord(displayWordTemp);
          setWin(win + 1);
        }
        setDisplayWord(displayWordTemp.join(""))
      }
      else {
        alert('There is not the letter: ' + userLetter);
        setScore(score-=1);
      } if (score === 0){
        setLoose(loose + 1);
      }
    }
    else {
        alert("Too many letters");
    }
    setUserLetter(null);
  }

  return (
      <div className="display-word-to-guess">
        <h2>{ displayWord }</h2>
        <h2>You have {score} guess left</h2>
        <input
          type="text"
          value={userLetter}
          placeholder="What is your Letter ?"
          onChange={event => setUserLetter(event.target.value.toUpperCase())}
          onClick = {event => setUserLetter('')}
        />

        <button onClick= {validateLetter}>
          Validate
        </button>
      </div>
    )
}
export default Game;
