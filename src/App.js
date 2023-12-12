import logo from './logo.svg';
import './App.css';
import { Header } from './component/Header';
import { Introduccion } from './component/Introduccion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorNotFound } from './component/ErrorNotFound';
import { Colaboracion } from './component/Colaboracion';
import { Biografia } from './component/Biografia';
import { Cancion } from './component/Cancion';
import { Credito } from './component/Credito';
import { Formulario } from './component/Formulario';
import { Album } from './component/Album';
import { Cociertos } from './component/Cociertos';
import { Comienzo } from './component/Comienzo';
import { Video } from './component/Video';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route extact path="/Introduccion" element={<Introduccion/>}/>
          <Route extact path='*' element={<ErrorNotFound/>}/>
          <Route extact path='/colaboracion' element={<Colaboracion/>}/>
          <Route extact path='/Biografia' element={<Biografia/>}/>
          <Route extact path='/Cancion' element={<Cancion/>}/>
          <Route extact path='/Credito' element={<Credito/>}/>
          <Route extact path='/Mensaje' element={<Formulario/>}/>
          <Route extact path='/Album' element={<Album/>}/>
          <Route extact path='/Concierto' element={<Cociertos/>}/>
          <Route extact path='/Comienzo' element={<Comienzo/>}/>
          <Route extact path='/Video' element={<Video/>}/>
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
