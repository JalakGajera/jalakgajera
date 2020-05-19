import React from 'react';
import './App.css';
//import StateInAction from './StateInAction'
//import SimpleEvent from './SimpleEvent'
//import EventAndState from './EventAndState'
//import StatePractice from './StatePractice'
import CardSet from './CardSet';
import Card from './Card';

console.log(Card)

function App() {
  return (
    <div className="App">
      <div className="row">
         <CardSet Card={Card}/>
      </div>
      {/* <StatePractice/> */}

      {/* <EventAndState/> */}

      {/* <SimpleEvent/> */}


      {/* <h1>State Check!</h1>
      <h1>Jalak</h1>
      <StateInAction name="jalak"/> */}
    </div>
  );
}

export default App;
