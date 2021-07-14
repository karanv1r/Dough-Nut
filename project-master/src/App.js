import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blogs from "./components/pages/Blogs";
import LikedRecipes from "./components/pages/LikedRecipes";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import LearnRecipe from "./components/pages/LearnRecipe.jsx";
import PostRecipe from "./components/pages/PostRecipe.jsx";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/learn-recipe" component={LearnRecipe} />
          <Route path="/post-recipe" component={PostRecipe} />
          <Route path="/liked-recipes" component={LikedRecipes} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
