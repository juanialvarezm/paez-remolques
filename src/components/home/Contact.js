import React from 'react'
import "./Carousel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone} from "@fortawesome/free-solid-svg-icons"


const Contact = () => {
  return (
    <div className='contact'>
        <div>
            <div className='contactenos'>
                <h3>Contactanos</h3>
            </div>
            <div className='call'>
                <FontAwesomeIcon icon={faPhone} size='7x' color='black' />
                <p>11 25 1254 1</p>
                <hr/>
            </div>
        </div>
    </div>
  )
}

export default Contact