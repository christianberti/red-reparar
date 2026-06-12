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
            En Red Reparar trabajamos incansablemente por la protección de los derechos
            de la comunidad LGBTQ+. Nuestra base en Rosario es un faro de esperanza
            donde la identidad es celebrada y las oportunidades son reales.
          </p>
          <p className="about__text">
            Logramos alianzas con fundaciones y empresas para ofrecer capacitaciones
            laborales de alta calidad, asegurando que cada persona que pase por nuestras
            puertas cuente con las herramientas necesarias para una inserción laboral
            digna y exitosa.
          </p>

          
        </div>

      </div>
    </section>
  )
}

export default About