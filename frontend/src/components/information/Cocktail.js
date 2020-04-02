import React from 'react';

// THIS IS FOR DISPLAYING THE INFORMATION
// REGARDING THE COCKTAIL

function CocktailComponent(props) {
  return (
    <div className="popup">
      <div className="container">
        <h1>INFORMATION</h1>
        <div className="cocktail">
          <span className="name">Blue Lagoon</span>
        </div>
      </div>
    </div>
  );
}

export default CocktailComponent;
