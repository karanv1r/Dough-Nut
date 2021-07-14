import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import Blog from "./Blog";
import "../../App.css";
import Navbar from "../Navbar";
import { useHistory } from "react-router-dom";
//////css for blog elements

function Blogs() {
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
    Axios.request({
      method: "GET",
      url: `https://gentle-ocean-34290.herokuapp.com/app/getRecipe`,
    })
      .then((response) => {
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
      <h1 className="my-4">Blogs</h1>
      <div className="recipeClass">
        {blogsPresent &&
          blogs.map((recipe) => (
            <Blog
              key={recipe._id}
              title={recipe.recipeName}
              ingredients={recipe.steps}
              unique_id={recipe._id}
              updatePage={setUpdateBlogs}
              updatePageStatus={updateBlogs}
              comments={recipe.comments}
              showButton={true}
            />
          ))}
      </div>
    </div>
  );
}

export default Blogs;
