import React from 'react';

function ButtonValidateWord () {

  function validateWordToGuess(){
    alert('Hello')
  }
  return (
    <button onClick={validateWordToGuess}>
    Clic !
    </button>
  )
}

export default App;
