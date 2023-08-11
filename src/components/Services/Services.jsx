import React from 'react'
import './services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Resume.pdf'
import {themeContext} from "../../Context";
import {useContext} from "react";
import { motion } from 'framer-motion';
const Services = () => {
    const theme =useContext(themeContext);
    const darkMode= theme.state.darkMode;



  return (
    <div className="services" id='services'>
        <div className="awesome">
<span style={{color:darkMode? 'white': ''}}>WHO AM</span>
<span>I ?</span>
<spane>As a young passionate Computer Science Undergrad I am constantly indulged in learning<br />
fullstack development, UI/UX designing. Also I'm particularly drawn to emerging technologies <br />such as AI, ML and Data Science.
   
    </spane>
    <a href={Resume} download> 
    <button className='button s-button'>Download Resume</button>
    </a>
   
    <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
        </div>
        <div className="cards">
<motion.div 

initial={{left:'25rem'}}
animate={{left:'14rem'}}

transition={{duration:1, type:'spring'}}


style={{left:'14rem'}}>
    <Card emoji={HeartEmoji}
    heading={'Design'}
    detail={"Figma, Sketch, Photoshop, Adobe, Canva"}
    link={`${process.env.PUBLIC_URL}/design.html`}
    />
</motion.div>
{/* //2nd card */}
<motion.div 

initial={{left:'-11rem', top:'12rem'}}
animate={{left:'-4rem'}}

transition={{duration:1, type:'useScroll'}}
style={{top:'12rem', left: '-4rem'}}>
    <Card emoji={Glasses}
    heading={'Developer'}
    detail={"HTML, CSS, JavaScript, ReactJs, NodeJs"}
    link={`${process.env.PUBLIC_URL}/dev.html`}
    />
</motion.div>
{/* 3rd card */}
<motion.div

initial={{ top: "19rem", left: "25rem" }}
animate={{left:'12rem'}}

transition={{duration:1, type:'spring'}}

style={{top:'19rem', left: '12rem'}}>
    <Card emoji={Humble}
    heading={'Competitive Coding'}
    detail={"C, C++, Java, Python, SQL, R Algorithm"}
    link={`https://leetcode.com/`}
    />
</motion.div>
<div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>

    </div>
  )
}

export default Services