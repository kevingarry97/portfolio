import React from 'react';
import Charity from '../assets/images/Charity App.png';
import Chat from '../assets/images/Chat App.png';
import Ecommerce from '../assets/images/E-commerce App.png';

const ProjectSection = () => {
  return (  
    <section className="bg-white py-5">
      <div className="container">
        <h3 className="font-weight-bold secondary-text text-center">Recent Project</h3>
        <p className="text-center">
          <small className="text-muted">I design and code beautiful simple applications. And <br/> I love what I do.</small>
        </p>
        <div className="row">
          <div className="col-md-4 my-3">
            <img src={Charity} className="img-fluid mb-3" alt=""/>
            <h6 className="secondary-text">.01 <span className="text-muted font-weight-bold">Charity site</span></h6>
            <p className="text-muted">An interface for a charity site with <strong>Donate, About Us, Contact Us</strong> page. for modern website</p>
            <div className="row">
              <div className="col-md-4 my-1">
                <div className="card shadow border-0">
                  <div className="card-body p-md-2 p-3 text-center">
                    <small className="secondary-text font-weight-bold">HTML & CSS</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-1">
                <div className="card shadow border-0">
                  <div className="card-body p-md-2 p-3 text-center">
                    <small className="secondary-text font-weight-bold">Bootstrap</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-1">
                <div className="card shadow border-0">
                  <div className="card-body p-md-2 p-3 text-center">
                    <small className="secondary-text font-weight-bold">React Js</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <a href="https://ngo-charity.herokuapp.com/" className="btn secondary-btn border-radius text-center btn-block pb-2" target="_blank">
                  Live Demo &nbsp; <i className="fa fa-edit"></i>
                </a>
              </div>
              <div className="col-6">
                <a href="https://github.com/kevingarry97/charity-ReactApp-" className="btn secondary-outline-btn border-radius btn-block" target="_blank">
                  Source Code &nbsp; <i className="fa fa-github secondary-text"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <img src={Chat} className="img-fluid mb-3" alt=""/>
            <h6 className="secondary-text">.02 <span className="text-muted font-weight-bold">Chat site</span></h6>
            <p className="text-muted">An awesome web design of a chat app home webpage for modern sites.</p>
            <div className="row">
              <div className="col-md-4 my-1">
                <div className="card shadow border-0">
                  <div className="card-body p-md-2 p-3 text-center">
                    <small className="secondary-text font-weight-bold">HTML & CSS</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-1">
                <div className="card shadow border-0">
                  <div className="card-body p-md-2 p-3 text-center">
                    <small className="secondary-text font-weight-bold">Bootstrap</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-1">
                <div className="card shadow border-0">
                  <div className="card-body p-md-2 p-3 text-center">
                    <small className="secondary-text font-weight-bold">React Js</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <a href="https://chatweb.netlify.app" className="btn secondary-btn border-radius text-center btn-block pb-2" target="_blank">
                  Live Demo &nbsp; <i className="fa fa-edit"></i>
                </a>
              </div>
              <div className="col-6">
                <a href="https://github.com/kevingarry97/chat-app" className="btn secondary-outline-btn border-radius btn-block" target="_blank">
                  Source Code &nbsp; <i className="fa fa-github secondary-text"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <img src={Ecommerce} className="img-fluid mb-3" alt=""/>
            <h6 className="secondary-text">.03 <span className="text-muted font-weight-bold">Ecommerce site</span></h6>
            <p className="text-muted">A full eCommerce application that I contributed on that sells locally in our country.</p>
            <div className="row">
              <div className="col-md-4 my-1">
                <div className="card shadow border-0">
                  <div className="card-body p-md-2 p-3 text-center">
                    <small className="secondary-text font-weight-bold">HTML & CSS</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-1">
                <div className="card shadow border-0">
                  <div className="card-body p-md-2 p-3 text-center">
                    <small className="secondary-text font-weight-bold">Node Js</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-1">
                <div className="card shadow border-0">
                  <div className="card-body p-md-2 p-3 text-center">
                    <small className="secondary-text font-weight-bold">Angular 9</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <a href="http://www.acyira.com/" className="btn secondary-btn border-radius text-center btn-block pb-2" target="_blank">
                  Live Demo &nbsp; <i className="fa fa-edit"></i>
                </a>
              </div>
              <div className="col-6">
                <a href="https://github.com/yeex/Akira" className="btn secondary-outline-btn border-radius btn-block" target="_blank">
                  Source Code &nbsp; <i className="fa fa-github secondary-text"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default ProjectSection;