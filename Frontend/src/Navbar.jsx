import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
            <i class="fa-solid fa-martini-glass-citrus"></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <strong>SwaadConnect</strong>
          </div>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-link active" to="/explore">
              Explore
            </Link>
            <Link className="nav-link active" to="/login">
              Login
            </Link>
            <Link className="nav-link active" to="/signup">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
