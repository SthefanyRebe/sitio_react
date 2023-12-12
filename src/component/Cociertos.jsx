import React from 'react'
import lib from '../Images/libro1.jpg';
import lib1 from '../Images/libro2.jpg';
import lib2 from '../Images/libro3.jpg';
import { Fouter } from './Fouter';
export const Cociertos = () => {
  return (
    <div className='container' style={{marginTop:20}}>
     <div class="card mb-3" style={{width: "100%"}}>
        <div class="row g-0">
            <div class="col-md-4">
                <img src={lib} class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Año: 2008</h5>
                    <p class="card-text">Su video libro “Del llanto a la sonrisa”; fue una producción realizada para dar a conocer
mucho más sobre su vida. En él se encuentran confesiones, entrevistas y un testimonio poderoso, que bendecirá la vida de sus lectores</p>
                   <p class="card-text"><small class="text-muted">Literatura </small></p>
                </div>
            </div>
        </div>
    </div>
    <div class="card mb-3" style={{width: "100%"}}>
        <div class="row g-0">
            <div class="col-md-4">
                <img src={lib1} class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Año: 2018</h5>
                    <p class="card-text">“Enséñame A Amar” es un devocional para Matrimonios, un libro de Coautoría con su
esposa, en el cual Alex y Nathalia comparten los desafíos, las luchas y las alegrías que han sido parte de su propio matrimonio. Su experiencia sirve como punto de partida para una reflexión cotidiana que expone las verdades eternas que han enriquecido su propia vida como pareja. Todo matrimonio que anhela mayor intimidad emocional y espiritual encontrará en este libro una orientación práctica y útil para seguir creciendo en el amor.</p>
                   <p class="card-text"><small class="text-muted">Literatura</small></p>
                </div>
            </div>
        </div>
    </div>
    <div class="card mb-3" style={{width: "100%"}}>
        <div class="row g-0">
            <div class="col-md-4">
                <img src={lib2} class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Año: 2014</h5>
                    <p class="card-text">Su segundo libro titulado “Poemas de Dios” fue lanzado en abril de 2014. El autor explica según él como es la adoración genuina de todos los días en un cristiano que verdaderamente ama a Dios.</p>
                   <p class="card-text"><small class="text-muted">Literatura</small></p>
                </div>
            </div>
        </div>
    </div>
    <Fouter/>
    </div>
  )
}
