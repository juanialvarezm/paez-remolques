import React from 'react'
import DarkVariantExample from './Carousel'
import InfoHome from './InfoHome'
import InfoServices from './infoServices'
import Contact from './Contact'
import TrustUs from './TrustUs'
import HomeWorksDone from './HomeWorksDone'

const Home  = () => {
  return (
    <div>
        <DarkVariantExample />
        <InfoServices/>
        <InfoHome/>
        <HomeWorksDone/>
        <TrustUs/>
    </div>
  )
}

export default Home