import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from "../../assests/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.title = "Paragon facility | Contact Us";
  }, []);

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Full name is required.";
    tempErrors.email = formData.email ? (/\S+@\S+\.\S+/.test(formData.email) ? "" : "Email is not valid.") : "Email is required.";
    tempErrors.message = formData.message ? "" : "Message is required.";

    setErrors({ ...tempErrors });

    return Object.values(tempErrors).every(x => x === "");
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
    try{
      const response = await axios.post('http://localhost:8081/contact', formData);

      console.log(response.data);
      setFormData({name: '', email: '', message: ''});
    } catch (error) {
      console.log('Error sending message: ', error);
    }
  }
 };

  return (
    <div className='contact-container'>
      <img src={Logo} alt="Logo" className="contact-logo"/>

      <div className='contact-content'>    
        <h1>Contact Us</h1>
        <h4>Do you have any questions? Please do not hesitate to contact us directly.
           Our team will come back to you within a matter of hours to help you.
        </h4>
      <form onSubmit={handleSubmit} className='contact-form'>
        <div className='input-group'>
          <div className="floating-label-group">
            <input 
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder=''
              required
            />
            <label className="floating-label">Enter your full name</label>
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div className="floating-label-group">
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label className="floating-label">Enter your email</label>
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
        </div>
        <div className="floating-label-group">
          <textarea 
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder=' '
            required
          />
          <label className="floating-label">Enter your message</label>
          {errors.message && <div className="error">{errors.message}</div>}
        </div>  
        <div className="contact-form-button-container">
            <button type='submit'>
              <FontAwesomeIcon icon={faEnvelope} className='Envelope-Icon'/> Send Message
            </button>
          </div>      
        </form>
    </div>
    </div>
  );
};