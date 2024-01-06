import React from 'react'
import "./NosotrosHome.css"
import { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import {motion} from "framer-motion"

const ReasonsToTrust = ({data}) => {
  const [index,setIndex] = useState(0)
  

  const nextSlide = ()=>{
    setIndex(index == data.length -1 ? 0 : index +1)

}

  const prevSlide = ()=>{
    setIndex(index == 0 ? data.length -1 : index-1 )
}


    return (
    <div >
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        className='totrustcont'>
            <div className='totrust'>
                <h2>HAY MAS DE MIL RAZONES PARA CONFIAR </h2>
                <p>Una imagen vale mas que mil palabras, es por eso que les dejamos este carrete para que  usted lo vea.</p>
            </div>
            <div className='img-gridi'>
                <div className='relative'>
                <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
                    {/* <img src='https://static2.aastatic.com.ar/files/variants/1200/339758e490714af88827e2c0c3a3e789.jpg' alt='trailer' /> */}
                        {data.map((item, idx) => {
                        return (
                        <img
                            src={item.src}
                            alt={item.alt}
                            key={idx}
                            className={index === idx ? "slide" : "slide slide-hidden"}
                        />
                        );
                    })}
                    <BsArrowRightCircleFill
                        onClick={nextSlide}
                        className="arrow arrow-right"
                    />
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default ReasonsToTrust