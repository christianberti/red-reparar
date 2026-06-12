import WhatsappIcon from '../assets/WhatsApp.svg'
import '../styles/WhatsAppButton.css'

const WhatsAppButton = () => {
  const phone = '5493410000000'
  const message = 'Hola, quiero más información sobre Fundación Reparar'
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      className="whatsapp-btn"
      aria-label="Contactar por WhatsApp"
    >
      <img src={WhatsappIcon} alt="WhatsApp" width="56" height="56" />
    </a>
  )
}

export default WhatsAppButton