import React, { useState } from 'react';

function LooseCount ({setLoose, loose, userWord}){
  setLoose(loose++);
  console.log(loose);
  return (
    <h2>You Loose ! the word was : {userWord}</h2>
  )
}
export default LooseCount;
