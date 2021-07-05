import React, { useState } from "react";

function WordToGuess(){
  const [userWord, setUserWordDisplay] = useState(
  'What is your word ?'
  )
  function setUserWord(){
    alert(userWord);
  }
  return (
  <div>

    <h2>{userWord}</h2>

    <input
      type="text"
      value={userWord}
      onChange={event => setUserWordDisplay(event.target.value)}
      onClick = {event => setUserWordDisplay(event.target.value = "")}
    />
    <button onClick= {setUserWord}>
      Validate
    </button>
  </div>
  )

}
export default WordToGuess;

//je voudrais ajouter un bouton qui valide le mot afficher.
