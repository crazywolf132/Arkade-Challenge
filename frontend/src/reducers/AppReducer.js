const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_COCKTAIL_LIST':
      return {
        ...state,
        cocktails: action.value,
        isLoaded: true,
        isLoading: false,
      };
    case 'SET_SEARCH_LIST':
      return {
        ...state,
        searchCocktails: action.value,
        isLoaded: true,
        isSearchMode: true,
        isLoading: false,
      };
    case 'REVERT_COCKTAIL_LIST':
      return {
        ...state,
        isSearchMode: false,
        searchCocktails: [],
      };
    case 'RESET_CART':
      return {
        ...state,
        shoppingCartCount: 0,
        shoppingCartList: [],
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        shoppingCartCount: action.shoppingCartCount,
        shoppingCartList: action.shoppingCartList,
      };
    default:
      throw new Error();
  }
};

export default appReducer;
