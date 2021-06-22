import React from 'react';
import Resume from '../assets/documents/KevinResume.pdf';

const ExperienceSection = () => {
  return ( 
    <section className="pt-5">
      <div className="container">
        <h3 className="font-weight-bold primary-text">MY EXPERIENCE</h3>
        <div className="row mt-5">
          <div className="col-md-3 my-2">
            <div className="card card-primary border-0 shadow">
              <div className="card-body">
                <h6 className="font-weight-bold primary-text text-center mb-3">Languages</h6>
                <div className="clearfix py-2">
                  <div className="float-left">
                    <h6 className="font-weight-bold text-white">HTML 5</h6>
                  </div>
                  <div className="float-right">
                    <i className="fa fa-chevron-right primary-text"></i>
                  </div>
                </div>
                <div className="clearfix py-2">
                  <div className="float-left">
                    <h6 className="font-weight-bold text-white">CSS 3</h6>
                  </div>
                  <div className="float-right">
                    <i className="fa fa-chevron-right primary-text"></i>
                  </div>
                </div>
                <div className="clearfix py-2">
                  <div className="float-left">
                    <h6 className="font-weight-bold text-white">Javascript</h6>
                  </div>
                  <div className="float-right">
                    <i className="fa fa-chevron-right primary-text"></i>
                  </div>
                </div>
                <div className="clearfix py-2">
                  <div className="float-left">
                    <h6 className="font-weight-bold text-white">Typescript</h6>
                  </div>
                  <div className="float-right">
                    <i className="fa fa-chevron-right primary-text"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2">
            <div className="card card-secondary border-0 shadow">
              <div className="card-body">
                <h6 className="font-weight-bold primary-text text-center mb-3">Framework & Libs</h6>
                <div className="clearfix py-2">
                  <div className="float-left">
                    <h6 className="font-weight-bold text-white">React Js</h6>
                  </div>
                  <div className="float-right">
                    <i className="fa fa-chevron-right primary-text"></i>
                  </div>
                </div>
                <div className="clearfix py-2">
                  <div className="float-left">
                    <h6 className="font-weight-bold text-white">Angular</h6>
                  </div>
                  <div className="float-right">
                    <i className="fa fa-chevron-right primary-text"></i>
                  </div>
                </div>
                <div className="clearfix py-2">
                  <div className="float-left">
                    <h6 className="font-weight-bold text-white">Node Js</h6>
                  </div>
                  <div className="float-right">
                    <i className="fa fa-chevron-right primary-text"></i>
                  </div>
                </div>
                <div className="clearfix py-2">
                  <div className="float-left">
                    <h6 className="font-weight-bold text-white">Redux</h6>
                  </div>
                  <div className="float-right">
                    <i className="fa fa-chevron-right primary-text"></i>
                  </div>
                </div>
                <div className="clearfix py-2">
                  <div className="float-left">
                    <h6 className="font-weight-bold text-white">React Native</h6>
                  </div>
                  <div className="float-right">
                    <i className="fa fa-chevron-right primary-text"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2">
            <div className="card card-secondary border-0 shadow">
              <div className="card-body">
                <h6 className="font-weight-bold primary-text text-center mb-3">Development Tools</h6>
                <div className="clearfix py-2">
                  <div className="float-left">
                    <h6 className="font-weight-bold text-white">Heroku</h6>
                  </div>
                  <div className="float-right">
                    <i className="fa fa-chevron-right primary-text"></i>
                  </div>
                </div>
                <div className="clearfix py-2">
                  <div className="float-left">
                    <h6 className="font-weight-bold text-white">Git</h6>
                  </div>
                  <div className="float-right">
                    <i className="fa fa-chevron-right primary-text"></i>
                  </div>
                </div>
                <div className="clearfix py-2">
                  <div className="float-left">
                    <h6 className="font-weight-bold text-white">Expo</h6>
                  </div>
                  <div className="float-right">
                    <i className="fa fa-chevron-right primary-text"></i>
                  </div>
                </div>
                <div className="clearfix py-2">
                  <div className="float-left">
                    <h6 className="font-weight-bold text-white">Android Studio</h6>
                  </div>
                  <div className="float-right">
                    <i className="fa fa-chevron-right primary-text"></i>
                  </div>
                </div>
                <div className="clearfix py-2">
                  <div className="float-left">
                    <h6 className="font-weight-bold text-white">Figma</h6>
                  </div>
                  <div className="float-right">
                    <i className="fa fa-chevron-right primary-text"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2">
            <a href={Resume} download className="btn card-primary border-radius btn-block btn-lg mb-4">
              <strong>Resume &nbsp;&nbsp;&nbsp; <i className="fa fa-file-text primary-text"></i></strong>
            </a>
            <a href="https://github.com/kevingarry97" className="btn card-secondary border-radius btn-block btn-lg my-4">
              <strong>Github &nbsp;&nbsp;&nbsp; <i className="fa fa-github primary-text"></i></strong>
            </a>
            <a href="https://www.linkedin.com/in/kevin-ishimwe-335251133/" className="btn card-secondary border-radius btn-block btn-lg my-4">
              <strong>Linked &nbsp;&nbsp;&nbsp; <i className="fa fa-linkedin primary-text"></i></strong>
            </a>
          </div>
        </div>
        <p className="text-white text-center pt-5"><small className="font-weight-bold">Copyright © 2021 By Kevin ISHIMWE. All Rights Reserved</small></p>
      </div>
    </section>
  );
}
 
export default ExperienceSection;