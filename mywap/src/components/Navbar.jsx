import React from 'react'

import  './Navbar.css'
import Icon from "../assets/search.png"



function Navbar() {
  return (
   
   <section align="center" >
   <container className='head'>
 <div className="link">
  <h1>Logo</h1>
  <list className='list' >
  <li>Home</li>
  <li>Studio</li>
  <li>Works</li>
  <li>Contact</li>
  </list>
 </div>
 <icon className="ico">
<img className='icon' src={Icon} alt="" />
<button className='btn'>share</button>
 </icon>
   </container>
   </section>
  )
}

export default Navbar

