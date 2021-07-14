import React from "react";
import "../../App.css";
import Header from "./Header";
import LoginForm from "./LoginForm";
export default function SignUp() {
  return (
    <div className="Register col-lg-6 mt-5 mx-auto">
      <Header name="Login" />
      <LoginForm />
    </div>
  );
}
