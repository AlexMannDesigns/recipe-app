import React, {useEffect, useState} from "react";
import Recipe from "./Recipe.jsx";
import '../App.css';
import config from "../config.js";

const App = () => {
  //secure these before posting live
  const APP_ID = config.ID;
  const APP_KEY = config.KEY;	
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }
 
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();

    setRecipes(data.hits);
    console.log(data.hits);
    
  }

  const getSearch = (e) => {
    e.preventDefault();
    
    if (search.length === 0 || !search.trim()) {
      return
    }

    setQuery(search);
    setSearch("")
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
      <h1>Nom Nom Nom...</h1>
      <div>
        <input className="search-bar" type="text" onChange={updateSearch} value={search} placeholder="Search for a recipe..." />
        <button className="search-button" type="submit">Search</button>
      </div>
      </form>
      <div className="main">
      {recipes.map((recipe, idx) => (
        <Recipe
        key={idx}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredientLines}
        link={recipe.recipe.url}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
