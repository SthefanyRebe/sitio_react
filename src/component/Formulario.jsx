import React from 'react'
import { Fouter } from './Fouter'

export const Formulario = () => {
  return (
    <center>
        <div className='container' style={{width:"70%", marginTop:20, background:"#A8BCFF", padding:20}}>MENSAJE
            <form id="miFormulario">
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Añade tu correo</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Deja un mensaje </label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
                <button className='btn btn-primary btn-lg'> 
                    Enviar Mesaje
                </button>
            </form>
            <Fouter/>
        </div>
    </center>
  )
}
