import React, { useEffect } from "react";
import "./Home.css";
import meImage from "../../assets/me.png";
import logoImage from "../../assets/logo.png";
import linkedin from "../../assets/linkedin.png";
import Instagram from "../../assets/insta.png";
import twitch from "../../assets/twitch.png";
import youtube from "../../assets/youtube.png";

export default function Home() {
  useEffect(() => {
    const typewriter = document.querySelector(".typewriter h1");

    setTimeout(() => {
      typewriter.classList.add("typing-done");
    }, 5500);
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <div className="typewriter">
            <h1>Welcome to My Website!</h1>
          </div>
          <p>I am passionate about innovation and creativity.</p>
          <div className="social-logos">
            <a
              href="https://www.linkedin.com/in/moshe-jacobs-789883338/"
              target="_blank"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a href="https://www.instagram.com/moshejacobs_/" target="_blank">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://www.twitch.tv/suprhotdoggs" target="_blank">
              <img src={twitch} alt="Twitch" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCnXwJF-2RdeHMRNh03XOwMg?sub_confirmation=1"
              target="_blank"
            >
              <img src={youtube} alt="Youtube" />
            </a>
          </div>
          <a href="#about" className="cta-btn">
            Learn More
          </a>
        </div>
      </div>
    </>
  );
}
