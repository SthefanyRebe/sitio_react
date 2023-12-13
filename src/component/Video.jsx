import React from 'react'
import vid from '../Images/video1.mp4';
import vid1 from '../Images/video2.mp4';
import vid2 from '../Images/video3.mp4';
import ReactPlayer from 'react-player';
import { Fouter } from './Fouter';
export const Video = () => {
  return (
    <div className='container' style={{paddingTop:20}}>
        <h2>Videocilps Famosos</h2>
      <div class="card mb-3">
           <ReactPlayer url={vid} controls loop width="100%"/>
          <div class="card-body">
            <h5 class="card-title">No fue un tiro de Suerte </h5>
            <p class="card-text"><small class="text-muted">videoclip1</small></p>
          </div>
      </div>
      <div class="card mb-3">
           <ReactPlayer url={vid1} controls loop width="100%"/>
          <div class="card-body">
            <h5 class="card-title">Derroche de Amor </h5>
            <p class="card-text"><small class="text-muted">videoclip2</small></p>
          </div>
      </div>
      <div class="card mb-3">
           <ReactPlayer url={vid2} controls loop width="100%"/>
          <div class="card-body">
            <h5 class="card-title">Tu poeta </h5>
            <p class="card-text"><small class="text-muted">videoclip3</small></p>
          </div>
      </div>
      <Fouter/>
    </div>
  )
}
