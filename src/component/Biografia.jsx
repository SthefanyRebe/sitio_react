import React from 'react'
import bio1 from '../Images/12.jpg';
import pre1 from '../Images/premi1.jpg';
import pre2 from '../Images/premi2.jpg';
import pre3 from '../Images/premi3.jpg';
import { Fouter } from './Fouter';
export const Biografia = () => {
  return (
    <div className='container' style={{marginTop:20, marginBottom:20}}>
        <h1>Biografia de Alex Campos</h1>
      <img src={bio1} class="rounded mx-auto d-block" alt="No encontrado"/>

      <div style={{marginTop:20}} className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    informacion personal
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                    <strong>Nombre de nacimiento</strong> Édgar Alexánder Campos Mora, Nacimiento 10 de septiembre de 1976 (47 años) Bogotá, Colombia, Nacionalidad Colombiana, Ocupación Cantante, músico, compositor, productor y discográfico.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Carrera
                </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                A los 17 años Álex formó la banda llamada "Misión Vida" junto a Esteban Machuca, Michael Arbeláez y Freud Romero. Cuando cumplió 20 años logró hacer su primer trabajo discográfico Tiempo de la cruz, así llevaron su primera gira en Venezuela. En 1998, formó la disquera musical cristiana Misión Vida Recordi (MV Records). En 2001, Álex realizó su primera salida del país a Quito en Ecuador. Su mejor amigo se llama Ricardo Torres con quien inició su carrera musical y han tocado juntos en varios conciertos.
En el año 2002 fue un tiempo difícil para el cantante, ya que le pronosticaron un tumor en las cuerdas vocales. Estos debían ser extirpados, conllevando un riesgo de perder el 50% de su voz. Los quistes no fueron extirpados y Campos, considerando que Dios hizo un milagro en su vida, un día antes de la operación, decide orar a Dios y compuso la canción «Al taller del maestro», ese mismo día le sacaron una radiografía donde los médicos se asombraron al ver que el tumor ya no estaba allí.
                </div>
            </div>
        </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Nominaciones
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                    En 13 años de carrera musical Álex ha trabajado con reconocidos cantantes de música cristiana como Marcos Witt, Jesús Adrián Romero, y Funky; ha tenido invitados reconocidos en sus álbumes como Jez, Ulises Eyherabide, de la banda cristiana de Argentina Rescate, Marcela Gándara, Lilly Goodman, Coalo Zamorano, Fonseca, Danilo Montero, entre otros y ha realizado giras en más de 26 países.
                    En el año 2013 ganó un Grammy Latino. El 19 de noviembre en la 16 celebración de los Grammy Latinos 2015 ganarían el premio Mejor Álbum de Música Cristiana por "Derroche de Amor".
                    En noviembre de 2020, Soldados es premiado con el Latin Grammy como el mejor álbum cristiano del año durante la 21 celebración de los Premios Grammy Latinos consiguiendo así su 5ºGrammy latino por mejor álbum cristiano.
                    En 2021, presentó su álbum Renovado, que contiene nuevas versiones de sus primeras canciones. Además, superó un millón de reproducciones con su sencillo «No dejes que caiga»,​ canción para su próximo proyecto discográfico. 
                    </div>
                </div>
            </div>
        </div>
        <div class="list-group" style={{marginTop:20}}>
            <a href="#" className="list-group-item list-group-item-action">CONTEO DE LAS NOMINACIONES Y PREMIACIONES</a>
            <div className="row" tyle={{marginTop:20}}>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={pre1} alt='...'/>
                    <h2>GRAMMY</h2>
                    <p></p>
                    
                </div>
                <div class="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={pre2} alt='...'/> 
                    <h2>ARPA</h2>
                    <p></p>
                    
                </div> 
                <div class="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={pre3} alt='...'/> 
                    <h2>AMCL</h2>
                    <p></p>
                    
                </div> 
            </div>
            <a href="#" className="list-group-item list-group-item-action list-group-item-primary">Para Premios Grammy Latinos fue nominado 7 veces de los cuales gano  5. </a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-secondary">Para Premios Arpa fue nominado 30 veces de los cuales gano  8.</a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-success">Para Premios Shock fue nominado 1 vez de lo cual gano.</a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-danger">Para Premios Uncion fue nominado 3 veces de los cuales gano los 3.</a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-warning">Para Premios Vertical fue nominado 9 veces de los cuales gano 6.</a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-info">Para Premios  AMCL fue nominado 80 veces de los cuales gano 10.</a>
        </div>
        <Fouter/>
    </div>
  )
}

