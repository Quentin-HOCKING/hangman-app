import React, { useState } from "react";

function Game({userWord, setUserWord, score, setScore, userLetter,setUserLetter}){
  const [wordToGuess, setDisplayWordToGuess] = useState();
  const setGame = () => {
    if (wordToGuess.length < 20 && wordToGuess.length > 0 ) {
      setUserWord(wordToGuess);
      // UserGuess()
    }
    else if (wordToGuess.length === 0) {
      alert("Please enter a word")
    }
    else {
      alert("Your word is too long")
    }

  }



  if(userWord){
    const displayWord = userWord.split('').fill("_").join(" ");
    const validateLetter = () => {
      if (userLetter.length === 1){
        if (userWord.includes(userLetter)){
          for ( let i = 0; i < userWord.length; i++){
            if (userLetter === userWord[i]){
              displayWord[i]=userLetter

            }
          }
        }
        else {
        alert('There is not the letter: ' + userLetter);
        setScore(score-=1);
        console.log(userLetter);
        }
      }
      else if (userLetter.length === 0) {
          alert("Please enter one letter")
      }
      else {
          alert("Too many letters");
      }
      if (wordToGuess === displayWord) {
        alert("You Win! the word was:" + userWord);
      }
        if (score <= 0){
        alert("You loose ! the word was: " + userWord);
      }
    }
    return (
      <div className="display-word-to-guess">
        <h2>{ displayWord }</h2>
        <h2>{userLetter}</h2>
        <h2>You have {score} guess left</h2>
        <input
          type="text"
          value={userLetter}
          placeholder="What is your Letter ?"
          onChange={event => setUserLetter(event.target.value)}
          onClick = {event => setUserLetter('')}
        />

        <button onClick= {validateLetter}>
          Validate
        </button>
      </div>
    )
  }


  return (
    <div className="display-word">
      <h2>{wordToGuess}</h2>
      <input
        type="text"
        value={wordToGuess}
        placeholder="What is your word ?"
        onChange={event => setDisplayWordToGuess(event.target.value)}
        onClick = {event => setDisplayWordToGuess('')}
      />

      <button onClick= {setGame}>
        Validate
      </button>

    </div>

  )

}
export default Game;
