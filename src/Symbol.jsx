import React from 'react';



const GameSymbol = ({ image, handleClickSymbol, selectedSymbol }) => {
  
  const handleClick = () => {
    handleClickSymbol(image);
  }
  
  if (!selectedSymbol.name ||(image === selectedSymbol)) {
    return (    
      <div>
          <img 
            src={image.url}
            alt={image.name}
            onClick={handleClick}
            
          />    
      </div>
    )
  };

  return null;
}


export default GameSymbol;
