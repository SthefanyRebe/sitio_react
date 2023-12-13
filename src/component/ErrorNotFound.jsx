import React from 'react'
import error1 from '../Images/video1.jpg';
export const ErrorNotFound = () => {
  return (
    <div className='container'>
     <div class="card bg-dark text-white">
  <img src={error1} class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <h1 class="card-title">BIENVENIDOS</h1>
    <p class="card-text">Una pagina para hablar de un gran cantante</p>
    <p class="card-text">Alex Cmpos</p>
  </div>
</div>
    </div>
  )
}
