import '../../styles/About.css'
import imgAbout from '../../assets/img1.png'

function About() {
  return (
    <section id="nosotros" className="about">
      <div className="about__container">

        <div className="about__image">
          <img src={imgAbout} alt="Fundación Reparar" />
        </div>

        <div className="about__content">
          <h2 className="about__title">Nuestra Misión</h2>
          <p className="about__text">
            En Red Reparar trabajamos incansablemente por la protección de los derechos de las mujeres trans y travestis. 
            Nuestra casa en Rosario es un faro de esperanza donde la identidad es celebrada y 
            la convivencia se construye desde el amor.
          </p>
          <p className="about__text">
          Acompañamos a cada persona que llega a nuestras puertas con salud y educación como pilares,
          brindando las herramientas necesarias para una inserción laboral digna y una vida con autonomía.
          </p>

          
        </div>

      </div>
    </section>
  )
}

export default About