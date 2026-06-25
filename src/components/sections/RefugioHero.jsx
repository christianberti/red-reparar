import '../../styles/RefugioHero.css'
import { Home, CheckCircle2 } from 'lucide-react'
import imgRefugio from '../../assets/refugio-illustration.png'

const checklist = [
  'Apoyo psicológico individual y grupal',
  'Alojamiento de tránsito y centro de noche',
  'Vinculación con estudios primarios, secundarios y terciarios',
  'Acompañamiento legal y trámites de identidad'
]

function RefugioHero() {
  return (
    <section id="refugio-hero" className="refugio-hero">
      <div className="refugio-hero__container">
        <div className="refugio-hero__card">
          <div className="refugio-hero__icon-title">
            <Home size={24} color="var(--color-primary)" />
            <h2 className="refugio-hero__title">Refugio</h2>
          </div>

          <p className="refugio-hero__text">
            Ofrecemos alojamiento seguro y digno como centro de noche o tránsito
            diario, según la situación, junto con acompañamiento psicológico,
            legal y social, para mujeres trans en situación de calle, víctimas
            de violencia de género o intrafamiliar.
          </p>
          <p className="refugio-hero__text">
            Trabajamos junto al centro de atención primaria para la atención en
            salud mental y clínica. Garantizamos privacidad, calidez y un
            entorno libre de discriminación y violencia.
          </p>

          <ul className="refugio-hero__checklist">
            {checklist.map((item) => (
              <li key={item} className="refugio-hero__checklist-item">
                <CheckCircle2 size={18} color="var(--color-nav-link)" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="refugio-hero__image">
          <img src={imgRefugio} alt="Ilustración Casa Refugio Red Reparar" />
        </div>
      </div>
    </section>
  )
}

export default RefugioHero