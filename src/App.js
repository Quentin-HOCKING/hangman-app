import React,{useState} from 'react';
import Header from './components/Header';
import Game from './components/Game';

function App() {

  const title = "Hangman";

  //state pour stocker le userWord
  const [userWord, setUserWord] = useState();
  //state pour stoker la userLetter
  const [userLetter, setUserLetter]= useState();
  //state pour le score
  const [score, setScore] = useState(7);
  //
  return (
    <>
      <Header value={title}/>
      <Game score={score} setScore={setScore} userWord={userWord} setUserWord={setUserWord} userLetter={userLetter} setUserLetter={setUserLetter}/>
    </>
  )
}

export default App;
