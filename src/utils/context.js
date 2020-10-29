import React, { useState, useContext, useEffect } from 'react'

const APP_ID = "dbdb63b2";
const APP_KEY = "dbed12fc54392e5f7cbd91d3e90ba1f6";

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [query, setQuery] = useState('meat');
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  const getRecips = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      const renderRecipe = data.hits.map((recipe) => {
        return {
          id: recipe.recipe.label,
          image: recipe.recipe.image,
          calories: recipe.recipe.calories,
          totalTime: recipe.recipe.totalTime,
          totalWeight: recipe.recipe.totalWeight,
          yield: recipe.recipe.yield,
          ingredients: recipe.recipe.ingredients,
          url: recipe.recipe.url
        }
      })
      setRecipes(renderRecipe)
      setLoading(false)
    }
    catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getRecips();
  }, [query]);

  return <AppContext.Provider
    value={{ loading, recipes, setQuery, getRecips }}
  >
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }