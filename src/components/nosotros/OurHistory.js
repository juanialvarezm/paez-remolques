import React from 'react'
import {motion} from "framer-motion"
import "./NosotrosHome.css"

const OurHistory = () => {
    
    return (
    <div className='history'>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}>
            <div className='gridi'>
                <div>
                    <img className='img-lugo' src='https://gruaslugo.com.ar/images/gruas-lugo.jpg' />
                    
                </div>
                <div className='us'>
                    <h3>NUESTRA HISTORIA</h3>
                    <p>
                    Somos una empresa de auxilio mecanico y transporte de vehiculo basada en Buenos Aires y alrededores. Con mas de 20 anos de experiencia en el negocio le podemos asegurar la mejor confianza, disponibilidad y serguridad.                    </p>
                    <p>Nacimos en 2004,con la intencion de ayudar y brindar el mejor servicio, y luego de 10 anos esos valores siguen siendo los pilares en Paez Remolques. Siempre intentamos generar un vinculo con el cliente y demostrarle confianza y seguridad</p>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default OurHistory