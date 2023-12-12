import React from 'react'
import imgcar from '../Images/i1.jpg';
import imgcar2 from '../Images/12.jpg';
import imgcar3 from '../Images/i3.jpg';
import imgcar4 from '../Images/a1.jpg';
import imgcar5 from '../Images/a2.jpg';
import imgcar6 from '../Images/a3.jpg';


export const Banner = () => {
  return (
    <div className='container' style={{marginTop:20, marginBottom:20}}>
        <h1>Alex Campos</h1>
        <p>Édgar Alexánder Campos Mora, más conocido como Álex Campos, es un cantante, compositor, músico y productor discográfico colombiano de música cristiana evangélica es considerado uno de los referentes y principales exponentes en dicho género musical.​</p>
        <br/>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={imgcar} class="d-block w-100" alt="No encontrado"/>
                </div>
                <div className="carousel-item">
                    <img src={imgcar2} class="d-block w-100" alt="No encontrado"/>
                </div>
                <div className="carousel-item">
                    <img src={imgcar3} class="d-block w-100" alt="no encontrado"/>
                </div>
                <div className="carousel-item">
                    <img src={imgcar4} class="d-block w-100" alt="no encontrado"/>
                </div>
                <div className="carousel-item">
                    <img src={imgcar5} class="d-block w-100" alt="no encontrado"/>
                </div>
                <div className="carousel-item">
                    <img src={imgcar6} class="d-block w-100" alt="no encontrado"/>
                </div>
  
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
        
        <p>Es uno de mis cantantes favoritos y hoy conoseremos un poco mas sobre su vida, trayecto,etc.</p>
    </div>
  )
}
