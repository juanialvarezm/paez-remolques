import React from 'react'
import "./TrabajosHome.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import instagram from "../../data/instagram.png"
import twitter from "../../data/twitter.png"
import facebook from "../../data/facebook.png"
import telephone from "../../data/telephone2.png"
import home from "../../data/home.png"
import mail from "../../data/mail.png"
import {motion} from "framer-motion"


const ContactUs = () => {
  return (  
    <div className='cont-container'>
        <div className='contac-wrapper'>
            <div className='stacla'>
                <h4>REMOLQUES STA CLARA</h4>
                <div className='contact-media'>
                    <h4>Nuestras redes</h4>
                    <div className='imgages'>
                        <div>
                            <img src={instagram} alt='instagram' />
                        </div>
                        <div>
                            <img src={twitter} alt='instagram' />
                        </div>
                        <div>
                            <img src={facebook} alt='instagram' />
                        </div>
                    </div>
                </div>
            
            
            </div>
            <div className='nosotros'>
                <h4>Nosotros</h4>
                <p>
                Somos una empresa de auxilio mecanico y transporte de vehiculo basada en Buenos Aires y alrededores. Con mas de 10 anos de experiencia en el negocio le podemos asegurar la mejor confianza, disponibilidad y serguridad.                </p>
            </div>
            <div className='contac'>
                <h4>Contacto</h4>
                <div className='telephone'>
                    <img src={telephone} alt='telephone' />
                    <p>11 2563 9834</p>
                </div>
                <div className='telephone'>
                    <img src={home} alt='telephone' />
                    <p>Scalabrini Ortiz y Corrientes</p>
                </div>

                <div className='telephone email-con'>
                    <img src={mail} alt='telephone' />
                    <p>remolquesstacalara@gmail.com.ar</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ContactUs