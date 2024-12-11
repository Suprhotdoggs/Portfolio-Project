import React from "react";
import "./Footer.css";
import logoImage2 from "../../assets/logo2.png";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <img className="logo" src={logoImage2} alt="MJ-Logo" />
        <p>
          © 2024 <span className="name">Moshe Jacobs</span>. All rights
          reserved.
        </p>
        <div className="social-links">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
