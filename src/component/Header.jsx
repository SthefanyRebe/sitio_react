import React from 'react'
import logo from '../Images/logo192.png';
import { NavLink } from 'react-router-dom';
export const Header = () => {
  return (
    <>
    <header style={{color:"sienna"}}>
        <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
            < a href="">
                <img src={logo} height="100" alt='No encontrada'/>         
            </a>
            <h1 style={{color:'white'}}>React-Boobstratp</h1>
            <button type='button' className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#navbarcollapse">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarcollapse'>
                <div className='navbar-nav ms-auto'>
                    <h6 href=""><NavLink to="/Introduccion" className='nav-item nav-link text-center' style={{color:'white'}}>Introduccion</NavLink></h6>
                    <h6 href=""><NavLink to="/Biografia" className='nav-item nav-link text-center' style={{color:'white'}}>Biografia</NavLink></h6>
                    <h6 href=""><NavLink to="/Comienzo" className='nav-item nav-link text-center' style={{color:'white'}}>Comienzos</NavLink></h6>
                    <h6 href=""><NavLink to="/Album" className='nav-item nav-link text-center' style={{color:'white'}}>Albumnes</NavLink></h6>
                    <h6 href=""><NavLink to="/Cancion" className='nav-item nav-link text-center' style={{color:'white'}}>Canciones</NavLink></h6>
                    <h6 href=""><NavLink to="/Colaboracion" className='nav-item nav-link text-center' style={{color:'white'}}>Colaboraciones</NavLink></h6>
                    <h6 href=""><NavLink to="/Video" className='nav-item nav-link text-center' style={{color:'white'}}>Videosclip</NavLink></h6>
                    <h6 href=""><NavLink to="/Concierto" className='nav-item nav-link text-center' style={{color:'white'}}>Libros</NavLink></h6>
                    <h6 href=""><NavLink to="/Mensaje" className='nav-item nav-link text-center' style={{color:'white'}}>Mensaje</NavLink></h6>
                    <h6 href=""><NavLink to="/Credito" className='nav-item nav-link text-center' style={{color:'white'}}>Creditos</NavLink></h6>
                </div>
            </div>
        </nav>
    </header>
    </>
  
  )
}
