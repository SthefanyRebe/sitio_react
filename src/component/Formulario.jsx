import React from 'react'
import { Fouter } from './Fouter'

export const Formulario = () => {
  return (
    <center>
        <div className='container' style={{width:"70%", marginTop:20, background:"#A8BCFF", padding:20}}>Formulario
            <form id="miFormulario">
                <h1 className='h1'>MENSAJES DE APOYO</h1>
                <input style={{marginBottom:20}} className='form-control form-control-lg' type='text' placeholder='Digite su Nombre'/>
                <input style={{marginBottom:20}} className='form-control form-control-lg' type='text' placeholder='Digite su Correo'/>
                <textarea style={{marginBottom:20}} className='form-control form-control-lg' placeholder='Digite su Mensaje'/>
                <button className='btn btn-primary btn-lg'> 
                    Enviar Mesaje
                </button>
            </form>
            <Fouter/>
        </div>
    </center>
  )
}
