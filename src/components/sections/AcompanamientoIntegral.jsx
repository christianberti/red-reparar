import '../../styles/AcompanamientoIntegral.css'
import { Brain, Scale, HandCoins, GraduationCap } from 'lucide-react'
import imgAcompanamiento from '../../assets/acompanamiento-illustration.png'

const items = [
  { id: 1, icon: Brain, title: 'Apoyo psicológico', description: 'Contamos con psicóloga y psicóloga social que acompañan a cada persona de forma individual y grupal, en articulación con el centro de salud del barrio para una atención rápida en salud mental.' },
  { id: 2, icon: Scale, title: 'Acompañamiento legal', description: 'Asesoramos y acompañamos los trámites de identidad de género y otras gestiones legales, garantizando privacidad y respeto en todo el proceso.' },
  { id: 3, icon: HandCoins, title: 'Asistencia social', description: 'Acompañamos la gestión de recursos y la búsqueda de alternativas habitacionales transitorias, en articulación con el Estado y la red de casas de acompañamiento contra las violencias de género (Entre Ríos y Córdoba).' },
  { id: 4, icon: GraduationCap, title: 'Educación y oficios', description: 'Acompañamos la continuidad o finalización de estudios primarios, secundarios y terciarios, y brindamos formación en oficios —costura, marroquinería, zapatería—. Salud y educación son los dos pilares centrales de nuestro trabajo.' }
]

function AcompanamientoIntegral() {
  return (
    <section className="acompanamiento">
      <div className="acompanamiento__container">
        <div className="acompanamiento__image">
          <img src={imgAcompanamiento} alt="Acompañamiento integral Red Reparar" />
        </div>

        <div className="acompanamiento__content">
          <h2 className="acompanamiento__title">Acompañamiento Integral</h2>
          <p className="acompanamiento__subtitle">
            No solo brindamos formación, construimos una red de cuidado que
            atiende las necesidades transversales de nuestra comunidad.
          </p>

          <div className="acompanamiento__list">
            {items.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.id} className="acompanamiento__item">
                  <Icon size={22} color="var(--color-primary)" />
                  <div>
                    <h3 className="acompanamiento__item-title">{item.title}</h3>
                    <p className="acompanamiento__item-description">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AcompanamientoIntegral