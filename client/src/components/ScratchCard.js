import React, { useState } from 'react';
import afterCard from '../images/expressPayLogo.jpg';
import revealedCard from '../images/congrats.png'
import '../styles/ScratchCard.css'
const ScratchCard = ({ prize }) => {
  const [isScratched, setScratched] = useState(false);

  const handleScratch = () => {
    setScratched(true);
  };

  return (
    <div className="card" onClick={handleScratch}>
      {isScratched ? (
        <>
          <img className="card-image" src={revealedCard} alt="Revealed Card" />
          <div className="prize">
           
            <p><b>Congratulations! You won: {prize}</b></p>
          </div>
        </>
      ) : (
        <img className="card-image" src={afterCard} alt="Scratched Card" />
      )}
    </div>
  );
};

export default ScratchCard;
