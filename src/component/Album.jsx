import React from 'react'
import { Fouter } from './Fouter'
import bum from '../Images/alb1.jpg';
import bum1 from '../Images/alb2.jpg';
import bum2 from '../Images/alb3.jpg';
import bum3 from '../Images/c2.jpg';
import bum4 from '../Images/c1.jpg';
import bum5 from '../Images/alb4.jpg';
import bum6 from '../Images/alb5.jpg';
import bum7 from '../Images/alb6.jpg';
import bum8 from '../Images/alb7.jpg';
import bum9 from '../Images/alb8.jpg';

export const Album = () => {
  return (
    <div className='container'>
        <div className="row" tyle={{marginTop:20}}>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={bum} alt='...'/>
                    <h2>Renovado</h2>
                    <p></p>
                    
                </div>
                <div class="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={bum1} alt='...'/> 
                    <h2>Como un Niño</h2>
                    <p></p>
                </div> 
                <div class="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={bum2} alt='...'/> 
                    <h2>Cuidare de ti</h2>
                    <p></p>
                    
                </div> 
                <div class="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={bum3} alt='...'/> 
                    <h2>El sonido del Silencio</h2>
                    <p></p>
                    
                </div> 
                <div class="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={bum4} alt='...'/> 
                    <h2>Derroche de Amor</h2>
                    <p></p>
                    
                </div> 
                <div class="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={bum5} alt='...'/> 
                    <h2>Momentos</h2>
                    <p></p>
                    
                </div> 
                <div class="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={bum6} alt='...'/> 
                    <h2>Lenguaje de Amor</h2>
                    <p></p>
                    
                </div> 
                <div class="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={bum7} alt='...'/> 
                    <h2>Vida</h2>
                    <p></p>
                    
                </div> 
                <div class="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={bum8} alt='...'/> 
                    <h2>Soldados</h2>
                    <p></p>
                    
                </div> 
                <center>
                <div class="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={bum9} alt='...'/> 
                    <h2>Como en casa</h2>
                    <p></p>
                </div> 
                </center>
            </div>
    <table class="table" tyle={{marginTop:20}}>
            <thead class="table-light">
                <tr>
                    <td>#</td>
                    <td>Nombre</td>
                    <td>Año</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                        <td>1</td>
                        <td>El sonido del silencio</td>
                        <td>2006</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Deroche de Amor</td>
                        <td>2015</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Momentos</td>
                        <td>2017</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Cuidare de ti</td>
                        <td>2008</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Lenguaje de Amor</td>
                        <td>2010</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Como un Niño</td>
                        <td>2005</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>vida</td>
                        <td>2023</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Renovado</td>
                        <td>2021</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Soldados</td>
                        <td>2020</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Te Puedo Sentir</td>
                        <td>2009</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Como en Casa</td>
                        <td>2018</td>
                    </tr>
            </tbody>
  </table>
  <Fouter/>
 </div>
  )
}
