import React, { useState } from "react";

function WordToGuess({userWord, setUserWord}){
  const [wordDisplay, setWordDisplay] = useState()
  const [userLetter, setUserLetter] = useState();
  const setDisplayWord = () => {
    if (wordDisplay.length < 20 && wordDisplay.length > 0 ) {
      setUserWord(wordDisplay)
      // UserGuess()
    }
    else if (wordDisplay.length === 0) {
      alert("Please enter a valide word")
    }
    else {
      alert("Your word is too long")
    }

  }



  if(userWord){
    const displayWord = userWord.split('').fill("_").join(" ");
    const setDisplayLetter = () => {
      if (userLetter.length == 1){
        if (userWord.includes(userLetter)){
          for ( let i = 0; i < displayWord.length; i++){
            if (userLetter === displayWord[i]){
              displayWord[i] = userLetter;
            }
          }
        }
        else {
        alert('There is not the letter:');
        }
      }
      else if (userLetter.length == 0) {
          alert("Please enter one letter")
      }
      else {
          alert("Too many letters");
      }
    }
    return (
      <div className="display-word-to-guess">
        <h2>{ displayWord }</h2>
        <h2>{userLetter}</h2>
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
      <h2>{wordDisplay}</h2>
      <input
        type="text"
        value={wordDisplay}
        placeholder="What is your word ?"
        onChange={event => setWordDisplay(event.target.value)}
        onClick = {event => setWordDisplay('')}
      />

      <button onClick= {setDisplayWord}>
        Validate
      </button>

    </div>

  )

}
export default WordToGuess;
