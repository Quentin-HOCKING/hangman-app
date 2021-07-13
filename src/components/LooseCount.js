import React, { useState } from 'react';

function LooseCount ({setLoose, loose, userWord}){
  setLoose(loose++);
  return (
    <div className="loose">
      <h2>You Loose ! the word was : {userWord}</h2>
      <h2>You loosed { loose } Games</h2>
    </div>
  )
}
export default LooseCount;
