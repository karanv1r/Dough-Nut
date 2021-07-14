import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App1.css";
function App() {
  const APP_ID = "afd72afa";
  const APP_KEY = "d1cf1979b0972839d79b3f5f428a8c12";

  const [recipes, setRecipes] = useState([]);
  const [search, searchState] = useState("");
  const [query, setQuery] = useState("omellete");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (event) => {
    searchState(event.target.value);
  };
  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    searchState("");
  };
  return (
    <div className="App">
      <h1>Learn Recipes</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          onChange={updateSearch}
          type="text"
          value={search}
          placeholder="What would you like to learn today?"
        ></input>

        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
