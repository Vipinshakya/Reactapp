import React from 'react'
import './works.css'

const data=[
  "web design",
  "Development",
  "illustration",
  "product Design",
  "Social Media"
];

function Works() {
  return (
<div className="Worksection">
 <div className="left">
 {data.map((item)=>{
  return(
    <li>{item} </li>
  )
  
 })
 }

 </div>
 <div className="right"></div>
</div>
  )
}

export default Works
