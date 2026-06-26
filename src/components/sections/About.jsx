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
            Red Reparar es una Asociación Civil con personería jurídica que trabaja incansablemente por la protección de los derechos de las mujeres trans y travestis.
            Somos la única casa de protección trans y travesti de la República Argentina, y en marzo de 2027 cumpliremos nuestra primera década de trabajo. Nuestra casa en Rosario es un faro de esperanza donde la identidad es celebrada y la convivencia se construye desde el amor.
          </p>
          <p className="about__text">
          Acompañamos a cada persona que llega a nuestras puertas con la salud y la educación como nuestros dos pilares centrales, brindando herramientas como formación en oficios y vinculación educativa, 
          para una inserción laboral digna y una vida con autonomía.
          </p>

          
        </div>

      </div>
    </section>
  )
}

export default About