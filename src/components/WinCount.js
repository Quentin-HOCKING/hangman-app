import React, { useState } from 'react';

function WinCount ({setWin, win, userWord}){
  setWin(win++)
  console.log(win);
  return (
    <h2>You Win ! the word was : {userWord}</h2>
  )
}
export default WinCount;
