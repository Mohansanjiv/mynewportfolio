import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect'
import Resume from '../../components/assets/docs/Sanjiv-Resume.pdf'
import { useTheme } from '../../context/ThemeContext'
import { BsMoonStarsFill, BsSun } from 'react-icons/bs'

const Home = () => {
  const { theme, setTheme } = useTheme()
  const handleTheme = () => {
    setTheme(prevState => (prevState === 'light' ? 'dark' : 'light'))
  }
  return (
    <>
      <div className='container-fluid home-container' id='home'>
        <div className='theme-btn' onClick={handleTheme}>
          {theme === 'light' ? (
            <BsMoonStarsFill size={30} />
          ) : (
            <BsSun size={30} />
          )}
        </div>
        <div className='container home-content'>
          <div data-aos='fade-left'>
            <h1>Hi 👋🏻 I'm a</h1>
            <h2>
              <Typewriter
                options={{
                  strings: ['FullStack Developer !', 'Mern Stack Developer !'],
                  autoStart: true,
                  loop: true
                }}
              />
            </h2>
          </div>

          <div data-aos='fade-up' data-aos-anchor-placement='center-bottom'>
            <div className='home-buttons'>
              <button className='btn btn-hire'>Hire me</button>
              <a className='btn btn-cv' href={Resume} download='sanjiv2024.pdf'>
                My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
