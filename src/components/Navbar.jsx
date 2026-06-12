import '../styles/Navbar.css'
import logo from '../assets/red-reparar-logo.png'

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" className="navbar__logo">
          <img src={logo} alt="Logo Red Reparar" />
          RED REPARAR
        </a>
        <div className="navbar__menu">
          <ul className="navbar__links">
            <li><a href="#" className='inicio'>INICIO</a></li>
            <li><a href="#nosotros">NOSOTROS</a></li>
            <li><a href="#servicios">SERVICIOS</a></li>
            <li><a href="#contacto">CONTACTO  </a></li>
          </ul>
          <button className="navbar__donate-button">
            DONAR
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar