import React, { useState } from "react";
import style from "./Blog.module.css";
import Axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import { useHistory } from "react-router-dom";

function Recipe(props) {
  let history = useHistory();
  let name = localStorage.getItem("user");
  if (name === null) {
    history.push({
      pathname: "/",
    });
  }
  const [newComment, addComment] = useState("");
  function commentFed(event) {
    addComment(event.target.value);
  }
  const commentPosted = (event) => {
    event.preventDefault();
    if (newComment !== "") {
      const data = {
        _id: props.unique_id,
        comment: newComment,
        name: name,
      };
      console.log(data);
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      };
      Axios.post(
        "https://gentle-ocean-34290.herokuapp.com/app/postComment",
        data,
        {
          headers: headers,
        }
      )
        .then(() => {
          addComment("");
          console.log("posting comment");
          props.updatePage(!props.updatePageStatus);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className={style.recipe}>
      <div className="my-4">
        <h1>{props.title}</h1>
      </div>
      <ol>
        {props.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ol>
      <div className="mb-3" style={{ width: "50%" }}>
        {props.showButton && (
          <div style={{ wdth: "50%" }}>
            <Dropdown drop={"down"} menualign="right">
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                style={{ background: "darkcyan", width: "100%" }}
              >
                Comments
              </Dropdown.Toggle>

              <Dropdown.Menu className="comment">
                {props.comments.map((comment) => (
                  <Dropdown.Item>
                    <div>
                      <h5 style={{ color: "purple", display: "inline" }}>
                        {comment.name}
                      </h5>
                    </div>
                    <p>{comment.comment}</p>
                  </Dropdown.Item>
                ))}

                <form onSubmit={commentPosted} style={{ textAlign: "center" }}>
                  <input
                    style={{
                      width: "90%",
                    }}
                    onChange={commentFed}
                    value={newComment}
                  ></input>
                  <button
                    type="submit"
                    style={{
                      fontWeight: "900",
                      border: "none",
                      color: "black",
                      padding: "10px 20px",
                      textAlign: "center",
                      textDecoration: "none",
                      display: "inline-block",
                      fontSize: "13px",
                      margin: "4px 2px",
                      cursor: "pointer",
                    }}
                  >
                    POST
                  </button>
                </form>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
        {!props.showButton && <h4>Score For This Recipe : {props.score}</h4>}
      </div>
    </div>
  );
}
export default Recipe;
