/* import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import WhatsappButton from './components/WhatsAppButton'
import Footer from './components/Footer'
import RefugioHero from './components/sections/RefugioHero' 

const App = () => {
  return (
    <>
      <Navbar />
       <RefugioHero /> 
      <main>
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  )
}

export default App */


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

  // Si el usuario clickea cualquier link del Navbar (#nosotros, #servicios, etc.)
  // volvemos a mostrar el Inicio normal, sin tocar Navbar.jsx
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (link) setView('home')
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        {view === 'home' ? (
          <>
            <About />
            <Services onVerRefugio={() => setView('refugio')} />
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