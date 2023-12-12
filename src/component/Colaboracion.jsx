import React from 'react'
import col from '../Images/cola3.jpg';
import col1 from '../Images/cola2.jpg';
import col2 from '../Images/cola1.jpg';
import col3 from '../Images/cola4.jpg';
import col4 from '../Images/cola5.jpg';
import col5 from '../Images/cola6.jpg';
import col6 from '../Images/cola7.jpg';
import col7 from '../Images/cola8.jpg';
import col8 from '../Images/cola9.jpg';
import { Fouter } from './Fouter';
export const Colaboracion = () => {
  return (
    <>
    <center>
        <div className='container'style={{marginTop:20}}>
            <div className="row">
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={col} alt='...'/>
                    <h2>Maecela Gandara</h2>
                    <p>Marcela Gándara Zúñiga es una cantante y compositora mexicana de música cristiana. Hasta la actualidad, ha producido seis álbumes, entre los cuales se encuentran, Más que un anhelo, ¡Digno es el Señor!, Marcela Gándara en vivo desde Panamá, El mismo cielo, Live y Cerca estás.</p>
                    
                </div>
                <div class="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={col1} alt='...'/> 
                    <h2>Funky</h2>
                    <p>Luis Marrero, más conocido por su nombre artístico Funky es un rapero y compositor puertorriqueño de hip hop y reguetón cristiano.</p>
                    
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={col2} alt='...'/>
                    <h2>Jesus Adrian R</h2>
                    <p>Jesús Adrián Romero Ibarra es un cantante y compositor mexicano.​ Se le considera uno de los artistas más representativos de la música cristiana en América Latina.​​​​</p>
                    
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={col3} alt='...'/>
                    <h2>Marcos Witt</h2>
                    <p>Jonathan Mark Witt Holder, conocido simplemente como Marcos Witt, ​ es un cantante, compositor, autor, conferencista, y pastor mexicano estadounidense.​ Entre 2002 y 2012 fue pastor del ministerio hispano en la Iglesia Lakewood, junto a su esposa Miriam Lee.​</p>
                  
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={col4} alt='...'/>
                    <h2>Lilly Goodman</h2>
                    <p>Liliana Goodman Meregildo más conocida como Lilly Goodman, es una cantante y compositora dominicana de música cristiana. Entre su discografía, se encuentran los álbumes Contigo Dios, Vuelve a casa, Sobreviviré, Sin miedo a nada, La compilación, Amor, favor y gracia y A viva voz.​​​​</p>
                   
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={col5} alt='...'/>
                    <h2>Redimi2</h2>
                    <p>Willy González Cruz, ​ conocido como Redimi2, es un rapero dominicano de música cristiana.​​ Es considerado uno de los principales exponentes de rap cristiano.​​​​​​</p>
                    
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={col6} alt='...'/>
                    <h2>Barak</h2>
                    <p>Grupo Barak, también conocido como Barak es una banda de música cristiana originaria de Santo Domingo, República Dominicana. El significado etimológicamente de Barak, cuyo nombre tiene su origen en el antiguo hebreo, ​​ en español es «Postrado en adoración».​ ​​​​</p>
                
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={col7} alt='...'/>
                    <h2>Evan Craft</h2>
                    <p>Evan Kenneth Craft, ​ es un cantante de música cristiana contemporánea. Evan ha grabado música en español e inglés.​​​​​</p>
                   
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={col8} alt='...'/>
                    <h2>Jacobo Ramos</h2>
                    <p>Jacobo E. Ramos Marco, conocido simplemente como Jacobo Ramos es cantante, compositor, escritor de libros y pastor.​</p>
                
                </div>
                </div>
            <Fouter/>
        </div>
    </center>
    </>
  )
}
