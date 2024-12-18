import React from "react";
import "./Portfolio.css";
import tictactoe from "../../assets/tic-tac-toe.png";
import Snake from "../../assets/Snake.jpg";
import AiChatBot from "../../assets/ai-chatbot.png";

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
              <div className="overlay">A simple but fun Tic-Tac-Toe game!</div>
              <p className="subtitle">Have fun playing with a friend!</p>
            </a>
          </div>
          <div className="grid-item">
            <a
              href="https://suprhotdoggs.github.io/Snake-Game/"
              target="_blank"
            >
              <img src={Snake} alt="" />
              <div className="overlay">
                The most addicting snake game. Its 10x faster than the google
                one
              </div>
            </a>
          </div>

          <div className="grid-item">
            <div className="Ai-Chat-Bot">
              <img src={AiChatBot} alt="Ai Chat Bot" />
            </div>
            <div className="overlay">The "Mo Bot" is coming soon!</div>
          </div>
        </section>
      </div>
    </section>
  );
}
