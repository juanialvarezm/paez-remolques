import React,{useEffect} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'



const Navbar = () => {



    return (
    <div>
        <nav className='nav-wrapper'>
            <div className='titulo'>
                <div>
                    <h3>PAEZ Remolques</h3>
                </div>
            </div>
            <div className='nav-ul'>

                    <div  className='link'>
                    {window.location.pathname == "/contact"?(
                    <a href='/'>Home</a>

                    ):(
                        <a href='/contact'>Contact</a>
                    )}
                    </div>

            
                <div  className='link'>
                    {window.location.pathname == "/nosotros"?(
                    <a href='/'>Home</a>

                    ):(
                        <a href='/nosotros'>Nosotros</a>
                    )}
                </div>
                
                <div  className='link'>
                    {window.location.pathname == "/trabajos"?(
                    <a href='/'>Home</a>

                    ):(
                        <a href='/trabajos'>Trabajos</a>
                    )}
                    </div>

                <div  className='link'>
                    {window.location.pathname == "/servicios"?(
                    <a href='/'>Home</a>

                    ):(
                        <a href='/servicios'>Servicios</a>
                    )}
                </div>
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar