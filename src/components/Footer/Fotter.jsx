import React from 'react'
import './Fotter.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkdein from '@iconscout/react-unicons/icons/uil-linkedin'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
function Fotter() {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:'100%'}}/>
        <div className="f-content">
            <span>adarshgaurao@gmail.com</span>
            <div className="f-icons">
                <a href="https://www.instagram.com/adarshgaurav0503/"><Insta color ='white' size='3rem'/></a>  
                <a href="https://www.linkedin.com/in/adarsh-gaurav-3595b6219/"><Linkdein color ='white' size='3rem'/></a>
                <a href="https://www.facebook.com/adarsh.gaurao"><Facebook color ='white' size='3rem'/></a>
                <a href="https://github.com/Adarsh0503"><Github color ='white' size='3rem'/></a>
            </div>
            <span>Design and coded by Adarsh </span>

        </div>
    </div>
  )
}

export default Fotter