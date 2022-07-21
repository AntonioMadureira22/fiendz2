import React from 'react'
import {  Link } from 'react-router-dom'


//stylesheet
import "../components/css/Inside.css"

//Images
import inside from "../components/images/FInside.jfif"
import wanted from "../components/images/wanted.png"
import map from "../components/images/map.jfif"

function Inside() {
  return (
    <div className='last'>
      <img  classname='store' src= {inside} alt='in side the store' width="100%" height="725px" />
    <div className='wanted'>
      <Link to="/Team">
      <img className='img4' src={wanted} alt="wanted poster" />
      </Link>
    </div>
    <div className='map'>
      <Link to='/RoadMap'>
        <img className='img5' src={map} alt='map'/>
      </Link>
    </div>
    </div>

    
  )
}

export default Inside