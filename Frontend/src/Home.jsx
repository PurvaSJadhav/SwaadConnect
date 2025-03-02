import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="title">
        Welcome to <strong>SwaadConnect</strong>
        <Link to="/explore">
          <button className="btn btn-custom">Explore Recipes</button>
        </Link>
      </div>
    </div>
  );
}
