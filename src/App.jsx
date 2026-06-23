import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import WhatsappButton from './components/WhatsAppButton'
import Footer from './components/Footer'
import RefugioHero from './components/sections/RefugioHero'
import Convivencia from './components/sections/Convivencia'
import AcompanamientoIntegral from './components/sections/AcompanamientoIntegral'

const App = () => {
  const [view, setView] = useState('home') // 'home' | 'refugio'
  const [scrollTarget, setScrollTarget] = useState(null) // 'hero' | 'acompanamiento'

  const handleVerRefugio = (target) => {
    setView('refugio')
    setScrollTarget(target)
  }

  // Vuelve a Inicio si se clickea cualquier link del Navbar
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (link) setView('home')
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  // Hace scroll al destino correcto una vez que se muestra la página de Refugio
  useEffect(() => {
    if (view === 'refugio' && scrollTarget) {
      setTimeout(() => {
        if (scrollTarget === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else if (scrollTarget === 'acompanamiento') {
          document.getElementById('acompanamiento-integral')?.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    }
  }, [view, scrollTarget])

  return (
    <>
      <Navbar />
      <main>
        {view === 'home' ? (
          <>
            <About />
            <Services onVerRefugio={handleVerRefugio} />
            <Contact />
          </>
        ) : (
          <>
            <RefugioHero />
            <Convivencia />
            <AcompanamientoIntegral />
          </>
        )}
      </main>
      <Footer />
      <WhatsappButton />
    </>
  )
}

export default App