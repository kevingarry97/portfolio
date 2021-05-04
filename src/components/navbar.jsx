import React, { useState } from 'react';
import Linkedin from '../assets/images/Linkedin-min.png';
import Github from '../assets/images/Github-min.png';
import Mail from '../assets/images/Mail-min.png';
import LinkedinDark from '../assets/images/Linkedin-dark-min.png';
import GithubDark from '../assets/images/Github-dark-min.png';
import MailDark from '../assets/images/Mail-dark-min.png';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
		if (window.scrollY >= 50) return setNavbar(true);

		return setNavbar(false);
	};

	window.addEventListener('scroll', changeBackground);

  return (  
    <>
      <nav className={navbar ? "navbar navbar-expand-md navbar-light fixed-top active shadow" : "navbar navbar-expand-md navbar-light fixed-top"}>
        <div className="container">
          <div className="navbar-brand" href="#">
            {!navbar && <>
              <span className="mx-1">
                <a href="https://www.linkedin.com/in/kevin-ishimwe-335251133/">
                  <img src={Linkedin} className="img-fluid" alt=""/>
                </a>
              </span>
              <span className="mx-1">
                <a href="https://github.com/kevingarry97">
                  <img src={Github} className="img-fluid" alt=""/>
                </a>
              </span>
              <span className="mx-1">
                <a href="#">
                  <img src={Mail} className="img-fluid" alt=""/>
                </a>
              </span>
            </>}
            {navbar && <>
              <span className="mx-1">
                <a href="https://www.linkedin.com/in/kevin-ishimwe-335251133/">
                  <img src={LinkedinDark} className="img-fluid" alt=""/>
                </a>
              </span>
              <span className="mx-1">
                <a href="https://github.com/kevingarry97">
                  <img src={GithubDark} className="img-fluid" alt=""/>
                </a>
              </span>
              <span className="mx-1">
                <a href="#">
                  <img src={MailDark} className="img-fluid" alt=""/>
                </a>
              </span>
            </>}
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className={navbar ? "fa fa-bars fa-2x text-dark px-2" : "fa fa-bars fa-2x text-white px-2"}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className={navbar ? "nav-link font-weight-bold" : "nav-link text-white font-weight-bold"} href="#">About</a>
              </li>
              <li className="nav-item">
                <a className={navbar ? "nav-link font-weight-bold" : "nav-link text-white font-weight-bold"} href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className={navbar ? "nav-link font-weight-bold" : "nav-link text-white font-weight-bold"} href="#">Experience</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
 
export default Navbar;