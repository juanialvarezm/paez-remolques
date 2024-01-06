import React from 'react'
import ServiciosHome from '../components/servicios/ServiciosHome'
import ContactService from '../components/servicios/ContactService'
import ContactUs from '../components/trabajos/ContactUs'


const ServiciosPage = () => {
  return (
    <div>
        <ServiciosHome/>
        <ContactService/>
        <ContactUs/>        
    </div>
  )
}

export default ServiciosPage