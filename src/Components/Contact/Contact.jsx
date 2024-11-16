import React, { useState } from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    // Handle form submission (e.g., send data to a server)
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-us">
      
      <div className='con-nav'>
        <h3 className="cont-head">Contact Us</h3>
        <button className='buttns' onClick={()=>{navigate('/')}}>HOME</button>
       </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
