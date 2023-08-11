import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Boy from '../../img/boy.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import thumbup from '../../img/thumbup.png';
import glasses from '../../img/glassesimoji.png';
import Crown from '../../img/crown.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {themeContext} from "../../Context";
import {useContext} from "react";
import { motion } from "framer-motion"
import { Link } from "react-scroll";

import { useState, useEffect } from 'react';

function Intro() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const introSection = document.querySelector('.intro');
      if (introSection) {
        const introRect = introSection.getBoundingClientRect();
        setIsVisible(introRect.top < window.innerHeight);
      }
    };

       window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);







  const theme =useContext(themeContext);
  const darkMode= theme.state.darkMode;
  
  return (
    <div className="intro" id='intro'>
        <div className="i-left">
        <div className="i-name">
            <span style={{color: darkMode?'white':''}}>Hi! I Am </span>
            <span>Adarsh Gaurav</span>
            <span>Frontend Developer with curiosity
                 to learn each moment</span>
        </div>
        <Link to="Contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* <button className="button i-button">
            Hire me
        </button> */}
        <div className="i-icons">
          <a href='https://github.com/Adarsh0503'> <img src={Github} alt="" /></a>
          <a href='https://www.linkedin.com/in/adarsh-gaurav-3595b6219/'> <img src={Linkedin} alt="" /></a>
          <a href='https://www.instagram.com/adarshgaurav0503/'> `<img src={Instagram} alt="" /></a>
           
           
            
        </div>
        </div>
        <div className="i-right">
       <img src={Vector1} alt="" />
       <img src={Vector2} alt="" />
       <img src={Boy} alt="" />
       <motion.img 
       initial={{left:'-36%'}}
       animate={{left:'-24%'}}
       transition={{duration:2, type:'spring'}}

       
       
       src={glasses} alt="" />
       <motion.div
       initial={{top:'-4%', left:'74%'}}
       animate={{left:'68%'}}
       transition={{duration:2, type:'spring'}}
       style={{top:'-4%', left:'68%'}} 
       className='floating-div'>
        <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/> 
              </motion.div>
              <motion.div
              
              initial={{left:'9rem', top:'18rem'}}
              animate={{left:'0rem'}}
              transition={{duration:2, type:'spring'}}
              
              style={{top: '18rem', left: '0rem'}}
              className='floating-div'>
                <FloatingDiv image={thumbup} txt1="Computer Science " txt2="Student"/>
              </motion.div>
{/* these are blurred div */}
<div className='blur' style={{background:"rgb(238 210 255)"}}></div>
        
        <div className="blur" style={{background: "rgb(193 245 255)", top:'17rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>
    </div>
    </div>
  )
}

export default Intro