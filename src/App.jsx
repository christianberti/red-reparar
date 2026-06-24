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
  const [scrollTarget, setScrollTarget] = useState(null) // 'hero' | 'acompanamiento' | 'contacto'

  const handleVerRefugio = (target) => {
    setView('refugio')
    setScrollTarget(target)
  }

  const handleDonar = () => {
    if (view === 'refugio') {
      setView('home')
      setScrollTarget('contacto')
    } else {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
    }
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
        } else if (scrollTarget === 'contacto') {
          document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    }
  }, [view, scrollTarget])
  // Actualiza la URL (hash) cuando cambia la vista, para que el navegador
  // guarde el cambio en su historial
  useEffect(() => {
    if (view === 'refugio') {
      window.history.pushState({}, '', '#refugio')
    } else {
      window.history.pushState({}, '', '#inicio')
    }
  }, [view])

  // Escucha el botón "Atrás"/"Adelante" del navegador
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash === '#refugio') {
        setView('refugio')
      } else {
        setView('home')
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])
  return (
    <>
      <Navbar onDonar={handleDonar} />
      <main>
        {view === 'home' ? (
          <>
            <About />
            <Services onVerRefugio={handleVerRefugio} />
            {/* <Contact /> */}
          </>
        ) : (
          <>
            <RefugioHero />
            <Convivencia />
            <AcompanamientoIntegral />
          </>
        )}
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  )
}

export default App