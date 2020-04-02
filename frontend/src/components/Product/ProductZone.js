import React, {useEffect, useContext} from 'react';
import axios from 'axios';
import AppContext from '../../context/AppContext';
import ProductComponent from './Product';

function ProductZoneComponent(props) {
  const {appState, dispatch} = useContext(AppContext);
  const {
    isLoading,
    cocktails,
    searchCocktails,
    isSearchMode,
    shoppingCartCount,
    shoppingCartList,
  } = appState;

  useEffect(() => {
    getDrinks();
  }, []);

  async function getDrinks() {
    const results = [];
    const list = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];

    list.forEach(async letter => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
      );

      if (Array.isArray(response.data.drinks))
        response.data.drinks.map(drink => results.push(drink));

      dispatch({
        type: 'SET_COCKTAIL_LIST',
        value: results,
      });
    });
  }

  function getProducts() {
    const toWorkOn = isSearchMode ? searchCocktails : cocktails;
    console.log(JSON.stringify(toWorkOn));
    return toWorkOn.map(item => (
      <ProductComponent
        name={item.strDrink}
        percentage={item.strABV || ''}
        image={item.strDrinkThumb}
        callBack={() => {
          const cartListCopy = shoppingCartList;
          cartListCopy.push(item);
          dispatch({
            type: 'ADD_TO_CART',
            shoppingCartCount: shoppingCartCount + 1,
            shoppingCartList: cartListCopy,
          });
        }}
      />
    ));
  }

  return (
    <React.Fragment>
      {!isLoading ? (
        <div className="productZone">{getProducts()}</div>
      ) : (
        <h2> Please wait... </h2>
      )}
    </React.Fragment>
  );
}

export default ProductZoneComponent;
