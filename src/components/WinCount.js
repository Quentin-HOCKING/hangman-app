import React, { useState } from 'react';

function WinCount ({win, userWord}){

  return (

    <div className="win">

      <h2>You Win ! the word was : {userWord}</h2>
      <h2>You won { win } Games</h2>

    </div>


  )
}
export default WinCount;
