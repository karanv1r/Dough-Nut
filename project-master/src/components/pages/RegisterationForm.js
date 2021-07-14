import React, { useState } from "react";
import Axios from "axios";
function RegistrationForm(props) {
  const [state, setState] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
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
  const postRequest = (e) => {
    e.preventDefault();
    if (
      state.email === "" ||
      state.password === "" ||
      state.confirmPassword === "" ||
      state.fullName === ""
    ) {
      setMessage("Plase fill the complete form!!");
      setShowMessage(true);
      return;
    } else if (state.confirmPassword !== state.password) {
      setMessage("Confirm Password does not match with Password");
      setShowMessage(true);
      return;
    } else {
      setMessage("");
      setShowMessage(false);
      const registered = state;
      Axios.post(
        "https://gentle-ocean-34290.herokuapp.com/app/signup",
        registered
      )
        .then((response) => {
          console.log(response.data);
          setMessage("Account created Successfully!!");
          setColor("green");
          setShowMessage(true);
          return;
        })
        .catch((err) => {
          setMessage("Error in creating account!!");
          setColor("red");
          setShowMessage(true);
        });
    }
  };
  return (
    <div className="card login-card mt-2 px-2 py-2 mx-auto hv-center">
      <form className="text-center">
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            value={state.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={state.email}
            onChange={handleChange}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={state.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={state.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
        </div>
        {showMessage && <p style={{ color: color }}>{message}</p>}
        <button type="submit" className="btn btn-dark" onClick={postRequest}>
          Register
        </button>
        <br />
        <a href="/login">Already Registered?</a>
      </form>
    </div>
  );
}
export default RegistrationForm;
