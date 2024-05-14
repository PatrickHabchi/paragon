import React, {useState} from 'react'
import { Helmet } from 'react-helmet';
import { faLocationDot, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import  Logo  from '../../assests/Logo.png';
import { NavLink } from "react-router-dom";



export const Footer = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
      </Helmet>
    <footer className="relative bg-blueGray-200 pt-6 pb-6">
    <div className="container mx-auto">
      <div className="flex flex-wrap text-left lg:text-left">
        <div className="w-full lg:w-6/12 px-4">
        <div className="flex items-center">      
          <img src={Logo} alt="Paragon Facility" className="ftLogo m-2" /> 
          <h5 className="text-3xl font-semibold text-blueGray-700 mr-2">Paragon Facility</h5>
          </div>
          <p className="text-lg mt-0 mb-2 text-blueGray-600">
          The company excels in facility maintenance, providing services in electrical, plumbing, locksmith, HVAC, and appliance repairs. 
          Their skilled team offers expert solutions tailored to businesses unique needs, ensuring reliable and high-quality service.
          </p>
        </div>
        
        <div className="w-full lg:w-6/12 px-6">
          <div className="flex flex-wrap items-top mb-6  pt-2">
            <div className="w-full lg:w-4/12 px-6 ml-auto">
              <span className="block uppercase text-blueGray-500 text-md font-semibold mb-2">Pages</span>
              <ul className="list-unstyled">
                <li>
                 <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Home</a>
                </li>
                <li>
                <button onClick={() => window.location.href='/services'} className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >
                  Services 
                </button>
                </li>
                <li>
                <button onClick={() => window.location.href='/contact'} className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                  Contact Us
                </button>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-6/12 px-6">
              <span className="block uppercase text-blueGray-500 text-md font-semibold mb-2">Contact</span>
              <ul className="list-unstyled">
                <li  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                <FontAwesomeIcon icon={faLocationDot} /> 23 BROAD STREET Pl WEYMOUTH, MA 02188                                  
                </li>
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="tel:+13392090004">
                    <FontAwesomeIcon icon={faPhone} /> (339) 209-0004
                  </a>
                </li>

                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="mailto:info@paragonfacility.com">
                    <FontAwesomeIcon icon={faEnvelope} /> info@paragonfacility.com
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-blueGray-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
             © <span id="get-current-year">Paragon Facility. All Rights Reserved.</span>
            
              
          
          </div>
        </div>
      </div>
    </div>
  </footer>
</>
  );
}