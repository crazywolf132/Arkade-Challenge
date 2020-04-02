import React from 'react';
import LeftBarComponent from 'components/LeftBar/LeftBar';
import SearchBarComponent from 'components/searchBar/SearchBar';
import ProductZoneComponent from 'components/Product/ProductZone';

function App() {
  return (
    <div>
      <div className="core">
        <LeftBarComponent />
        <SearchBarComponent />
        <ProductZoneComponent />
      </div>
    </div>
  );
}

export default App;
