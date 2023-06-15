import React from 'react';
import ScratchCard from './ScratchCard';
import '../styles/ScratchCard.css';
const App = () => {
  return (
    <div className="App">
      <h1>Scratch Cards</h1>
      <div className='card-container'>
      <ScratchCard prize="10 points!!" />
      <ScratchCard prize="15 points!!" />
      <ScratchCard prize="300 INR" />
      <ScratchCard prize="1000 INR" />

      </div>
    </div>
  );
};

export default App;
