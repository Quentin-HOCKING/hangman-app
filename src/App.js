import React,{useState} from 'react';
import Header from './components/Header';
import WordToGuess from './components/WordToGuess';

function App() {

  const title = "Hangman";

  //state pour stocker le userWord
  const [userWord, setUserWord] = useState(null);
  //state pour stoker la userLetter
  //state pour le score
  const [score, setScore] = useState(7);
  //
  return (
    <>
      <Header value={title}/>
      <WordToGuess userWord={userWord} setUserWord={setUserWord}/>
    </>
  )
}

export default App;
