import WhatsappIcon from '../assets/whatsapp.svg'
import '../styles/WhatsAppButton.css'

const WhatsAppButton = () => {
  const phone = '5493415004542'
  const message = 'Hola, quiero más información sobre Red Reparar'
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Contactar por WhatsApp"
    >
      <img src={WhatsappIcon} alt="WhatsApp" width="56" height="56" />
    </a>
  )
}

export default WhatsAppButton