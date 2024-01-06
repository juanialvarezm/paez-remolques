import React from 'react'
import "./TrustUs.css"
import road from "../../data/road6.png"
import jam from "../../data/trafficjam.jpg"
import support from "../../data/support.png"
import quality from "../../data/quality.png"
import mainrain from "../../data/manintherain-car.webp"
import ambulance from "../../data/ambulance-help.webp"
import {motion} from "framer-motion"
import bikes from "../../data/carrying-bikes.png"


const TrustUs = () => {
  return (
        <div className='confia'>
            <div className='why'>
                <h1>POR QUE CONFIAR EN NOSOTROS?</h1>
            </div>
            <div className='cards'>
                <div className='card-container'>
                    <img className='main-img' src={ambulance} />
                    <div className='div'>
                        <img  src={road} className='img-road' alt='spdlp'/>
                        <p>Seguridad</p>
                    </div>
                    <div className='hidden'>
                            <p>En todos nuestros servicios brindamos la mejor Seguridad para crecer y generar confianza</p>
                        </div>
        
                </div>
                <div className='card-container'>
                    <img className='main-img' src={bikes} />
                    <div className='div'>
                        <img  src={quality} className='img-road' alt='spdlp'/>
                        <p>Experiencia</p>
                    </div>
                    <div className='hidden'>
                            <p>Con mas de 10 anos en el mercado y acerca de 10.000 servicios realizados le podemos garantizar el mejor servicio para su problema</p>
                        </div>
                </div>
                
                <div className='card-container'>
                    <img className='main-img' src={jam} />
                    <div className='div'>
                        <img  src={road} className='img-road' alt='spdlp'/>
                        <p>Confianza</p>
                    </div>
                    <div className='hidden'>
                            <p>Cada problema que se nos presente es visto como uno propio y se lo trata con la mayor profesionaidad existente</p>
                        </div>
                </div>
                <div className='card-container'>
                    <img className='main-img' src={mainrain} />
                    <div className='div'>
                        <img  src={support} className='img-road' alt='spdlp'/>
                        <p>Disponibilidad</p>
                    </div>
                    <div className='hidden'>
                            <p>En paez remolque  ceremos que la disponibilidad es lo mas importante, por lo tanto brindamos una disponibilidad de 24/7</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default TrustUs