import React,{useState} from 'react';
import Header from './components/Header';
import Game from './components/Game';
import SetGame from './components/SetGame';
import ResetButton from './components/ResetButton';
import WinCount from './components/WinCount';
import LooseCount from './components/LooseCount';

function App() {

  //state pour stocker le userWord
  const [userWord, setUserWord] = useState(null);
  //state pour stoker la userLetter
  const [userLetter, setUserLetter]= useState(null);
  //state pour le score
  const [displayUserWord, setDisplayUserWord] = useState(null);

  const [displayWord, setDisplayWord] = useState('');

  const [score, setScore] = useState(1);

  const [win, setWin] = useState(0);

  const [loose, setLoose] = useState(0);
  //
  if (userWord)
    return (
      <div className="hangman">
        <Header  />
        {userWord === displayWord && <WinCount
          win={win}
          userWord={userWord}
          />}
        {score === 0 && <LooseCount
          loose={loose}
          userWord={userWord}
        />}
        {userWord !== displayWord && Boolean(score) && <Game
          score={score}
          setScore={setScore}
          setWin={setWin}
          win={win}
          setLoose={setLoose}
          loose={loose}
          userWord={userWord}
          userLetter={userLetter}
          setUserLetter={setUserLetter}
          displayWord={displayWord}
          setDisplayWord={setDisplayWord}
          />}
          <ResetButton
            setScore={setScore}
            setUserWord={setUserWord}
            setDisplayWord={setDisplayWord}
            />
        </div>
      )

  return (
    <div className="step-one">
      <Header  />
      <SetGame
      setUserWord={setUserWord}
      displayUserWord={displayUserWord}
      setDisplayUserWord={setDisplayUserWord}
      setDisplayWord={setDisplayWord}
       />
       <div className="win-loose">
         <h2>You won { win } Games</h2>
         <h2>You loosed { loose } Games</h2>
       </div>
    </div>
  )
}

export default App;
