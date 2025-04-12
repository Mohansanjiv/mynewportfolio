import React from 'react'
import './About.css'
import myphoto from '../../components/assets/images/myphoto.jpg'

const About = () => {
  return (
    <>
      <div className='about' id='about'>
        <div
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <div className='row'>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
              <img src={myphoto} alt='profile-pic' />
            </div>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12  about-content'>
              <h1>About me</h1>
              <h4> Full-Stack MERN Developer | 2 Years of Experience</h4>
              <p>
                "Specialized in MongoDB, Express.js, React.js, and Node.js.
                 JavaScript (ES6), Redux-Toolkit for state management,
                and styling with Tailwind CSS, Bootstrap, and Material UI.
                Skilled in crafting scalable RESTful APIs, dynamic and
                responsive user interfaces, and efficient backend systems with
                MongoDB integration. Experienced with Git, npm, VS Code, and
                deployment workflows, delivering high-quality, user-centric web
                applications."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
