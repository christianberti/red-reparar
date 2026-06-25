import '../../styles/Convivencia.css'
import { Users, HeartHandshake, Stethoscope, GraduationCap } from 'lucide-react'
import imgConvivencia from '../../assets/convivencia-illustration.png'

const cards = [
  { id: 1, icon: Users, title: 'Vida en Comunidad', description: 'Las chicas conviven bajo el mismo techo las 24 horas, compartiendo la vivienda de manera comunitaria, como una verdadera familia.' },
  { id: 2, icon: HeartHandshake, title: 'Contención desde el Amor', description: 'Nuestro trabajo se sostiene desde el amor, la contención y un fuerte compromiso social, antes que desde el asistencialismo.' },
  { id: 3, icon: Stethoscope, title: 'Acompañamiento Profesional', description: 'Contamos con psicóloga y psicóloga social, en articulación directa con el centro de salud del barrio para la atención en salud mental y clínica.' },
  { id: 4, icon: GraduationCap, title: 'Vinculación Educativa', description: 'Acompañamos a cada chica a comenzar, retomar o terminar sus estudios —primarios, secundarios o terciarios— como parte del camino hacia su autonomía.' }
]

function Convivencia() {
  return (
    <section className="convivencia">
      <div className="convivencia__container">
        <h2 className="convivencia__title">Convivencia: Más que un Techo, una Familia</h2>

        <div className="convivencia__content">
          <div className="convivencia__image">
            <img src={imgConvivencia} alt="Convivencia en Casa Refugio" />
          </div>

          <div className="convivencia__grid">
            {cards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.id} className="convivencia__card">
                  <Icon size={26} color="var(--color-accent)" />
                  <h3 className="convivencia__card-title">{card.title}</h3>
                  <p className="convivencia__card-description">{card.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Convivencia