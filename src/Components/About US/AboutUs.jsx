import React from 'react';
import './AboutUs.css';  // Make sure you have your styles correctly imported
import { useNavigate } from 'react-router-dom';
const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <section className="about-us">
      <div className="about-us-content">
        <div className="text-content">
        <div className='abt-nav'>
        <h3 className="abt-head">About Us</h3>
        <button className='butt' onClick={()=>{navigate('/')}}>HOME</button>
        </div>
        
        <div className='abt-cont'>
          <h2>Built by the industry, </h2>
         <h2> for the industry.</h2>
         <p>We are a leading company in the industry with a focus on innovation and customer satisfaction. Our mission is to deliver high-quality products and services that make a difference.</p>
         <p>With years of experience and a passionate team, we aim to lead in our sector and exceed expectations.</p>
          <p>The <strong>RealEstate</strong> is a network of 4.5M+ homes across the country representing the nation’s leading residential owners and 
            operators.</p> 
          <p>Together, we’ve developed a revolutionary rewards and payments platform that redefines the residential experience and unlocks a powerful set of capabilities for new revenue and cost savings.</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutUs;
