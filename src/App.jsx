import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import WhatsappButton from './components/WhatsAppButton'
import Footer from './components/Footer'
import RefugioHero from './components/sections/RefugioHero'
import Convivencia from './components/sections/Convivencia'
import AcompanamientoIntegral from './components/sections/AcompanamientoIntegral'

const App = () => {
  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <>
      <Navbar/>
      <main>
        <Hero onConocenos={() => handleScrollTo('nosotros')} />
        <About />
        <Services onVerRefugio={handleScrollTo} />
        <RefugioHero />
        <Convivencia />
        <AcompanamientoIntegral />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  )
}

export default App