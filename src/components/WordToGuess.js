import React, { useState } from "react";

function WordToGuess({userWord, setUserWord}){
  const [wordDisplay, setWordDisplay] = useState()

  const setDisplayWord = () => {
    if (wordDisplay.length < 20 && wordDisplay.length > 0 ) {
      setUserWord(wordDisplay)
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
    return (
      <div className="display-word-to-guess">
        <h2>{ displayWord }</h2>
      </div>
    )
  }


  return (
    <div className="display-word">
      <h2>{userWord}</h2>
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
