import React from 'react'
import "./NosotrosHome.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowDown} from "@fortawesome/free-solid-svg-icons"

const NosotrosHome = () => {
  return (
    <div className='nosotros-div'>
        <div className='imgg'>
            <img src='https://img.freepik.com/fotos-premium/equipo-mecanicos-trabajando-juntos_13339-83423.jpg' />
            <h2>NOSOTROS</h2>
            <div className='arrow'>
                {/* <FontAwesomeIcon size='4x' icon={faArrowDown} /> */}
            </div>
        </div>
    </div>
  )
}

export default NosotrosHome