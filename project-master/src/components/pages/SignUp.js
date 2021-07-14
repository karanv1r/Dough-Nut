import React from "react";
import "../../App.css";
import Header from "./Header";
import RegistrationForm from "./RegisterationForm";
export default function SignUp() {
  return (
    <div className="Register col-lg-6 mt-5 mx-auto">
      <Header name="Register" />
      <RegistrationForm />
    </div>
  );
}
