import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import {themeContext} from "../../Context";
import {useContext} from "react";

function Contact() {
    const theme =useContext(themeContext);
    const darkMode= theme.state.darkMode;
    const form = useRef();
    const [done,setDone]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_rcghkvb', 'template_c9uffs8', form.current, 'my-iaipk3l0UDlA84')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };





  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color:darkMode?'white':''}}>Get in Touch</span>
                <span>Contact me</span>
                <div className="blur s-blur" style={{background:'#ABF1FF94'}}></div>
            </div>
        </div>
        <div className="c-right">
            <form  ref={form} onSubmit={sendEmail}>
                <input type="text" name= "user_name" className="user" placeholder='Name' />
                <input type="email" name= "user_email" className="user" placeholder='E-mail' />
                <textarea name="message" className='user' placeholder='Message' />
                <input type="submit" value="Send" className="button" />
                <span>{done && "Thnaks for contacting me!" }</span>
                <div className="blur c-blur" style={{background: "var(--purple)"}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact