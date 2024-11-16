import React from 'react'
import Hero from './Hero/Hero'
import FeaturedProperties from './FeaturedP/FeaturedProperties'
import Contact from './Contact/Contact'

import AboutUs from './About US/AboutUs'; // Import AboutUs component

import Footer from './Footer/Footer'; // Import Footer component

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <FeaturedProperties></FeaturedProperties>
    {/* <SearchPage></SearchPage> */}
    <Contact></Contact> 
     <AboutUs></AboutUs>
    
    <Footer></Footer>
    </div>
  )
}

export default Home
