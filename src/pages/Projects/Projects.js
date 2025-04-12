import React from "react";
import "./Projects.css";
import ecommerce from "../../components/assets/images/ecomfrontend.png";
import backendroad from "../../components/assets/images/back-road-app.png";
import tours from "../../components/assets/images/tours-img.png";
import birthday from "../../components/assets/images/birthday-img.png";
import imagesearch from "../../components/assets/images/imagesearch.png";
import hrm from "../../components/assets/images/hrm.jpg";
import kats from "../../components/assets/images/kats.jpg";
import odcet from "../../components/assets/images/odcet.jpg";

const Projects = () => {
  return (
    <>
      <div className="container project" id="project">
        <div data-aos="fade-down">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Top Recent Projects
          </h2>
          <hr />
          <p className="pb-3 text-center">
            I have created separate frontend and backend projects using React
            for the frontend and Node.js, Express, and MongoDB for the backend,
            each serving distinct purposes and communicating through APIs for
            data exchange.
          </p>
        </div>

        <div className="row" id="ads">
          <div className="col-md-4">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">FULLSTACK</span>
                  <img src={hrm} alt="project3" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">
                    React,Nodejs,Express,MongodDB
                  </span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title">
                    <h5 className="text-uppercase">HRM WEB APP</h5>
                  </div>
                  <a className="ad-btn" href="https://dev.wamikatech.com/">
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">FULLSTACK</span>
                <img src={kats} alt="project3" />
              </div>
              <div className="card-image-overly m-auto">
                <span className="card-detail-badge">
                  React,Nodejs,Express,MongodDB
                </span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title">
                  <h5 className="text-uppercase">KATS WEB APP</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://katsdev.z30.web.core.windows.net/">
                  Live
                </a>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-4">
             <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Frontend</span>
                <img src={ecommerce} alt="project1" />
              </div>
              <div className="card-image-overly m-auto">
                <span className="card-detail-badge">React</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title">
                  <h5 className="text-uppercase">e-commerce Website</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://ecommercefrontend-theta.vercel.app/">
                  Live
                </a>
                <a
                  className="ad-btn"
                  href="https://github.com/Mohansanjiv/ecommercefrontend">
                  Source Code
                </a>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-4">
             <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Backend</span>
                <img src={ecommerce} alt="project2" />
              </div>
              <div className="card-image-overly m-auto">
                <span className="card-detail-badge">Node JS</span>
                <span className="card-detail-badge">ExpressJS</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title">
                  <h5 className="text-uppercase">e-commerce Website</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://ecom-server-gf2a.onrender.com/api/v1/products">
                  Live
                </a>
                <a
                  className="ad-btn"
                  href="https://github.com/Mohansanjiv/ecom_nodebackend/tree/master">
                  Source Code
                </a>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-4">
             <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Frontend</span>
                <img src={backendroad} alt="project3" />
              </div>
              <div className="card-image-overly m-auto">
                <span className="card-detail-badge">React</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title">
                  <h5 className="text-uppercase">back-road-app</h5>
                </div>
                <a className="ad-btn" href="https://back-road-app.vercel.app/">
                  Live
                </a>
                <a
                  className="ad-btn"
                  href="https://github.com/Mohansanjiv/BackRoad_app">
                  Source Code
                </a>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-4">
             <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Frontend</span>
                <img src={tours} alt="project3" />
              </div>
              <div className="card-image-overly m-auto">
                <span className="card-detail-badge">React</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title">
                  <h5 className="text-uppercase">Tours</h5>
                </div>
                <a className="ad-btn" href="https://tours-psi-nine.vercel.app/">
                  Live
                </a>
                <a
                  className="ad-btn"
                  href="https://github.com/Mohansanjiv/tours">
                  Source Code
                </a>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-4">
              <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Frontend</span>
                <img src={birthday} alt="project3" />
              </div>
              <div className="card-image-overly m-auto">
                <span className="card-detail-badge">React</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title">
                  <h5 className="text-uppercase">Birthday Reminder</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://birthday-seven-plum.vercel.app/">
                  Live
                </a>
                <a
                  className="ad-btn"
                  href="https://github.com/Mohansanjiv/birthday">
                  Source Code
                </a>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-4">
             <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Frontend</span>
                <img src={imagesearch} alt="project3" />
              </div>
              <div className="card-image-overly m-auto">
                <span className="card-detail-badge">JavaScript</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title">
                  <h5 className="text-uppercase">Image Search App</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://luminous-kangaroo-209098.netlify.app/ ">
                  Live
                </a>
                <a
                  className="ad-btn"
                  href="https://github.com/Mohansanjiv/ImageSearchApp">
                  Source Code
                </a>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-4">
             <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Frontend(cloned)</span>
                <img src={odcet} alt="project3" />
              </div>
              <div className="card-image-overly m-auto">
                <span className="card-detail-badge">
                  JavaScript,Nextjs,TailwindCss,Redux
                </span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title">
                  <h5 className="text-uppercase">Social Network App</h5>
                </div>
                <a className="ad-btn" href="https://sanjivsocial.netlify.app/">
                  Live
                </a>
                <a
                  className="ad-btn"
                  href="https://github.com/Mohansanjiv/odcet">
                  Source Code
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
