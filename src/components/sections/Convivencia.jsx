import '../../styles/Convivencia.css'
import { Users, CalendarCheck, Sprout, ShieldCheck } from 'lucide-react'
import imgConvivencia from '../../assets/convivencia-illustration.png'

const cards = [
  { id: 1, icon: Users, title: 'Apoyo Mutuo', description: 'Fomentamos redes de solidaridad donde cada integrante aporta y recibe acompañamiento emocional.' },
  { id: 2, icon: CalendarCheck, title: 'Actividades Grupales', description: 'Talleres, cine-foros y cenas compartidas que fortalecen el tejido comunitario y la identidad.' },
  { id: 3, icon: Sprout, title: 'Cuidado Colectivo', description: 'Responsabilidades compartidas en el mantenimiento del hogar, enseñando autonomía y colaboración.' },
  { id: 4, icon: ShieldCheck, title: 'Espacios Seguros', description: 'Círculos de palabra y mediación de conflictos liderados por profesionales especializados.' }
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