import React from 'react'
import './About.css'
import myphoto from '../../components/assets/images/myphoto.jpg'

const About = () => {
  return (
    <>
      <div className='about'>
        <div className='row'>
          <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
            <img src={myphoto} alt='profile-pic' />
          </div>
          <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12  about-content'>
            <h1>About me</h1>
            <p>
              "I am a skilled software developer with 1.4 years of hands-on
              experience in frontend .
              Recently upgraded my skills on backend with nodejs and its framework express, I have demonstrated proficiency in building
              robust backend systems using Node.js, along with developing
              dynamic and interactive user interfaces with React.js. My skill
              set includes JavaScript ,ES6, Node-NPM, Redux-Toolkit, Bootstrap,
              Tailwind CSS, ReactStrap, Material UI, MongoDB, and IDE tools
              like VS Code, Dreamweaver, and Adobe Photoshop. With a proactive
              attitude and a passion for learning, I am dedicated to delivering
              high-quality solutions and contributing effectively to team
              success.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
