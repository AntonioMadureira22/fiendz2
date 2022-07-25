import React from 'react'
import {  Link } from 'react-router-dom'


//stylesheet
import "../components/css/Inside.css"

//Images
import inside from "../components/images/FInside.jfif"
import wanted from "../components/images/wanted.png"
import shirt from "../components/images/shirtz.png"
import world from "../components/images/world.png"
import traitz from "../components/images/traits.png"
import os from "../components/images/OSlogo.png"
import discord from "../components/images/discordd.png"
import tweet from "../components/images/tweet.png"
import nip from  "../components/images/nipzz.png"

function Inside() {
  return (
    <div className='last'>
      <img  className='store' src= {inside} alt='in side the store' width="100%" height="725px" />
    <div className='wanted'>
      <Link to="/Team">
      <img className='img4' src={wanted} alt="wanted poster" />
      </Link>
    </div>
    <div className='world'>
      <Link to='/RoadMap'>
        <img className='img5' src={world} alt='road map' />
      </Link>
    </div>
    <div className='shirt'>
      <Link to='/Merch'>
        <img className='img6' src={shirt} alt='shirt' />
      </Link>
    </div>
    <div className='meow'>
      <Link to="/Traits">
        <img className='img7' src={traitz}  alt='meow'/>
      </Link>
    </div>
    <div className='openSea'>
      <a href='https://opensea.io/collection/felinefiendznft' target='_blank' rel='noreferrer'> 
      <img className='img8' src={os} alt='opensea logo'/>
      </a>
    </div>
    <div className='discord'>
      <a href='https://discord.com/channels/934616456015007815/934630807723716608' target='_blank' rel='noreferrer'>
        <img className="img9" src={discord} alt='discord logo' />
      </a>
    </div>
    <div className='tweet'>
      <a href='https://twitter.com/FelineFiendz' target='_blank' rel='noreferrer'>
        <img className="img10" src={tweet} alt='twitter logo' />
      </a>
    </div>
    <div className='nipz'>
      <Link to="/nip">
        <img className='img11' src={nip}  alt='nip bag'/>
      </Link>
    </div>
    </div>

    
  )
}

export default Inside