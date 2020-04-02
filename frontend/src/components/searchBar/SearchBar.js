import React, {useState, useContext} from 'react';
import Axios from 'axios';
import AppContext from '../../context/AppContext';

function SearchBarComponent(props) {
  const {dispatch} = useContext(AppContext);

  async function performSearch(searchBox) {
    if (searchBox !== '') {
      // This means that there is nothing in the input box.
      const results = await Axios(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchBox}`
      );

      if (Array.isArray(results.data.drinks))
        dispatch({
          type: 'SET_SEARCH_LIST',
          value: results.data.drinks,
        });
    } else {
      dispatch({
        type: 'REVERT_COCKTAIL_LIST',
      });
    }
  }

  return (
    <div className="searchBar">
      <input
        placeholder="Search for something..."
        name="searchBox"
        type="text"
        className="searchBox"
        onChange={data => {
          performSearch(data.target.value);
        }}
      />
    </div>
  );
}

export default SearchBarComponent;
