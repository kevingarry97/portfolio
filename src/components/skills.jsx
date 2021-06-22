import React from 'react';
import Skills from '../assets/images/Skills Image-min.png'
import CV from '../assets/documents/KevinCV.pdf'

const SkillSection = () => {
  return (  
    <section className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 my-lg-0 my-3">
              <img src={Skills} className="img-fluid py-4" alt=""/>
              <a href={CV} download className="btn primary-btn border-radius shadow px-4 py-2"><strong>Download cv</strong></a>
            </div>
            <div className="col-lg-6 offset-lg-1 my-lg-0 my-3">
              <h3 className="font-weight-bold text-white pb-3">
                Here other <span className="primary-text">3+</span> skills I have in software development
              </h3>
              <div className="card shadow border-0 card-primary my-2">
                <div className="card-body py-md-2">
                  <div className="clearfix">
                    <div className="float-left">
                      <h6 className="font-weight-bold text-white">Front-End Design</h6>
                      <small className="text-white d-none d-sm-inline-block">
                        I can work with  different cross browsing <br/> compatibilities
                      </small>
                    </div>
                    <div className="float-right mt-sm-3">
                      <i className="fa fa-laptop primary-text fa-2x"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow border-0 card-secondary my-2">
                <div className="card-body py-md-2">
                  <div className="clearfix">
                    <div className="float-left">
                      <h6 className="font-weight-bold text-white">Back-End Design</h6>
                      <small className="text-white d-none d-sm-inline-block">
                        Understand the goals of the app and come up with <br/> effective solutions.
                      </small>
                    </div>
                    <div className="float-right mt-sm-3">
                      <i className="fa fa-code primary-text fa-2x"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow border-0 card-secondary my-2">
                <div className="card-body py-md-2">
                  <div className="clearfix">
                    <div className="float-left">
                      <h6 className="font-weight-bold text-white">SEO</h6>
                      <small className="text-white d-none d-sm-inline-block">
                        Help in boosting your your business with <br/> SEO optimize
                      </small>
                    </div>
                    <div className="float-right mt-sm-3">
                      <i className="fa fa-globe primary-text fa-2x"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
 
export default SkillSection;