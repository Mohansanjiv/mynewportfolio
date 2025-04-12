import React from 'react'
import './Menu.css'
import { IoMdHome } from 'react-icons/io'
import { FcAbout } from 'react-icons/fc'
import { SiWheniwork } from 'react-icons/si'
import { GrTechnology } from 'react-icons/gr'
import { SiStudyverse } from 'react-icons/si'
import { FaRProject } from 'react-icons/fa'
import { MdContactPage } from 'react-icons/md'
import sanju from '../../components/assets/images/sanju.jpg'
import { Link } from 'react-scroll'

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className='navbar-profile-pic'>
            <div data-aos='zoom-in'>
              <img src={sanju} alt='profile-pic' />
            </div>
          </div>
          <div data-aos="fade-right">
          <div className='nav-items'>
            <div className='nav-item'>
              <div className='nav-link '>
                <Link
                  to='home'
                  smooth={true}
                  duration={100}
                  spy={true}
                  offset={-100}
                >
                  <IoMdHome size={15} /> Home
                </Link>
              </div>
              <div className='nav-link'>
                <Link
                  to='about'
                  smooth={true}
                  duration={100}
                  spy={true}
                  offset={-100}
                >
                  <FcAbout size={15} /> About
                </Link>
              </div>
              <div className='nav-link'>
                <Link
                  to='education'
                  smooth={true}
                  duration={100}
                  spy={true}
                  offset={-100}
                >
                  <SiStudyverse size={15} /> Education
                </Link>
              </div>

              <div className='nav-link'>
                <Link
                  to='workexp'
                  smooth={true}
                  duration={100}
                  spy={true}
                  offset={-100}
                >
                  <SiWheniwork size={15} /> Work Experience
                </Link>
              </div>
              <div className='nav-link'>
                <Link
                  to='techstack'
                  smooth={true}
                  duration={100}
                  spy={true}
                  offset={-100}
                >
                  <GrTechnology size={15} /> Tech Stack
                </Link>
              </div>
              <div className='nav-link'>
                <Link
                  to='project'
                  smooth={true}
                  duration={100}
                  spy={true}
                  offset={-100}
                >
                  <FaRProject size={15} /> Projects
                </Link>
              </div>
              <div className='nav-link'>
                <Link
                  to='contact'
                  smooth={true}
                  duration={100}
                  spy={true}
                  offset={-100}
                >
                  <MdContactPage size={15} /> Contact
                </Link>
              </div>
            </div>
          </div>
          </div>
        </>
      ) : (
        <>
          <div className='nav-item'>
            <div className='nav-link '>
              <Link
                to='home'
                smooth={true}
                duration={100}
                spy={true}
                offset={-100}
              >
                <IoMdHome size={15} />
              </Link>
            </div>
            <div className='nav-link'>
              <Link
                to='about'
                smooth={true}
                duration={100}
                spy={true}
                offset={-100}
              >
                <FcAbout size={15} />
              </Link>
            </div>
            <div className='nav-link'>
              <Link
                to='education'
                smooth={true}
                duration={100}
                spy={true}
                offset={-100}
              >
                <SiStudyverse size={15} />
              </Link>
            </div>
            <div className='nav-link'>
              <Link
                to='workexp'
                smooth={true}
                duration={100}
                spy={true}
                offset={-100}
              >
                <SiWheniwork size={15} />
              </Link>
            </div>
            <div className='nav-link'>
              <Link
                to='techstack'
                smooth={true}
                duration={100}
                spy={true}
                offset={-100}
              >
                <GrTechnology size={15} />
              </Link>
            </div>

            <div className='nav-link'>
              <Link
                to='project'
                smooth={true}
                duration={100}
                spy={true}
                offset={-100}
              >
                <FaRProject size={15} />
              </Link>
            </div>
            <div className='nav-link'>
              <Link
                to='contact'
                smooth={true}
                duration={100}
                spy={true}
                offset={-100}
              >
                <MdContactPage size={15} />
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Menu
