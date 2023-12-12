import React from 'react'
import { Fouter } from './Fouter'
import vid from '../Images/video4.mp4';
import ReactPlayer from 'react-player';
export const Credito = () => {
  return (
    <>
    <div className="b-example-divider" style={{marginTop:20}} ></div>

        <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg bg-primary">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">Desarrolladora</h1>
            <p className="lead" ><strong>Alumna: </strong>Sthefany Rebeca LImachi Quispe</p>
            <p className="lead"><strong>Carrera: </strong>Informatica/ Ciencias Puras y Naturales</p>
            <p className="lead"><strong>Materia: </strong>Inf-122-web II</p>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <ReactPlayer url={vid} controls loop width="100%"/>
            </div>
        </div>
        <Fouter/>
    </div>
            </>
  )
}
