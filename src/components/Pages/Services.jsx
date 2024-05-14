import React, { useState, useEffect } from 'react';
import './Services.css';
import handyMan  from '../../assests/handyMan.jpg';
import electrical  from '../../assests/electrical.jpg';
import plumber  from '../../assests/plumber.jpg';
import locksmith  from '../../assests/locksmith.jpg';
import hvac from '../../assests/hvac.jpg';
import appliance  from '../../assests/appliance.jpg';

export const Services = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped); 
  }

  useEffect(() => {
    document.title = "Paragon facility | Services";
  }, []);

  return (
    <>
    <div className='Services-Heading'>
      <h1 style={{ fontWeight: 'bold', fontSize: '80px', color: '#c5cbd1' }}>
        Our
        <span style={{ fontWeight: 'bold', color: '#1d394c' }}> Services</span>
      </h1>
      <h2>Home / <span className='services'>Services</span></h2>
    </div>
    
  
    <section className='services-section'>
    <div className="services-title" >
      <h1>We provide all kinds of maintenance services</h1>
    </div>
    </section>

    <section style={{backgroundColor: 'white', padding: '40px'}}>
   <div className='services-cards-container '>

    <div className="flip-card" onClick={handleFlip}>
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          
          <img src={handyMan} alt="Avatar" />
        </div>
        <div className="flip-card-back">
          <h1>HANDYMAN</h1>
          <p>Our company offers a wide range of professional handyman services for both residential and commercial clients. 
            Our skilled team is committed to delivering comprehensive solutions with a high level of expertise and professionalism across all projects. 
            From routine maintenance to complex repairs and installations, we pride ourselves on providing flexible, reliable service for a variety of handyman needs.
             Driven by a dedication to quality and efficiency, our goal is to exceed client expectations through exceptional service.

          </p>
        </div>
      </div>
    </div>

    <div className="flip-card" onClick={handleFlip}>
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          
          <img src={plumber} alt="Avatar" />
        </div>
        <div className="flip-card-back">
          <h1>PLUMBING</h1>
          <p>We specialize in offering a complete range of professional plumbing services,
             tailored to meet diverse needs for both residential and commercial properties. 
             Our team of certified professionals is well-equipped to deliver a comprehensive suite of solutions,
              ensuring the highest standards of expertise and professionalism. From routine maintenance to intricate repairs and installations, 
            we pride ourselves on providing a versatile and reliable service that caters to a broad spectrum of plumbing requirements.</p>
        </div>
      </div>
    </div>

    <div className="flip-card" onClick={handleFlip}>
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          
          <img src={electrical} alt="Avatar" />
        </div>
        <div className="flip-card-back">
          <h1>ELECTRICAL</h1>
          <p>We are a company that provides professional electrical services for any kind of need. Whether you need to install, repair, or maintain your electrical systems,
             we have the expertise and experience to handle it.
              We work with both residential and commercial customers and offer quality work at affordable prices. 
              We have a team of certified and licensed electricians who can perform any electrical task, from wiring and lighting to generators and solar panels. 
              We are committed to customer satisfaction and safety and follow the highest standards of the industry. Contact us today and let us take care of your electrical needs.</p>
        </div>
      </div>
    </div> 

    <div className="flip-card" onClick={handleFlip}>
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          
          <img src={locksmith} alt="Avatar" />
        </div>
        <div className="flip-card-back">
          <h1>LOCKSMITH</h1>
          <p>Our company is a professional locksmith service provider that can meet any kind of locksmith needs. 
            Whether you need to install, repair, or replace your locks, keys, or security systems, 
            we have the skills and experience to do it. We work with both residential and commercial customers and provide quality work at fair prices.
             We have a team of insured and licensed locksmiths who can do any locksmith job, from making and copying keys to setting up and programming smart locks and alarms.
              We are dedicated to customer satisfaction and security and follow the best practices of the industry.</p>
        </div>
      </div>
    </div> 

    <div className="flip-card" onClick={handleFlip}>
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          
          <img src={hvac} alt="Avatar" />
        </div>
        <div className="flip-card-back">
        <h1>HVAC</h1>
          <p>With a primary focus on customer satisfaction, 
            our company specializes in delivering a wide range of professional HVAC services. 
            Our skilled technicians are trained in handling various types and models of HVAC equipment, 
            ensuring efficient and effective solutions for installation, repair, maintenance, and replacement of HVAC systems. 
            We take great pride in providing prompt, reliable, and cost-effective services, and offer a comprehensive range of solutions to meet your specific requirements. 
            Rest assured, your heating and cooling systems are in capable and trusted hands with us.</p>
        </div>
      </div>
    </div> 

    <div className="flip-card" onClick={handleFlip}>
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          
          <img src={appliance} alt="Avatar" />
        </div>
        <div className="flip-card-back">
          <h1>APPLIANCE</h1>
          <p>With our extensive range of professional appliance services,
             you can trust that your appliances are in capable and trusted hands. 
             We are a company that offers comprehensive installation, repair, maintenance, and replacement services for a wide variety of appliances.
              Our skilled and experienced team is well-versed in handling all types and brands of appliances, 
              from kitchen appliances to laundry machines and more. We prioritize customer satisfaction and aim to provide prompt, reliable, 
              and cost-effective services. Rest assured, whatever your appliance needs may be, 
              our technicians have the expertise to ensure efficient and effective solutions.</p>
        </div>
      </div>
    </div> 
</div>   


 </section>
    
      </>
    )
}
