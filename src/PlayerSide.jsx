import React from 'react';
import GameSymbol from './Symbol';

const PlayerSide = ({ images, handleClickSymbol, selectedSymbol }) => {

  return (
    <div>
      <p>Human<br/>Choice</p>
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
            
            )
          }

export default PlayerSide;
