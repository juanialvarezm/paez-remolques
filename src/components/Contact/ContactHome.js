import React from 'react'
import "./ContactHome.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faC, faCableCar} from "@fortawesome/free-solid-svg-icons"
import instagram from "../../data/instagram.png"
import twitter from "../../data/twitter.png"
import facebook from "../../data/facebook.png"

const ContactHome = () => {
  return (
    <div className='griddi'>
        <div className='contain'>
            <div className='mainimg'>
                {/* <img src='https://revistapuerto.com.ar/wp-content/uploads/2023/06/Revista-Puerto-Chubut-Exportaciones-desde-Puerto-Madryn.jpg' alt='nothing rightnow' /> */}
                <div className="mapouter">
                    <div class="gmap_canvas">
                        <iframe width="820" height="800" id="gmap_canvas" src="https://maps.google.com/maps?q=Scalabrini+Ortiz+y+Corrientes&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        <a href="https://timenowin.net/"></a>
                        </div>
                    </div>


            </div>
            <div className='main'>
                <div className='contactus'>
                    <h4>CONTACTANOS</h4>
                    <p><span id='spani'>TELEFONO:</span> 11 5285 5525 </p>
                    <p><span id='spani '>MAIL:</span> remolquescaba@gmail.com</p>
                    <p><span id='spani'>OFICINAS:</span> Scalabrini ortiz y Corrientes</p>            
                </div>
                <div className='oursocial-media'>
                    <h4>Nuestras redes</h4>
                    <div className='imgs'>
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
            
        </div>
    </div>
  )
}

export default ContactHome