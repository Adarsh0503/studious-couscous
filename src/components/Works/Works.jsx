import React from 'react'
import './Works.css'
import {Swiper, SwiperSlide} from 'swiper/react'

import Doc from "../../img/doc.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png";
import Picture from "../../img/port.png"
import 'swiper/css'
import {themeContext} from "../../Context";
import {useContext} from "react";
function Works() {
    const theme =useContext(themeContext);
    const darkMode= theme.state.darkMode;
  return (
    <div className="portfolio" id='portfolio'>
        {/* heading */}
        <span style={{color:darkMode?'white':''}}>Recent Projects</span>
        <span>Portfolio</span>



        <Swiper spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'  
        
        >
<SwiperSlide>
    <img src={Doc} alt="" />
</SwiperSlide>
<SwiperSlide>
    <img src={Picture} alt="" />
</SwiperSlide>
<SwiperSlide>
    <img src={MusicApp} alt="" />
</SwiperSlide>
<SwiperSlide>
    <img src={HOC} alt="" />
</SwiperSlide>


        </Swiper>
    </div>
   
  )
}

export default Works