/* import { MapPin, Mail, Clock, Share2 } from 'lucide-react' */
import { MapPin, Mail, Clock } from "lucide-react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__col">
          <h3 className="footer__brand">Red Reparar</h3>
          <p className="footer__description">
            Asociación Civil para el acompañamiento de mujeres trans y travestis
            en Rosario. Construyendo un futuro sin brechas.
          </p>
          <div className="footer__socials">
            <a
              href="https://www.instagram.com/casarefugiotrans/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Red Reparar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">LINKS RÁPIDOS</h4>
          <ul className="footer__links">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">DATOS DE CONTACTO</h4>
          <ul className="footer__contact">
            <li>
              <MapPin size={16} />
              <span>Rosario, Argentina</span>
            </li>
            <li>
              <Mail size={16} />
              <span>redrepararid@gmail.com</span>
            </li>
            <li>
              <Clock size={16} />
              <span>
                Lunes a Viernes <br /> 09:00 - 18:00
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Red Reparar · Casa Refugio Trans</p>
      </div>
    </footer>
  );
};

export default Footer;
