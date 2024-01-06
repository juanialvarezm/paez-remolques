import React from 'react'
import NosotrosHome from '../components/nosotros/NosotrosHome'
import OurHistory from '../components/nosotros/OurHistory'
import ReasonsToTrust from '../components/nosotros/ReasonsToTrust'
import {slides} from "../data/data" 
import NumbersDontLie from '../components/nosotros/NumbersDontLie'
import ContactUs from '../components/trabajos/ContactUs'


const NosotrosPage = () => {
  return (
    <div>
      <NosotrosHome/>
      <OurHistory/>
      <ReasonsToTrust data={slides}/>
      <NumbersDontLie/>
      <ContactUs/>      
    </div>
  )
}

export default NosotrosPage