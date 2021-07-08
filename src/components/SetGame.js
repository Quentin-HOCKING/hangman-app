import React,{ useState } from 'react';

function SetGame({setUserWord, displayUserWord, setDisplayUserWord,setDisplayWord}){
  const validateUserWord = () => {
    if (displayUserWord.length < 20 && displayUserWord.length > 0 ) {
      setUserWord(displayUserWord);
      setDisplayUserWord('');
      setDisplayWord(displayUserWord.split('').fill("_").join(""))
    }
    else if (displayUserWord.length === 0) {
      alert("Please enter a word")
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
        onChange={event => setDisplayUserWord(event.target.value)}
        onClick = {event => setDisplayUserWord('')}
      />

      <button onClick= {validateUserWord}>
        Validate
      </button>

    </div>
  );
}
export default SetGame;
