import React from 'react';
import HeroImage from '../assets/images/Hero Image-min.png'

const HeroSection = () => {
  return (  
    <section className="pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mt-xl-5">
            <h1 className="font-weight-bold text-white py-5">Hi, I'm <span className="primary-text">Kevin ISHIMWE</span></h1>
            <p className="text-white">
              I am a self-motivated, ambitious person who has developed a mature and responsible approach to
              any task that I undertake. 
            </p>
            <p className="text-white">
              I'm a Full Stack developer with skills in Web Apps Development basically <strong>2 years experience</strong>  in mobile development, 
              <strong> 4 years</strong>  in web development with a creative, adaptable nature and an eye for detail.
            </p>
            <p className="text-white">
              I pursue my passion for App Development (Web & Mobile) in a team where I can work collaboratively
              with others towards an objective of professional excellence, for a dynamic and fresh digital
              brand. 
            </p>
            <a  href="mailto:kevingarry97@gmail.com" className="btn primary-btn shadow border-radius px-5 py-2 mt-4"><strong>Hire me</strong></a>
          </div>
          <div className="col-lg-7 my-5">
            <img src={HeroImage} className="img-fluid" alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default HeroSection;