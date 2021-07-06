import React,{useState} from 'react';
import Header from './components/Header';
import Game from './components/Game';

function App() {

  const title = "Hangman";

  //state pour stocker le userWord
  const [userWord, setUserWord] = useState(null);
  //state pour stoker la userLetter
  const [userLetter, setUserLetter]= useState(null);
  //state pour le score
  const [displayUserWord, setDisplayUserWord] = useState(null);

  const [displayWord, setDisplayWord] = useState(null);

  const [score, setScore] = useState(7);
  //
  return (
    <>
      <Header value={title}/>
      <Game
        score={score}
        setScore={setScore}
        userWord={userWord}
        setUserWord={setUserWord}
        userLetter={userLetter}
        setUserLetter={setUserLetter}
        displayUserWord={displayUserWord}
        setDisplayUserWord={setDisplayUserWord}
        displayWord={displayWord}
        setDisplayWord={setDisplayWord}
      />
    </>
  )
}

export default App;
