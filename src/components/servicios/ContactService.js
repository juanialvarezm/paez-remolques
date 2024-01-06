import React from 'react'
import "./ServiciosHome.css"
import { Link } from 'react-router-dom'

const ContactService = () => {
  return (
    <div className='service-contact'>
        <div className='contact-text'>
            <h3>CONTACTANOS</h3>
            <p>Somos una empresa que busca la excelencia y disponibilidad siempre</p>
        </div>
        <div className='contact-btn'>
        <Link to={"/contact"} className='c-link'>
          <button>Solicita una cotizacion</button>

        </Link>
        </div>
    </div>
  )
}

export default ContactService