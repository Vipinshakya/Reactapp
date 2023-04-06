import React from 'react'
import './Who.css'
import Line from '../assets/moon.png'

function Who() {
  return (
<div className="Whosection">


<div className="left">

 

  <img className='Imgline' src={Line} alt="" />
  
</div>
<div className="right">
 
 <h1 className='whoheading'>Think outside the sqaure space</h1>
 <h4 className='whodesc'>Who we are</h4>

<p>we enjoy create delightful human-centerd digital experices</p>
<button className='button'>see our works</button>
</div>
</div>
  )
}

export default Who
