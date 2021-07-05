import React, { useState } from "react";


function WordToGuess(){
  const [userWord, setUserWordDisplay] = useState(
  'What is your word ?'
);
  function setUserWord(){
    if (userWord.length < 20 && userWord.length > 0) {
      alert(userWord);
      }
    else if (userWord.length == 0) {
      alert("Please enter a valide word")
    }
    else {
      alert("Your word is too long")
    }
  }
    return (
    <div>

      <h2>{userWord}</h2>

      <input
        type="text"
        value={userWord}
        onChange={event => setUserWordDisplay(event.target.value)}
        onClick = {event => setUserWordDisplay(event.target.value = '')}
      />
      <button onClick= {setUserWord}>
        Validate
      </button>
    </div>
    )
}
export default WordToGuess;
