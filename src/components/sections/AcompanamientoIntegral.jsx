import '../../styles/AcompanamientoIntegral.css'
import imgAcompanamiento from '../../assets/acompanamiento-illustration.png'

const items = [
  { id: 1, title: 'Apoyo psicológico', description: 'Contamos con psicóloga y psicóloga social que acompañan a cada persona, en articulación con el centro de salud del barrio para una atención rápida en salud mental.' },
  { id: 2, title: 'Atención en salud', description: 'Trabajamos mancomunadamente con el centro de atención primaria (CAPS) de nuestro barrio para garantizar atención rápida tanto en salud clínica como en salud mental.' },
  { id: 3, title: 'Asistencia social', description: 'Gestionamos recursos a través de convocatorias y programas como Autonomía para la Igualdad, y formamos parte de la red de casas de acompañamiento contra las violencias de género junto a las provincias de Entre Ríos y Córdoba.' },
  { id: 4, title: 'Educación y oficios', description: 'Acompañamos la continuidad o finalización de estudios primarios, secundarios y terciarios, y brindamos formación en oficios —costura, marroquinería, zapatería—. Salud y educación son los dos pilares centrales de nuestro trabajo.' }
]

function AcompanamientoIntegral() {
  return (
    <section id="acompanamiento-integral" className="acompanamiento">
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
            {items.map((item) => (
              <div key={item.id} className="acompanamiento__item">
                <div>
                  <h3 className="acompanamiento__item-title">{item.title}</h3>
                  <p className="acompanamiento__item-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AcompanamientoIntegral