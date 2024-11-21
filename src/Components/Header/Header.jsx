import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <section className="h-wrapper">
    <div className="flexCenter padding innerwidth h-container">
      <img src= "./file.png" alt ="logo" width={90}></img>
      <p className='Nav-Dr'>Dream Realty</p>

      <div className="flexCenter h-menu">
       <Link to='/'>
        HOME
       </Link>
       <Link to='/FeaturedProperties'>
       PROPERTIES
       </Link>
       <Link to='/About'>
        ABOUT US
       </Link>
       <Link to='/Contact Us'>
       CONTACT
       </Link>
       
{/*        <button className='buttons'>EXPLORE MORE</button> */}
        
        

      
        {/* <a href="">Properties</a>
        <a href="">About Us</a>
        <a href="">Contact Us</a>
        <button className="buttons">
        <a href="">Explore More</a>
        </button> */}
      </div>
    </div>
  </section>
  )
}

export default Header
