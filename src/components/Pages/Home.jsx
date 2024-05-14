import React, { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../assests/Logo.png";
import Logos from "../../assests/ParagonFacilityEmp.png";
import Tech from "../../assests/tech.jpg";
import './Home.css';

export const Home = () => {
  const [typeEffect] = useTypewriter({
    words: [' OUR DEPENDABLE SERVICES', ' OUR RELIABLE SOLUTIONS'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50
  });
  

  useEffect(() => {
    document.title = "Paragon facility";
  }, []);

  return (
    <div>
        <img src={Logo} alt="Paragon Facility" className="Logo" />  
    <div className='WelcomeContainer'>
      <div className='Welcome'>
        <h2 className='WelcomeHeading'>YOU CAN COUNT ON<span style={{ fontWeight: 'bold', color: '#1d394c' }}>{typeEffect}</span>
          <span>
            <Cursor />
          </span>
        </h2>
      </div>
    </div>
    <br></br><br></br>
    <section className="home-section" >
        <div className="title">
          <h1>WE ARE THE INDUSTRY LEADERS IN MAINTENANCE</h1>
          </div>
         <div className="detailsList">
         <h5 style={{color: '#33445c'}} className="details">
          <span className="FaIcon">
            <FontAwesomeIcon icon={faCheck} style={{color: '#33445c'}}/>
          </span>
          <span>Impeccable Planning</span>
        </h5>
        <h5 style={{color: '#33445c'}} className="details">
          <span className="FaIcon">
            <FontAwesomeIcon icon={faCheck} style={{color: '#33445c'}}/>
          </span>
          <span>Skilled Professionals</span>
        </h5>
        <h5 style={{color: '#33445c'}} className="details">
          <span className="FaIcon">
            <FontAwesomeIcon icon={faCheck} style={{color: '#33445c'}}/>
          </span>
          <span>Premier Work Processes</span>
        </h5>
          </div>
    </section>
    
    <div className="about-us-title"  style={{color: '#1d394c', fontSize: '50px', backgroundColor: '#f8f9fa', fontWeight: 'bold', textAlign: 'center'}}>
      <h1>About Us</h1>
    </div>

    <section className="aboutus" style={{backgroundColor: 'whitesmoke'}}>
    <div className="text-section"  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '50px', backgroundColor: '#f8f9fa' }}>
      <div style={{ flex: 1, paddingRight: '30px' }}>
        <h1 style={{ color: '#1d394c', marginBottom: '0.5em', fontSize: '40px', fontWeight: 'bold'}}>Welcome to Paragon Facility</h1>
        <h2 style={{ color: '#1d394c', fontWeight: 'bold' }}>The Leading Maintenance Service Provider Throughout the State!</h2>
        <p style={{ lineHeight: '1.6', fontSize: '1rem', color: '#33445c'}}>
          At Paragon Facility, we are proud to offer the finest team of employees and the best technicians in the industry. Our dedication to excellence and unparalleled expertise make us the preferred maintenance solution for clients throughout the state. We stand out through our exceptional services and commitment to ensuring customer satisfaction, establishing us as your dependable partner for all maintenance needs.
        </p>
        <div style={{ marginTop: '2em' }}>
        <h5 style={{color: '#33445c'}} className="details">
          <span className="FaIcon">
            <FontAwesomeIcon icon={faCheck} style={{color: '#33445c'}}/>
          </span>
          <span>Statewide Coverage</span>
        </h5>
        <h5 style={{color: '#33445c'}} className="details">
          <span className="FaIcon">
            <FontAwesomeIcon icon={faCheck} style={{color: '#33445c'}}/>
          </span>
          <span>24/7 Support</span>
        </h5>
        <h5 style={{color: '#33445c'}} className="details">
          <span className="FaIcon">
            <FontAwesomeIcon icon={faCheck} style={{color: '#33445c'}}/>
          </span>
          <span>Expert Team Members</span>
        </h5>
        <h5 style={{color: '#33445c'}} className="details">
          <span className="FaIcon">
            <FontAwesomeIcon icon={faCheck} style={{color: '#33445c'}}/>
          </span>
          <span>Competitive Pricing</span>
        </h5>
        </div>
        <button onClick={() => window.location.href='/contact'} className="aboutus-button">
          Contact Us <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div style={{ flex: 1 }}>
        <img src={Logos} alt="Paragon Facility Employees" className="image-section" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
    </div>
  
    </section>

   <div className="services-title"  style={{color: '#1d394c', fontSize: '50px', backgroundColor: '#f8f9fa', fontWeight: 'bold', textAlign: 'center'}}>
    <h1>Our Services</h1>
    </div>

<section className="services-section"  style={{backgroundColor: '#f8f9fa'}}>
  <div className="services-content" >
    <h1> We Provide all kinds of services</h1>
    <p>
      At Paragon Facility, we offer a comprehensive range of maintenance services designed to ensure the optimal functioning of your facilities. 
      Our expert team provides tailored solutions that include routine maintenance, emergency repairs, and long-term upkeep plans. 
      Our commitment to quality and efficiency is evident in every job we undertake, providing you with peace of mind and the support you need to keep your operations running smoothly.
    </p>
    <button onClick={() => window.location.href='/services'} className="services-button">
      Services <FontAwesomeIcon icon={faArrowRight} className="Arrow-Icon"/>
    </button>
  </div>
  <div className="services-image-container">
    <img src={Tech} alt="Paragon Facility Services" className="image-tech" />
  </div>
</section>
    </div>
  );
};
