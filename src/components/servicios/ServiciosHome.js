import React,{useState} from 'react'
import "./ServiciosHome.css"
import servicesHome from "../../data/services-home.avif"
import truck from "../../data/truckovertruck.jpg"
import carrying from "../../data/carrying-car.jpg"
import bikes from "../../data/carrying-bikes.png"
import {motion} from "framer-motion"

const ServiciosHome = () => {

  return (
    <div className='cont-services'>
        <div className='serv-mainimg'>
            <img src={servicesHome} />
            <h3>SERVICIOS</h3>
        </div>
        <div className='servicess'>
            <div >
                <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                className='service service1'>
                        <div className="service-text">
                            <h3>REMOLQUE DE CAMIONES</h3>
                            <p>
                                Uno de nuestros servicios es el transporte de camiones. Podemos transportar su camion en toda la capital federal y alrededeores de la provincia de Buenos Aires.Tambien podemos brindarle ayuda y auxilio mecanico al mismo. 
                            </p>
                            <p>Consulte con nosotros y consiga una cotizacjon personalizada</p>
                        </div>
                        <div className='serv-img1'>
                            <img src={truck} />
                        </div>

                </motion.div>
            </div>
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            >
                <div className='service service2' >
                    <div className='serv-img2'>
                        <img src={carrying} />
                    </div>
                    <div className='service-text'>
                        <h3>AUXILIO MECANICO</h3>
                        <p>En paez remolques tambien nos enfocamos en brindar ayuda y solucionar problemas. Ofrecemos auxilio y ayuda mecanica en toda la capital federal y alrededeores de la provincia de Buenos Aires a todo tipo de vehiculos</p>
                    </div>
                </div>
            </motion.div>

            <div >
                <motion.div
                className='service service3'
                initial={{opacity:1}}
                whileInView={{opacity:1}}
                >
                <div className='service-text'>
                    <h3>REMOLQUE DE VEHICULOS</h3>
                    <p>
                        A su vez, tambien ofrecemos remolque de cualquier otro tipo de vehiculo que solicite. En capital federal y alrededores podemos transportar motocicletas, autos, cuatriciclos, Autobuses,etc. 
                    </p>
                    <p>Consulte con nosotros y consiga una cotizacion personalizada</p>
                </div>
                <div className='serv-img3'>
                    <img src={bikes} />
                </div>
                </motion.div>
            </div>
        </div>


    </div>
  )
}

export default ServiciosHome