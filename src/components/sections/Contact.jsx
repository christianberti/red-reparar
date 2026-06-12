import '../../styles/Contact.css'
import { MapPin, Mail, Phone } from 'lucide-react'

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('¡Gracias por contactarnos! Pronto nos pondremos en contacto contigo.')
  }

  return (
    <section id="contacto" className="contact">
      <div className="contact__container">

        <div className="contact__info">
          <h2 className="contact__title">Contactanos</h2>
          <p className="contact__subtitle">
            ¿Tenés dudas, querés sumarte como voluntario o necesitás asistencia?
            Nuestro equipo está para escucharte.
          </p>

          <ul className="contact__details">
            <li className="contact__detail">
              <span className="contact__detail-icon"><MapPin size={20} color="var(--color-primary)" /></span>
              <div>
                <strong>Dirección</strong>
                <p>Rosario, Santa Fe, Argentina</p>
              </div>
            </li>
            <li className="contact__detail">
              <span className="contact__detail-icon"><Mail size={20} color="var(--color-primary)" /></span>
              <div>
                <strong>Correo</strong>
                <p>contacto@redreparar.org</p>
              </div>
            </li>
            <li className="contact__detail">
              <span className="contact__detail-icon"><Phone size={20} color="var(--color-primary)" /></span>
              <div>
                <strong>WhatsApp</strong>
                <p>+54 341 000-0000</p>
              </div>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="nombre">NOMBRE COMPLETO</label>
            <input type="text" id="nombre" placeholder="Tu nombre" />
          </div>
          <div className="contact__field">
            <label htmlFor="email">CORREO ELECTRÓNICO</label>
            <input type="email" id="email" placeholder="email@ejemplo.com" />
          </div>
          <div className="contact__field">
            <label htmlFor="mensaje">MENSAJE</label>
            <textarea id="mensaje" placeholder="¿Cómo podemos ayudarte?" rows={5} />
          </div>
          <button type="submit" className="contact__button">Enviar Mensaje</button>
        </form>

      </div>
    </section>
  )
}

export default Contact