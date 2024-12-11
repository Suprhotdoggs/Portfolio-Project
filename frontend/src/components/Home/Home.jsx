import React, { useEffect } from "react";
import "./Home.css";
import meImage from "../../assets/me.png";
import logoImage from "../../assets/logo.png";
import linkedin from "../../assets/linkedin.png";

export default function Home() {
  useEffect(() => {
    const typewriter = document.querySelector(".typewriter h1");

    // Total duration = 3.5s (typing) + 2s (delay)
    setTimeout(() => {
      typewriter.classList.add("typing-done");
    }, 5500); // 3500ms for typing + 2000ms delay
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
            <img src="" alt="Linkedin" />
            <img src="" alt="Instagram" />
            <img src="" alt="Twitch" />
            <img src="" alt="Youtube" />
          </div>
          <a href="#features" className="cta-btn">
            Learn More
          </a>
        </div>
      </div>
    </>
  );
}
