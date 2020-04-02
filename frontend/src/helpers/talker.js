import axios from 'axios';

/**
 * Used for getting the information from the API
 */

export const getImageURL = itemName => {
  return `https://www.thecocktaildb.com/images/ingredients/${itemName}.png`;
};

export const searchProducts = searchTerm => {
  return axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${searchTerm}`
  );
};

export const get20Items = async (lastPost = 0) => {
  const results = [];
  for (let i = lastPost + 1; i < lastPost + 20; i += 1) {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${i}`)
      .then(response => {
        if (Array.isArray(response.data.ingredients)) {
          response.data.ingredients[0].image = getImageURL(
            response.data.ingredients[0].strIngredient
          );
          results.push(response.data.ingredients[0]);
        }
      });
  }
  return results;
};
