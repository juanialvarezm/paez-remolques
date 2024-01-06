import React from 'react'
import Home from '../components/home/Home'
import "../App.css"
import ContactUs from '../components/trabajos/ContactUs'



const HomePage = () => {
  return (
    <div className='home'>
      <Home/>
      <ContactUs/>
    </div>
  )
}

export default HomePage