import { useRef, useState } from "react";
import "../../styles/Contact.css";
import { MapPin, Mail, Phone } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xykrveod";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(formRef.current),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        formRef.current.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

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
              <span className="contact__detail-icon">
                <MapPin size={20} color="var(--color-primary)" />
              </span>
              <div>
                <strong>Dirección</strong>
                <p>Rosario, Santa Fe, Argentina</p>
              </div>
            </li>
            <li className="contact__detail">
              <span className="contact__detail-icon">
                <Mail size={20} color="var(--color-primary)" />
              </span>
              <div>
                <strong>Correo</strong>
                <p>redrepararid@gmail.com</p>
              </div>
            </li>
            <li className="contact__detail">
              <span className="contact__detail-icon">
                <Phone size={20} color="var(--color-primary)" />
              </span>
              <div>
                <strong>WhatsApp</strong>
                <p>+54 341 500 4542</p>
              </div>
            </li>
          </ul>
        </div>

        <form ref={formRef} className="contact__form" onSubmit={handleSubmit}>
          <p className="contact__form-note">
            Los campos marcados con * son obligatorios.
          </p>
          <div className="contact__field">
            <label htmlFor="nombre">
              NOMBRE COMPLETO{" "}
              <span className="contact__required" aria-hidden="true">
                *
              </span>
            </label>
            <input
              type="text"
              id="nombre"
              name="name"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className="contact__field">
            <label htmlFor="email">
              CORREO ELECTRÓNICO{" "}
              <span className="contact__required" aria-hidden="true">
                *
              </span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@ejemplo.com"
              required
            />
          </div>
          <div className="contact__field">
            <label htmlFor="mensaje">
              MENSAJE{" "}
              <span className="contact__required" aria-hidden="true">
                *
              </span>
            </label>
            <textarea
              id="mensaje"
              name="message"
              placeholder="¿Cómo podemos ayudarte?"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="contact__button"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
          </button>

          {status === "success" && (
            <p
              role="status"
              className="contact__form-message contact__form-message--success"
            >
              ¡Gracias por contactarnos! Pronto nos pondremos en contacto
              contigo.
            </p>
          )}
          {status === "error" && (
            <p
              role="alert"
              className="contact__form-message contact__form-message--error"
            >
              Hubo un problema al enviar el mensaje. Por favor intentá de nuevo.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
