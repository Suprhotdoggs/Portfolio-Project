import "./Home.css";
import meImage from "../../assets/me.png";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <img src="" alt="Image of me" />
          <h1>Welcome to My Website</h1>
          <p>I am passionate about innovation and creativity.</p>
          <a href="#features" className="cta-btn">
            Learn More
          </a>
        </div>
      </div>

      <section id="features" className="features">
        <div className="feature-item">
          <i className="fas fa-lightbulb"></i>
          <h3>Innovation</h3>
          <p>Discover ideas that spark change and inspire progress.</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-code"></i>
          <h3>Technology</h3>
          <p>Embrace cutting-edge tools to build a brighter future.</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-users"></i>
          <h3>Community</h3>
          <p>Connect with like-minded individuals and grow together.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 My Website. All rights reserved.</p>
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
    </>
  );
}
