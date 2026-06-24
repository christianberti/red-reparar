/* import { MapPin, Mail, Clock, Share2 } from 'lucide-react' */
import { MapPin, Mail, Clock } from 'lucide-react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__col">
          <h3 className="footer__brand">Red Reparar</h3>
          <p className="footer__description">
            Fundación para el Empoderamiento y la Dignidad de la comunidad LGBTQ+
            en Rosario. Construyendo un futuro sin brechas.
          </p>
        </div>


        <div className="footer__col">
          <h4 className="footer__col-title">LINKS RÁPIDOS</h4>
          <ul className="footer__links">
            <li><a href="#">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#institucional">Institucional</a></li>
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
              <span>info@redreparar.org.ar</span>
            </li>
            <li>
              <Clock size={16} />
              <span>Lunes a Viernes <br/> 09:00 - 18:00</span>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">BOLETÍN INFORMATIVO</h4>
          <p className="footer__newsletter-text">Recibí nuestras novedades y convocatorias.</p>
          <div className="footer__newsletter">
            <input type="email" placeholder="Tu email" />
            <button type="button" aria-label="Suscribirse">→</button>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        <p>© 2026 Red Reparar · Casa Refugio Trans</p>
        <div className="footer__legal">
          <a href="#">Aviso Legal</a>
          <a href="#">Privacidad</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer