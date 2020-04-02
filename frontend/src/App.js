import React from 'react';
import LeftBarComponent from 'components/LeftBar/LeftBar';
import SearchBarComponent from 'components/searchBar/SearchBar';
import ProductComponent from 'components/Product/Product';
import ProductZoneComponent from 'components/Product/ProductZone';
import CocktailComponent from 'components/information/Cocktail';

function App() {
  return (
    <div>
      <div className="core">
        <LeftBarComponent />
        <SearchBarComponent />
        <ProductZoneComponent />
      </div>
      {/* <CocktailComponent /> */}
    </div>
  );
}

export default App;
