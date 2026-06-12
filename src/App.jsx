import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import WhatsappButton from './components/WhatsappButton'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
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

export default App
