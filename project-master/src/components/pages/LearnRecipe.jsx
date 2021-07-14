import React from "react";
import App from "./App.jsx";
import "../../App.css";
import { useHistory } from "react-router-dom";
function LearnRecipe() {
  let history = useHistory();
  if (localStorage.getItem("user") === null) {
    history.push({
      pathname: "/",
    });
  }
  return <App />;
}

export default LearnRecipe;
