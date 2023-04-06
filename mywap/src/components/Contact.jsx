import React from 'react'
import './Contact.css'
import Test from './Test'


function Contact() {
  return (
   <div className="Contactsection" align="center"
   >
   <div className="Contactleft" >
    <form  >
   <h1>Contact us</h1>
    <input type="text" placeholder='name'/>
    <br />
   <br />

    <input type="email" placeholder='email' />
    <br />
    <br />
    <textarea name="write your message" id="" cols="45" rows="10" placeholder='write a message'>
     
      </textarea>
      <br />
    <button> send </button>
    </form>
   </div>
   <div className="right">
  <Test/>
   </div>
   </div>
  )
}

export default Contact
