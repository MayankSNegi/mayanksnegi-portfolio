import { Github, Linkedin, Mail } from "lucide-react";
import siteConfig from "../data/siteConfig";
import "./SocialLinks.css";

export default function SocialLinks({ size = 20 }) {
  return (
    <ul className="social-links" aria-label="Social links">
      <li>
        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="social-links__item"
        >
          <Github size={size} strokeWidth={1.8} />
        </a>
      </li>

      <li>
        <a
          href={siteConfig.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="social-links__item"
        >
          <Linkedin size={size} strokeWidth={1.8} />
        </a>
      </li>

      {siteConfig.contactEmail && (
        <li>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.contactEmail}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send an email"
            className="social-links__item"
          >
            <Mail size={size} strokeWidth={1.8} />
          </a>
        </li>
      )}
    </ul>
  );
}