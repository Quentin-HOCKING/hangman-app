import React, { useState } from 'react';

function WinCount ({setWin, win, userWord}){
<<<<<<< HEAD

  setWin(win++);
  return (
    <div className="win">
      <h2>You Win ! the word was : {userWord}</h2>
      <h2>You won { win } Games</h2>
    </div>
=======
  setWin(win++)
  console.log(win);
  return (
    <h2>You Win ! the word was : {userWord}</h2>
>>>>>>> 2de4e54f659e2c86cc0923fb0188118fa0750434
  )
}
export default WinCount;
