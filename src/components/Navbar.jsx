import "../styles/Navbar.css";
import logo from "../assets/red-reparar-logo.png";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [highContrast, setHighContrast] = useState(
    () => localStorage.getItem("highContrast") === "true",
  );
  useEffect(() => {
    document.body.classList.toggle("high-contrast", highContrast);
    localStorage.setItem("highContrast", highContrast);
  }, [highContrast]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleContrastToggle = () => {
    setHighContrast((prev) => !prev);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" className="navbar__logo">
          <img src={logo} alt="Logo Red Reparar" />
          RED REPARAR
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={28} aria-hidden="true" />
          ) : (
            <Menu size={28} aria-hidden="true" />
          )}
        </button>

        <div className={`navbar__menu ${isOpen ? "navbar__menu--open" : ""}`}>
          <ul className="navbar__links">
            <li>
              <a href="#" className="inicio" onClick={handleLinkClick}>
                INICIO
              </a>
            </li>
            <li>
              <a href="#servicios" onClick={handleLinkClick}>
                SERVICIOS
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={handleLinkClick}>
                CONTACTO{" "}
              </a>
            </li>
          </ul>
          <button
            className="navbar__contrast-toggle"
            onClick={handleContrastToggle}
            aria-pressed={highContrast}
          >
            Alto contraste
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
