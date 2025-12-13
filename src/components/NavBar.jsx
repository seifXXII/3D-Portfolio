import { useState } from "react";
import { navLinks } from "../constants/index.js";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }

  const handleNavClick = (e, link) => {
    e.preventDefault();
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="inner">
        <a
          href="#hero"
          className="logo"
          onClick={(e) => handleNavClick(e, "#hero")}
        >
          Seif El-Den
        </a>

        <nav className="desktop" aria-label="Desktop navigation">
          <ul>
            <li>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "#about")}
                className="group"
              >
                <span>About</span>
                <div className="underline"></div>
              </a>
            </li>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.link}
                  onClick={(e) => handleNavClick(e, link.link)}
                  className="group"
                >
                  <span>{link.name}</span>
                  <div className="underline"></div>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="contact-btn group"
        >
          <div className="inner">
            <span>Contact</span>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
