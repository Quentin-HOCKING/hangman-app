import React, { useState } from 'react';

function SetGame({setUserWord, displayUserWord, setDisplayUserWord,setDisplayWord}){

  const validateUserWord = () => {
    if (displayUserWord === null) {
      alert("Please enter a word")
    }
    else if (displayUserWord.length < 20 && displayUserWord.length ) {
      setUserWord(displayUserWord);
      setDisplayUserWord('');
      setDisplayWord(displayUserWord.split('').fill("_").join(""))
    }
    else {
      alert("Your word is too long")
    }
  }

  return (
    <div className="display-word">
      <input
        type="text"
        value={displayUserWord}
        placeholder="What is your word ?"
        onChange={event => setDisplayUserWord(event.target.value.toUpperCase())}
        onClick = {event => setDisplayUserWord('')}
      />
      <button onClick= {validateUserWord}>
        Validate
      </button>
    </div>
  );
}
export default SetGame;
