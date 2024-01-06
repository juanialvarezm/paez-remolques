import React from 'react'
import "./InfoHome.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruck, faTruckPickup} from "@fortawesome/free-solid-svg-icons"
import {faStar} from "@fortawesome/free-regular-svg-icons"
import {motion} from "framer-motion"

const InfoHome = () => {
  return (
    <div className='infohome'>
        <div className='wrapper'>
            <div className='img'>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                >
                <img  src="https://img.freepik.com/free-photo/car-repairman-wearing-white-uniform-standing-holding-wrench-that-is-essential-tool-mechanic_1150-16585.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1701043200&semt=ais" alt='grua foto'/>
                </motion.div>
            </div>
            <div className='text'>
            <div className='us'>
                <p id='us'>NOSOTROS</p>
            </div>
                <h1 className='quienes'>QUIENES SOMOS?</h1>
                <div>
                    <FontAwesomeIcon/>
                    <p className='somos'>
                        Somos una empresa de auxilio mecanico y transporte de vehiculo basada en Buenos Aires y alrededores. Con mas de 10 anos de experiencia en el negocio le podemos asegurar la mejor confianza, disponibilidad y serguridad.
                    </p>
                </div>
                <div className='text-info'>

                    <div className='box-info1'>
                    <div className='icon'>
                            <FontAwesomeIcon color='blue' size='2x' icon={faStar} />
                        </div>
                        <div className='text-text'>
                            <p className='subtitle'> Mision</p>
                            <p>Nuestra mision es brindar el mejor servicio a todas horas del dia, todos los dias. Contamos un equipo de 15 trabajadores dispuestos a ayudarlo y hacerle llegar su solucion en el menor tiempo posible</p>
                        </div>
                    </div>
                    <div className='box-info1'>
                    <div className='icon'>
                            <FontAwesomeIcon color='blue' size='2x' icon={faStar} />
                        </div>
                        <div className='text-text'>
                            <p className='subtitle'> Vision</p>
                            <p>Nuestra vision con Paez Remolques es ser reconocidos por brindar la mejor confianza, serguridad y disponibilidad. Para eso trabajamos arduamente todos los dias del ano para que nuestra vision se convierta en realidad </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoHome