import React from "react";
import "../App.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";
function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/Pexels.mp4" autoPlay loop muted />
      <h1>Grab the Fork & Knife</h1>
      <p>Let's Add More taste today </p>
      <div className="hero-btns">
        <Link to="/learn-recipe">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Learn Recipe
          </Button>
        </Link>
        <Link to="/post-recipe">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Post Recipe
            <i className="far fa-play-cirlce" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
