import React from 'react'
import comz from '../Images/bi1.jpg';
import comz1 from '../Images/12.jpg';
import comz2 from '../Images/c1.jpg';
import { Fouter } from './Fouter';
export const Comienzo = () => {
  return (
    <div className='container' style={{marginTop:20}}>
        <div className="card-group">
  <div class="card">
    <img src={comz} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title"> el milagro que inspiró la canción Al taller del maestro</h5>
      <p className="card-text">A comienzos del nuevo milenio, Alex Campos se presentó una tarde en su Bogotá natal y descubrió que la voz no le salía. Preocupado, consultó con un médico y recibió la noticia que menos esperaba oír: tenía cáncer de garganta.

Los médicos también le dijeron que debían extirparle los quistes que tenía en las cuerdas vocales. Aun sabiendo el riesgo que esto suponía para su vida, Campos decidió no hacerlo, ya que existían muchas chances de que no pudiera volver a cantar, Apenas unos meses más tarde, Alex se realizó unos estudios y todo el mundo quedó sorprendido al observar que los quistes habían desaparecido, A partir de entonces, Campos se convirtió en el referente de la música cristiana que es hoy en día.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Ejemplo de fe</small>
    </div>
  </div>
  <div class="card">
    <img src={comz1} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">Trayectoria y Legado</h5>
        <p className="card-text">En 1996, Alex Campos lanzó su primer trabajo discográfico, titulado "Tiempo de la cruz". Fue la base para emprender también su primera gira de conciertos. En ese viaje musical recorrió Colombia y Venezuela. Dos años después, creó el sello Misión Vida Records (MV Records), También en 2002, Alex Campos fue solicitado por el sello discográfico CanZion, interesado en su trabajo musical. Con esa disquera grabó su segundo álbum. Salió con el mismo nombre del tema que compuso antes de la suspendida operación, "Al taller del maestro".
            En 2005, lanzó el disco "Como un niño", con respaldo del sello CanZion. De ese trabajo musical, son los videoclips de las canciones "Sueño de morir" y "Quiero".
            En 2006, Alex Campos lanzó al mercado su primer álbum en vivo, titulado "El sonido del silencio". Tuvo la participación del cantante de música cristiana, Marcos Witt.
        </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Trayectoria</small>
    </div>
  </div>
  <div className="card">
    <img src={comz2} class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Logros</h5>
      <p className="card-text">Los intérpretes de música religiosa contemporánea saben como llegar a grandes audiencias. Su propuesta sonora no tiene que ser, necesariamente, dolorida o contristada. Al dominar la música rock, el pop o la balada, pueden llegar a un público más amplio.

Es lo que ha conseguido Alex Campos. Construyendo sus mensajes cristianos con ritmos rock, pop o de música folclórica colombiana, consigue un numeroso público. Difundiendo un contenido elevado y esperanzador, se ha convertido en el mejor intérprete góspel de su país. Dentro y fuera de Colombia, uno de los pocos con cinco Grammy.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Exitos</small>
    </div>
  </div>
</div>
    <Fouter/>
    </div>
  )
}
