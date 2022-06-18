import React from 'react'

const SpreadOP = () => {
    // const fullname = ['vinod', 'thapa'];
    // const biodata = [1, ...fullname, 26, 'male'];
    // console.log(fullname);
    // console.log(biodata);

//  var shooterGames = ['call of duty', 'far cry','resident evil', 'call of duty'];
//  var racingGames = ['need for speed', 'gran turismo', 'burnout'];
//  var games= [...shooterGames, ...racingGames];
//  console.log(games);

//  var shooterGames = ['call of duty', 'far cry','resident evil', 'call of duty'];
// var [first, ...remaining] = shooterGames;
// console.log(first);
// console.log(remaining);
    
const name = {
    fname: 'bibeka',
    lname: 'singh',
}
const biodata =  {
    age: 27,
    qualif: 'Btech',
    place: 'banglore',
}
const details = { ...name, ...biodata, prof: 'software engineer'}
console.log(details);
  return (
    <>
        <h1>hello</h1>

    </>
  )
}

export default SpreadOP