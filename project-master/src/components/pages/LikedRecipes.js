import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import Blog from "./Blog";
import "../../App.css";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar";
//////css for blog elements

function LikedRecipes() {
  let history = useHistory();
  if (localStorage.getItem("user") === null) {
    history.push({
      pathname: "/",
    });
  }
  var [blogs, setBlogs] = useState([]);
  var [blogsPresent, setBlogsPresent] = useState(false);
  var [updateBlogs, setUpdateBlogs] = useState(false);

  useEffect(() => {
    console.log("updating", updateBlogs);
    Axios.request({
      method: "GET",
      url: `https://gentle-ocean-34290.herokuapp.com/app/getRecipe`,
    })
      .then((response) => {
        console.log(response.data);
        setBlogs(response.data);
        setBlogsPresent(true);
      })
      .catch((err) => {});
  }, [updateBlogs]);

  return (
    <div
      className="blogs"
      style={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
      }}
    >
      <Navbar />
      <h1 className="my-4">Review Corner</h1>
      <div className="recipeClass">
        {blogsPresent &&
          blogs.map((recipe) => (
            <Blog
              key={recipe._id}
              title={recipe.recipeName}
              ingredients={recipe.steps}
              unique_id={recipe._id}
              score={recipe.score}
              updatePage={setUpdateBlogs}
              updatePageStatus={updateBlogs}
              comments={recipe.comments}
              showButton={false}
            />
          ))}
      </div>
    </div>
  );
}

export default LikedRecipes;
