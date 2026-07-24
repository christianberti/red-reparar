import "../../styles/Hero.css";

const Hero = ({ onConocenos }) => {
  return (
    <section id="inicio" className="hero">
      <div className="hero__container">
        <h1 className="hero__title">
          Asociación Civil, Inclusiva y Diversa "RED&nbsp;REPARAR"
        </h1>
        <p className="hero__subtitle">Casa Refugio para Mujeres Trans</p>
        <button className="hero__cta" onClick={onConocenos}>
          Conocé nuestra labor
        </button>
      </div>
    </section>
  );
};

export default Hero;
