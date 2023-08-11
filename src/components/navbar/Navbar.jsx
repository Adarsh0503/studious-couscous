import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'


function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Adarsh</div>
            <Toggle />
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>

                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='services' smooth={true} activeClass='activeClass'>
                    <li>About</li>
                    </Link>
                    {/* <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>
                    <li>Experience</li>
                    </Link> */}
                    <Link spy={true} to='portfolio' smooth={true} activeClass='activeClass'>
                    <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                    <li>Contact</li>
                    </Link>
                    </ul>
            </div>
            <Link spy={true} to='portfolio' smooth={true} activeClass='activeClass'>
            <button className="button n-button">
                Contact
            </button>
                    </Link>
           
        </div>
    </div>
  )
}

export default Navbar