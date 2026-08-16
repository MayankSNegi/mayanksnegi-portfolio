import { ArrowRight, Github, Linkedin } from "lucide-react";
import Button from "./Button";
import siteConfig from "../data/siteConfig";
import "./Hero.css";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero__grid">
        <div className="hero__content reveal">
          <p className="eyebrow">// portfolio</p>
          <h1>{siteConfig.name}</h1>
          <p className="hero__headline">{siteConfig.headline}</p>
          <p className="hero__intro">
            I am a Computer Science Engineering student focused on building practical
            software solutions, backend systems, and AI-powered applications.
          </p>

          <div className="hero__ctas">
            <Button to="/projects" variant="primary">
              View Projects <ArrowRight size={16} />
            </Button>
            <Button to="/contact" variant="secondary">
              Contact Me
            </Button>
          </div>

          <div className="hero__socials">
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
            >
              <Github size={17} strokeWidth={1.8} /> GitHub
            </a>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
            >
              <Linkedin size={17} strokeWidth={1.8} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="hero__photo-wrap reveal">
          <div className="hero__photo-frame">
            <img src={profileImg} alt={siteConfig.name} />
            <div className="hero__photo-placeholder" role="img" aria-label="Profile photo placeholder">
              <span>Add photo at</span>
              <code>src/assets/profile.jpg</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
