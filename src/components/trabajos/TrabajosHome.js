import React from 'react'
import "./TrabajosHome.css"
import road from  "../../data/road6.png"
import trabajoHome from "../../data/mechanic-services.jpeg"
import {motion} from "framer-motion"
import work1 from "../../data/work1.jpg"
import work2 from "../../data/work2.jpg"
import work3 from "../../data/work3.jpg"
import work4 from "../../data/work4.jpg"
import work5 from "../../data/work5.jpg"
import work6 from "../../data/work6.jpg"
import work7 from "../../data/work7.jpg"
import work8 from "../../data/work8.jpg"
import work9 from "../../data/work999.jpg"


const TrabajosHome = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}>
        <div className='workhome'>
            <div className='workimg'>
                <img src={trabajoHome} alt='trabajon home' />
                <h1>TRABAJOS</h1>
            </div>
            <div className='collage-cont'>
                <h2>ALGUNOS DE NUESTROS TRABAJOS</h2> 
                <div className='grido'>
                    <div className='work1'>
                        <img src={work1} alt='work1' />
                    </div>
                    <div className='work2'>
                        <img src={work2} alt='work2' />
                    </div>
                    <div className='work3'>
                        <img src={work3} alt='work3' />
                    </div>
                    <div className='work4'>
                        <img src={work4} alt='work4' />
                    </div>
                    <div className='work5'>
                        <img src={work5} alt='work5' />
                    </div>
                    <div className='work6'>
                        <img src={work6} alt='work6' />
                    </div>
                    <div className='work7'>
                        <img src={work7} alt='work7' />
                    </div>
                    <div className='work8'>
                        <img src={work8} alt='work8' />
                    </div>
                    <div className='work9'>
                        <img src={work9} alt='work9' />
                    </div>

                </div>
            </div>
        </div>
    </motion.div>
    )
}

export default TrabajosHome