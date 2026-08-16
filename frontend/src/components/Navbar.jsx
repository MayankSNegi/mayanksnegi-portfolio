import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import siteConfig from "../data/siteConfig";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Achievements", to: "/achievements" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <nav className="container navbar__inner" aria-label="Primary">
        <NavLink to="/" className="navbar__brand" onClick={closeMenu}>
          MAYANK SINGH NEGI
        </NavLink>

        <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "navbar__link--active" : ""}`
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="navbar__resume-mobile">
            <a
              href={siteConfig.resumeUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__resume"
              onClick={closeMenu}
            >
              Resume <ArrowUpRight size={16} />
            </a>
          </li>
        </ul>

        <div className="navbar__actions">
          <a
            href={siteConfig.resumeUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__resume navbar__resume--desktop"
          >
            Resume <ArrowUpRight size={16} />
          </a>
          <ThemeToggle />
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
