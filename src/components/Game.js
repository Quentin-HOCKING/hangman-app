import React, { useState } from "react";

function Game({userWord, score, setScore, userLetter,setUserLetter, displayWord, setDisplayWord}){

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
          alert("You Win! the word was: " + userWord);
        }
        setDisplayWord(displayWordTemp.join(""))
      }
      else {
        alert('There is not the letter: ' + userLetter);
        setScore(score-=1);
        console.log(userLetter);
      }
    }
    else if (userLetter.length < 1) {
        alert("Too many letters");
    }
    if (score <= 0){
      alert("You loose ! the word was: " + userWord);
    }
    setUserLetter('');
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
          onClick = {event => setUserLetter(null)}
        />

        <button onClick= {validateLetter}>
          Validate
        </button>
      </div>
    );
}
export default Game;
