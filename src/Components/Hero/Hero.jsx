import React from 'react'

import './Hero.css'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'



const Hero = () => {
   const navigate = useNavigate();

  return (
   <>
      <Header></Header>
     <section className='hero-wrapper'>
     <div className="padding innerWidht hero-container ">
         
     </div>

     <div className="hero-left">
        <h2>FIND YOUR DREAM HOME WITH US</h2>
        <p> Explore the best property in your area</p>
        
        <button className="button" onClick={()=>navigate('SearchPage')}>
        Start Your Search
        </button>
        
      
      
         
     </div>
      
      {/* <div className="flexCenter hero-right">
         <div className="image-container">
            <img src="./hero-image.png"></img>
         </div>
      </div> */}
      </section>
  </>  
   
  )
}

export default Hero
