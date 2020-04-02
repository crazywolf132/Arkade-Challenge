/* eslint-disable */
import React, {createContext, useReducer} from 'react';
import AppReducer from '../reducers/AppReducer';

const AppContext = createContext(null);

export const initialState = {
  cocktails: [],
  searchCocktails: [],
  isLoading: false,
  isLoaded: false,
  isSearchMode: false,
  shoppingCartCount: 0,
  shoppingCartList: [],
  loadedCocktail: null,
  informationMode: false,
};

const AppProvider = props => {
  const [appState, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{appState, dispatch}}>
      {props.children}
    </AppContext.Provider>
  );
};

export {AppContext as default, AppProvider};
