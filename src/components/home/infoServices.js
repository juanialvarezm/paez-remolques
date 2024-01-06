import React from 'react'
import { useState } from 'react'
import "./InfoServices.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCarBurst, faPeopleCarryBox, faTruckRampBox} from "@fortawesome/free-solid-svg-icons"
import {motion} from "framer-motion"
import bump from "../../data/bump.png"
import garage from "../../data/garage.png"
import trailer from "../../data/trailer.png"
import delivery from "../../data/delivery-truck.png"

const InfoServices = () => {
  
    const [isOpen,setIsOpen] = useState(false)

    return (
    <div className='services'>
        <div className='title'>
            <h2>NUESTROS SERVICIOS</h2>
        </div>
        <div className='usted'>
            <p >Siempre a tu disposicion</p>
        </div>

        
        <div className='grid'>
        <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                >
                <div className='service-1'>
                    <div className='front-ser1'>
                        {/* <FontAwesomeIcon color='#222' size='8x' icon={faPeopleCarryBox} />                 */}
                        <img src={bump} alt='bump' />
                        <div>
                            <h6>Cotizacion personalizada</h6>
                        </div>
                    </div>
                    <div className='back-ser1'>
                    <h3>La comunicacion es clave</h3>
                    <p>Dependiendo cual sea su caso y su medio de transporte se fija una cotizacion especifica para cada caso. No dude en consultar y llamar</p>

                    </div>
                </div>
                </motion.div>


            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                >
                    <div className='service-1'>
                        <div className='front-ser1'>
                            {/* <FontAwesomeIcon color='#222' size='8x' icon={faPeopleCarryBox} />                 */}
                            <img src={garage} alt='garage' />
                            <div>
                                <h6>Dsiponibilidad 24/7</h6>
                            </div>
                        </div>
                        <div className='back-ser1'>
                        <h3>No importa cuando</h3>
                        <p>Estamos disponibles las 24 horas del dia los 7 dias a la semana en todo capital federal y alrededores</p>

                        </div>
                    </div>
                </motion.div>


            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                >
                <div className='service-1'>
                    <div className='front-ser1'>
                        {/* <FontAwesomeIcon color='#222' size='8x' icon={faPeopleCarryBox} />                 */}
                        <img src={trailer} alt='trailer'/>
                        <div>
                            <h6>Remolque de automotrices</h6>
                        </div>
                    </div>
                    <div className='back-ser1'>
                    <h3>Te llevamos tu transporte </h3>
                    <p>Transportamos y ofrecemos auxilio mecanico a motos, autos, cuatricilios y su medio de eleccion</p>

                    </div>
                </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                >
                <div className='service-1'>
                    <div className='front-ser1'>
                        {/* <FontAwesomeIcon color='#222' size='8x' icon={faPeopleCarryBox} />                 */}
                        <img src={delivery} alt='delivery truck' />
                        <div>
                            <h6>Remolque de camiones</h6>
                        </div>
                    </div>
                    <div className='back-ser1'>
                    <h3>Te llevamos el camion </h3>
                    <p>Podemos transportar su camion las 24 horas los 7 dias a la semana, solo comuniquese y consulte </p>

                    </div>

                </div>

                </motion.div>

        </div>
    </div>
  )
}

export default InfoServices