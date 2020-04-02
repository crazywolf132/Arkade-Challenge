import React from 'react';
import MenuItem from './MenuItem';
import CartComponent from './Cart';

function LeftBarComponent(props) {
  return (
    <div className="leftBar">
      <h1>Howdy!</h1>
      <ul className="navBar">
        <MenuItem title="All" />
        <MenuItem title="Alcoholic" />
        <MenuItem title="Non-Alcoholic" />
      </ul>
      <CartComponent />
    </div>
  );
}

export default LeftBarComponent;
