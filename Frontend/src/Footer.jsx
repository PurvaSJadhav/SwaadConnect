import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="f-info">

      <div className="f-info-brand">
        <strong>SwaadConnect Pvt. Ltd. &copy; 2025</strong>
      </div>

      <div className="f-info-socials">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-linkedin"></i>
        <div className="f-info-links">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>

      <div className="f-info-created">
        <span>Created by <span className="creator-name">Purva Jadhav</span></span>
      </div>

    </div>
  );
}

export default Footer;
