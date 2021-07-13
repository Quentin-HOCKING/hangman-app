import React,{useState} from 'react';
import Header from './components/Header';
import Game from './components/Game';
import SetGame from './components/SetGame';
import ResetButton from './components/ResetButton';
import WinCount from './components/WinCount';
import LooseCount from './components/LooseCount';

function App() {

  const title = "Hangman";
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
  if (userWord === displayWord) {
    return (

      <div className="win">

        <WinCount
          win={win}
          setWin={setWin}
          userWord={userWord}
          />

        <ResetButton
          setScore={setScore}
          setUserWord={setUserWord}
          setDisplayWord={setDisplayWord}
          />

      </div>

    )
  }

  if (score === 0 ){
    return (

    <div className="loose">
      <LooseCount
        loose={loose}
        setLoose={setLoose}
        userWord={userWord}
      />
      <ResetButton
        setScore={setScore}
        setUserWord={setUserWord}
        setDisplayWord={setDisplayWord}
      />
    </div>

    )
  }

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
          setScore={setScore}
          setUserWord={setUserWord}
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
       <div className="win-loose">
         <h2>You won { win } Games</h2>
         <h2>You loosed { loose } Games</h2>
       </div>
   </div>
  )
}

export default App;
