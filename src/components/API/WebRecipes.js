import React, { Component, useEffect, useState } from 'react';
import RecipeList from './RecipeList'

const WebRecipes = () => {
  //Edamam API
  const APP_ID = "b0bb70b1";
  const APP_KEY = "e08ebce3aa48d4cd5bb39c904c1067e4";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
    edamamRecipes();
  }, [query]);

  const edamamRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const _updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const _getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
  }
  return (
    <div>
      <h1>Inspiration from the web</h1>
      <form onSubmit={_getSearch}>
        <input
          type="text"
          value={search}
          onChange={_updateSearch}
          placeholder="Chicken"
         />
        <button type="submit">
          Search
        </button>
      </form>

      {recipes.map(result => (
        <RecipeList
          key={result.recipe.label}
          title={result.recipe.label}
          image={result.recipe.image}
          serves={result.recipe.yield}
          time={result.recipe.totalTime}
          ingredients={result.recipe.ingredients}
          link={result.recipe.url}
        />
      ))}
    </div>
  );
};


export default WebRecipes;
