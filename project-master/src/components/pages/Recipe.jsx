import React from "react";
import style from "./recipe.module.css";
function Recipe(props) {
  return (
    <div className={style.recipe}>
      <div className="mt-4">
        <h2>{props.title}</h2>
      </div>
      <div style={{ margin: "20px" }}>
        <ul>
          {props.ingredients.map((ingredient) => (
            <li style={{ fontSize: "20px" }}>{ingredient.text}</li>
          ))}
        </ul>
      </div>
      <p>Calories : {props.calories}</p>
      <img src={props.img} className={style.image} alt="recipe" />
    </div>
  );
}
export default Recipe;
