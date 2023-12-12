import React from 'react'
import vid from '../Images/video1.mp4';
import vid1 from '../Images/video2.mp4';
import vid2 from '../Images/video3.mp4';
import ReactPlayer from 'react-player';
import { Fouter } from './Fouter';
export const Video = () => {
  return (
    <div className='container' style={{paddingTop:20}}>
    <center>
        <h2>Videocilps Famosos</h2>
    
        <div className='video'>
        <ReactPlayer url={vid} controls/>
        <br/>
        <ReactPlayer url={vid1} controls/>
        <br/>
        <ReactPlayer url={vid2} controls/>
        </div>
    
      </center>
      <Fouter/>
    </div>
  )
}
