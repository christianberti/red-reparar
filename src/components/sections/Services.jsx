import '../../styles/Services.css'
import { Home, BookText, HeartHandshake } from 'lucide-react'

const services = [
  {
    id: 1,
    icon: Home,
    title: 'Casa Refugio',
    description: 'Un hogar temporal seguro y digno para personas de la comunidad en situación de vulnerabilidad o desamparo.',
    link: '#',
    linkText: 'Ver detalles'
  },
  {
    id: 2,
    icon: BookText,
    title: 'Cursos de Oficio',
    description: 'Formación en costura, zapatería, moldería, gastronomía y mucho más.',
    link: '#',
    linkText: 'Ver cursos'
  },
  {
    id: 3,
    icon: HeartHandshake,
    title: 'Acompañamiento',
    description: 'Asistencia legal, psicológica y social personalizada para garantizar el pleno ejercicio de tus derechos.',
    link: '#',
    linkText: 'Solicitar turno'
  }
]

function Services() {
  return (
    <section id="servicios" className="services">
      <div className="services__container">

        <div className="services__header">
          <h2 className="services__title">Programas de capacitación</h2>
          <p className="services__subtitle">
            Diseñamos trayectos integrales que abarcan desde alfabetización
            hasta el desarrollo profesional.
          </p>
        </div>

        <div className="services__grid">
          {services.map(service => {
            const Icon = service.icon;
            return (
            <div key={service.id} className="services__card">
              <Icon size={28} color="var(--color-primary)" />
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-description">{service.description}</p>
              <a href={service.link} className="services__card-link">
                {service.linkText} →
              </a>
            </div>
            )})}
        </div>

      </div>
    </section>
  )
}

export default Services