import React from "react";
import style from "./recipe.module.css"

const Recipe = (props) => {
    return (
        <div className={style.recipeContainer}>
        <h1>{props.title}</h1>
        <ul>
            {props.ingredients.map(ingredient => (
                <li>{ingredient}</li>
            ))}
        </ul>
        <p>calories: {Math.floor(props.calories)}</p>
        <img className={style.image} alt="" src={props.image}/>
        </div>
    );
}

export default Recipe;