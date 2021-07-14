import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const [state, setState] = useState({
    user_email: "",
    user_password: "",
  });
  let history = useHistory();
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [color, setColor] = useState("red");
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const getRequest = (e) => {
    e.preventDefault();
    if (state.user_email === "" || state.user_password === "") {
      setMessage("Plase fill the complete form!!");
      setShowMessage(true);
      return;
    } else {
      setMessage("");
      setShowMessage(false);
      Axios.request({
        method: "GET",
        url: `https://gentle-ocean-34290.herokuapp.com/app/login`,
        params: {
          ...state,
        },
      })
        .then((response) => {
          const data = response.data.person;
          if (Object.keys(data).length !== 0) {
            localStorage.setItem("user", data._doc.fullName);
            history.push({
              pathname: "/home",
            });
          } else {
            setMessage("No account found!!");
            setColor("red");
            setShowMessage(true);
          }
        })
        .catch((err) => {
          setMessage("Error in login!!");
          setColor("red");
          setShowMessage(true);
        });
    }
  };
  return (
    <div className="card login-card mt-2 px-2 py-2 mx-auto hv-center">
      <form className="text-center">
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="user_email"
            value={state.email}
            onChange={handleChange}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            value={state.password}
            onChange={handleChange}
            id="user_password"
            placeholder="Password"
          />
        </div>
        {showMessage && <p style={{ color: color }}>{message}</p>}
        <button type="submit" onClick={getRequest} className="btn btn-dark">
          Login
        </button>
        <br />
      </form>
    </div>
  );
}
export default LoginForm;
