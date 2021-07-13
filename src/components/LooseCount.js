import React, { useState } from 'react';

function LooseCount ({setLoose, loose, userWord}){
  setLoose(loose++);
<<<<<<< HEAD
  return (
    <div className="loose">
      <h2>You Loose ! the word was : {userWord}</h2>
      <h2>You loosed { loose } Games</h2>
    </div>
=======
  console.log(loose);
  return (
    <h2>You Loose ! the word was : {userWord}</h2>
>>>>>>> 2de4e54f659e2c86cc0923fb0188118fa0750434
  )
}
export default LooseCount;
