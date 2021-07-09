import React,{useState} from 'react';
import Header from './components/Header';
import Game from './components/Game';
import SetGame from './components/SetGame';
import ResetButton from './components/ResetButton';

function App() {

  const title = "Hangman";
  //state pour stocker le userWord
  const [userWord, setUserWord] = useState(null);
  //state pour stoker la userLetter
  const [userLetter, setUserLetter]= useState(null);
  //state pour le score
  const [displayUserWord, setDisplayUserWord] = useState(null);

  const [displayWord, setDisplayWord] = useState(null);

  const [score, setScore] = useState(1);
  //

  if (userWord !== null){
    return (
      <div className="step-two">
        <Header />
        <Game
          score={score}
          setScore={setScore}
          userWord={userWord}
          userLetter={userLetter}
          setUserLetter={setUserLetter}
          displayWord={displayWord}
          setDisplayWord={setDisplayWord}
          />
        <ResetButton
          score={score}
          setScore={setScore}
          userWord={userWord}
          setUserWord={setUserWord}
          userLetter={userLetter}
          setUserLetter={setUserLetter}
          displayWord={displayWord}
          setDisplayWord={setDisplayWord}
          displayUserWord={displayUserWord}
          setDisplayUserWord={setDisplayUserWord}
          />
    </div>
    )
  }

  return (
    <div className="step-one">
      <Header value={title} />
      <SetGame
      setUserWord={setUserWord}
      displayUserWord={displayUserWord}
      setDisplayUserWord={setDisplayUserWord}
      setDisplayWord={setDisplayWord}
       />
   </div>
  )
}

export default App;
