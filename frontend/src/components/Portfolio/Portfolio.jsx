import React from "react";
import "./Portfolio.css";
import tictactoe from "../../assets/tic-tac-toe.png";
import Snake from "../../assets/Snake.jpg";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="portfolio-page">
        {/* Header Section */}
        <header>
          <h1 className="portfolio-title">My Work</h1>
          <p className="portfolio-subtitle">A showcase of my projects</p>
        </header>

        {/* Navigation Tabs  */}
        <nav className="portfolio-tabs">
          <div className="portfolio-tab active">Projects</div>
        </nav>

        <section className="portfolio-grid">
          <div className="grid-item">
            <img src={tictactoe} alt="tictactoe" />
            <div className="overlay"></div>
          </div>
          <div className="grid-item">
            <img src={Snake} alt="" />
            <div className="overlay"></div>
          </div>
        </section>
      </div>
    </section>
  );
}
