import '../../styles/Hero.css'

const Hero = ({ onConocenos }) => {
  return (
    <section id="inicio" className="hero">
      <div className="hero__container">
        <h1 className="hero__title">
          Casa Refugio para Mujeres Trans y Travestis en Rosario
        </h1>
        <p className="hero__subtitle">
          La única casa de protección trans y travesti de la República Argentina,
          construida desde el amor.
        </p>
        <button className="hero__cta" onClick={onConocenos}>
          Conocé nuestra labor
        </button>
      </div>
    </section>
  )
}

export default Hero