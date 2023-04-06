import React from 'react'
import './Hero.css'
import Navbar from './Navbar'
import Line from "../assets/moon.png"



function Hero() {
  return (
    <div className='HeroSection' align="center" >
      <Navbar/>
    <container className="Hero" >

<div className="left">

  <h1>Think. Make. Solve.</h1>


<p>we enjoy create delightful human-centerd digital experices</p>
<button className='button'>Learn Now</button>

  
</div>
<div className="right">
<img className='Imgline' src={Line} alt="" />
</div>
    </container>
    </div>
  )
}

export default Hero
