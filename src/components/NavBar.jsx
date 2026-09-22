import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  // track whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close the mobile menu whenever the route hash changes (link clicked)
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Yanis IKHENOUSSENE
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group max-lg:hidden">
          <div className="inner">
            <span>Me contacter</span>
          </div>
        </a>

        <button
          type="button"
          className="menu-toggle lg:hidden"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={`menu-toggle-bar ${menuOpen ? "open" : ""}`} />
          <span className={`menu-toggle-bar ${menuOpen ? "open" : ""}`} />
          <span className={`menu-toggle-bar ${menuOpen ? "open" : ""}`} />
        </button>
      </div>

      <nav className={`mobile ${menuOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map(({ link, name }) => (
            <li key={name}>
              <a href={link} onClick={closeMenu}>
                {name}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="mobile-contact-btn" onClick={closeMenu}>
              Me contacter
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
