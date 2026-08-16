import SocialLinks from "./SocialLinks";
import siteConfig from "../data/siteConfig";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{siteConfig.name}</p>
          <p className="footer__tagline">Computer Science Engineering</p>
          <p className="footer__tagline">AI • Backend • Software Development</p>
        </div>

        <SocialLinks size={18} />
      </div>

      <div className="container footer__bottom">
        <p>© {year} {siteConfig.name}</p>
        <p className="footer__built-with">Built with ❤️</p>
      </div>
    </footer>
  );
}
