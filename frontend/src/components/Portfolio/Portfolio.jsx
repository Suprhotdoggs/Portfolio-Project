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
            <a
              href="https://suprhotdoggs.github.io/TIC-TAC-TOE-GAME/"
              target="_blank"
            >
              <img className="tic-tac-toe" src={tictactoe} alt="tictactoe" />
              <div className="overlay"></div>
              <p className="subtitle">Have fun playing with a friend!</p>
            </a>
          </div>
          <div className="grid-item">
            <a
              href="https://suprhotdoggs.github.io/Snake-Game/"
              target="_blank"
            >
              <img src={Snake} alt="" />
              <div className="overlay"></div>
              <p className="subtitle">The most addicting Snake Game</p>
            </a>
          </div>

          <div className="grid-item">
            <a
              href="https://suprhotdoggs.github.io/Snake-Game/"
              target="_blank"
            >
              <img src={Snake} alt="" />
              <div className="overlay"></div>
              <p className="subtitle">The most addicting Snake Game</p>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
