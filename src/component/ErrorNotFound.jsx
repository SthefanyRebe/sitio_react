import React from 'react'
import error1 from '../Images/error.png';
export const ErrorNotFound = () => {
  return (
    <div className='container'>
        <center>
            <br/>
            <h1> PAGINA NO ENCONTRADA </h1>
            <img src={error1} alt='...'/>
        </center>
    </div>
  )
}
