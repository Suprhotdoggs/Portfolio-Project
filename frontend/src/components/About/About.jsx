import React from "react";
import aboutMe from "../../assets/about-me.jpeg";
import "./About.css";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="about-page">
          <h1 className="main-title">About Me</h1>
          <div className="content-container">
            {/* Personal Info Section */}
            <div className="personal-info">
              <h2 className="section-title">My Goal</h2>
              <p className="info-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                debitis nostrum dicta ab eos, repellendus ut quod ipsam hic
                voluptatem! Facilis ipsam saepe reprehenderit debitis quas
                animi, fugiat minus repellat quam architecto optio repellendus
                in natus eos magnam placeat odit, inventore fuga facere? Nostrum
                nesciunt qui reprehenderit perferendis, deserunt minus?
              </p>
            </div>

            {/* Image Section */}
            <div className="image-container">
              <img src={aboutMe} alt="Profile" className="profile-image" />
            </div>

            {/* Experience Section */}
            <div className="experience">
              <h2 className="section-title">Personal Info</h2>
              <div className="experience-item">
                <h3>Secondary</h3>
                <p className="date">10.2020 - Present</p>
                <p className="organization">The Anne & Max Tanenbaum CHAT</p>
                <p className="description">
                  An incubator for students to explore innovative topics with
                  like-minded people.
                </p>
              </div>
              <div className="experience-item">
                <h3>Post Secondary</h3>
                <p className="date">09.2025 - 2030</p>
                <p className="organization">
                  University of Waterloo & Wilfrid Laurier
                </p>
                <p className="description">
                  The Waterloo Mathematics and Laurier BBA double degree blends
                  analytical rigor with business strategy for leadership
                  excellence.
                </p>
              </div>
              <button className="linkedin-button">
                <a
                  href="https://www.linkedin.com/in/moshe-jacobs-789883338/"
                  target="_blank"
                >
                  Connect on LinkedIn
                </a>
              </button>
            </div>
          </div>
        </div>
        <hr />

        {/* 3 bubbles section */}

        <section id="features" className="features">
          <div className="feature-item">
            <i className="fas fa-lightbulb"></i>
            <h3>Developer</h3>
            <p className="description-subtext">
              I’ve always been fascinated by technology and problem-solving,
              which led me to explore software development. As an aspiring
              developer, I’m eager to refine my skills, build innovative
              solutions, and tackle new challenges that push the boundaries of
              creativity and functionality.
            </p>
          </div>
          <div className="feature-item">
            <i className="fas fa-code"></i>
            <h3>Content Creator</h3>
            <p className="description-subtext">
              During COVID, I turned to my interest in chess and launched a
              Twitch channel in November 2021, gaining 5.5K followers. Along the
              way, I signed with Chess.com, achieved millions of TikTok views,
              and connected with top streamers like Pokimane and GM Hikaru.{" "}
              <a
                target="_blank"
                style={{ color: "red" }}
                href="https://thecjn.ca/arts-culture/michael-jacobs-is-a-toronto-chess-kid-streamer-taking-on-challengers-online/"
              >
                Read More
              </a>
            </p>
          </div>
          <div className="feature-item">
            <i className="fas fa-users"></i>
            <h3>Chess Player</h3>
            <p className="description-subtext">
              I discovered chess at six and was instantly captivated. Over the
              years, I’ve competed in national events, became the youngest club
              champion locally, placed second provincially for my age, and tied
              for fifth nationally. These experiences continue to inspire my
              interest in the game.
            </p>
          </div>
        </section>
      </section>
    </>
  );
}
