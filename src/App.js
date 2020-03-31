import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Recipes from "./recipes";

const APP_ID = process.env.REACT_APP_ID;
const APP_KEY = process.env.REACT_APP_KEY;

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          placeholder="search"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipes
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            img={recipe.recipe.image}
            // yield={recipe.recipe.yield}
            // totalTime={recipe.recipe.totalTime}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
