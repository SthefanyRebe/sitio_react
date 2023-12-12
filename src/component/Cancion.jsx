import React from 'react'
import caja1 from '../Images/c1.jpg';
import caja2 from '../Images/c2.jpg';
import caja3 from '../Images/c3.jpg';
import caja4 from '../Images/c4.jpg';
import caja5 from '../Images/can1.jpg';
import caja6 from '../Images/can2.jpg';
import caja7 from '../Images/can3.jpg';
import caja8 from '../Images/can4.jpg';
import caja9 from '../Images/can5.jpg';
import caja10 from '../Images/can6.jpg';
import { Fouter } from './Fouter';

export const Cancion = () => {
  return (
    <div style={{marginTop:20}} className='container'>
        <h3>CANCIONES MAS FAMOSAS</h3>
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div className="card">
                    <img src={caja1} className="card-img-top" alt="No encontrado"/>
                    <div className="card-body">
                        <h5 className="card-title">Deroche de Amor</h5>
                        <p className="card-text">Fecha de lanzamiento: 2015, Géneros: Tropipop, Christian</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={caja2} className="card-img-top" alt="No encontrado"/>
                    <div className="card-body">
                        <h5 className="card-title">El sonido de Silencio</h5>
                        <p className="card-text">Fecha de lanzamiento: 2006, Álbum: El sonido del silencio</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={caja3} className="card-img-top" alt="no encontrado"/>
                    <div className="card-body">
                        <h5 className="card-title">Al taller del Maestro</h5>
                        <p className="card-text">Fecha de lanzamiento: 2002, Géneros: Góspel, Tropipop, Christian</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={caja4} className="card-img-top" alt="no encontrado"/>
                    <div className="card-body">
                        <h5 className="card-title">Tu Poeta</h5>
                        <p className="card-text">Fecha de lanzamiento: 2008, Géneros: Góspel, Tropipop, Christian</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={caja5} className="card-img-top" alt="No encontrado"/>
                    <div className="card-body">
                        <h5 className="card-title">Suave Voz</h5>
                        <p className="card-text">Fecha de lanzamiento: 2006, Género: Christian</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={caja6} className="card-img-top" alt="No encontrado"/>
                    <div className="card-body">
                        <h5 className="card-title">Libre Soy</h5>
                        <p className="card-text">Artistas: Barak, Alex Campos, Álbum: Generación radical</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={caja7} className="card-img-top" alt="No encontrado"/>
                    <div className="card-body">
                        <h5 className="card-title">Como el color  de la Sangre</h5>
                        <p className="card-text">Fecha de lanzamiento: 2008, Artista: Alex Campos</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={caja8} className="card-img-top" alt="No encontrado"/>
                    <div className="card-body">
                        <h5 className="card-title">Regreso a Ti</h5>
                        <p className="card-text">Fecha de lanzamiento: 2006, Álbum: Alex Campos y Sus Amigos (En Vivo)</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={caja9} className="card-img-top" alt="No encontrado"/>
                    <div className="card-body">
                        <h5 className="card-title">No tiene Prisa</h5>
                        <p className="card-text">Artista: Alex Campos, Fecha de lanzamiento: 2012</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={caja10} className="card-img-top" alt="No encontrado"/>
                    <div className="card-body">
                        <h5 className="card-title">Te Puedo Sentir</h5>
                        <p className="card-text">Álbum: Te puedo sentir, Fecha de lanzamiento: 2009</p>
                    </div>
                </div>
            </div>
        </div>
        <Fouter/>
    </div>
  )
}
