import React from "react";
import style from "./recipe.module.css"

const Recipe = (props) => {
    return (
        <div className={style.recipeContainer}>
        <h1>{props.title}</h1>
        <ul className={style.recipeList}>
            {props.ingredients.map(ingredient => (
                <li>{ingredient}</li>
            ))}
        </ul>
        <p>Total calories: {Math.floor(props.calories)}</p>
        <div>
        <a className={style.link} target="_blank" href={props.link}>Click here to view the full recipe!</a>
        <img className={style.image} alt="" src={props.image}/>
        </div>
        
        </div>
    );
}

export default Recipe;