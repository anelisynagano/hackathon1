import React from 'react';
import GameSymbol from './Symbol';

const ComputerSide = ({ images, handleClickSymbol, selectedSymbol }) => {
  return (
    
    <div>
      <p>Computer<br/>Choice</p>
        {images.map(image => {
          return (
            <GameSymbol 
              image={image}
              key={image.name} 
              handleClickSymbol={handleClickSymbol}
              selectedSymbol={selectedSymbol}
            />
        )})}   
    </div>
  );
}

export default ComputerSide;
