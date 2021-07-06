import React, { useState } from "react";
import WordToGuess, {setDisplayWord} from "./WordToGuess";

function UserGuess ({setDisplayWord}){
  const [userLetter, setUserLetter] = useState();
  const setUserLetter = () => {
    if (userLetter.length == 1){
      if (setUserWord.includes(setUserLetter)){
        for ( let i = 0; i < setDisplayWord.length; i++){
          if (setUserLetter === setDisplayWord[i]){
            displayWord[i] = setUserLetter;
          }
        }
      }
      else {
      alert('There is not the letter:');
      score --;
      }
    }
    else if (validateLetter.length == 0) {
        alert("Please enter one letter")
    }
    else {
        alert("Too many letters");
    }
  }
  if (setUserWord === displayWord.join("")) {
      alert("You Win! the word was:" + setUserWord);
  return (
    <div className="display-Letter">
      <h2>{userLetter}</h2>
      <input
        type="text"
        value={userLetter}
        placeholder="What is your word ?"
        onChange={event => setWordDisplay(event.target.value)}
        onClick = {event => setWordDisplay('')}
      />

      <button onClick= {setUserLetter}>
        Validate
      </button>

    </div>
  )
}






// function onValidateLetter() {
//   let validateLetter = document.getElementById('letter-to-validate').value.toUpperCase();
//   console.log(validateLetter);
//   if (validateLetter.length == 1) {
//     if (wordToGuess.includes(validateLetter)){
//       for ( let i = 0; i < wordToGuess.length; i++){
//         if (validateLetter === wordToGuess[i]){
//             displayWord[i] = validateLetter;
//             showWord.innerHTML = displayWord.join("");
//           }
//         }
//       }
//       else {
//         alert("There is not the letter: "+ validateLetter);
//         score --;
//         showScore.innerHTML = "You have " + score + " lives";
//       }
//     }
  // else if (validateLetter.length == 0) {
  //     alert("Please enter one letter")
  // }
  // else {
  //     alert("Too many letters");
  // }
//   if (wordToGuess === displayWord.join("")) {
//     alert("You Win! the word was:" + wordToGuess);
//     winCount +=1;
//     winCountElement.innerHTML = winCount;
//     displayWinLoose.style.display = 'block';
//     displayGamePart1.style.display = 'none';
//     displayGamePart2.style.display = 'none';
//   }
//   else if (score <= 0){
//     alert("You loose ! the word was:" + wordToGuess);
//     lossCount +=1;
//     lossCountElement.innerHTML = lossCount;
//     displayWinLoose.style.display = 'block';
//     displayGamePart1.style.display = 'none';
//     displayGamePart2.style.display = 'none';
//   }
//   validateLetter = document.getElementById('letter-to-validate').value = null;
// }
//
// function reset() {
//     score = 7;
//     validateLetter = document.getElementById('letter-to-validate').value = null;
//     wordToGuess = document.getElementById('word-to-guess').value = null;
//     displayWord = [];
//     displayGamePart1.style.display = 'block';
//     displayGamePart2.style.display = 'none';
//     displayWinLoose.style.display = 'none';
// }
