import React from 'react'
import './Menu.css'
import { IoMdHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { SiWheniwork } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { SiStudyverse } from "react-icons/si";
import { FaRProject } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import sanju from '../../components/assets/images/sanju.jpg'
const Menu = ({toggle}) => {
  return (
    <>
      {toggle ? (
        <>
        <div className="navbar-profile-pic">
      <img src={sanju} alt='profile-pic' />
    </div>
    <div className='nav-items'>
      <div className='nav-item'>
        <div className='nav-link '><IoMdHome size={15}/> Home</div>
        <div className='nav-link'><FcAbout size={15} /> About</div>
        <div className='nav-link'><SiStudyverse size={15} /> Education</div>
        <div className='nav-link'><GrTechnology size={15} /> Tech Stack</div>
        <div className='nav-link'><SiWheniwork size={15} /> Work Experience</div>
        <div className='nav-link'><FaRProject size={15} /> Projects</div>
        <div className='nav-link'><MdContactPage size={15} /> Contact</div>
        
      </div>
    </div>
    </>
    ):(
        <>
        <div className='nav-item'>
          <div className='nav-link '><IoMdHome size={15} title="Home" /></div>
          <div className='nav-link'><FcAbout size={15} title="About" /></div>
          <div className='nav-link'><SiWheniwork size={15} title="Work Experience" /></div>
          <div className='nav-link'><GrTechnology size={15} title="Tech Stack"/></div>
          <div className='nav-link'><SiStudyverse size={15} title="Education"  /></div>
          <div className='nav-link'><FaRProject size={15} title="Projects" /></div>
          <div className='nav-link'><MdContactPage size={15}  title="Contact"  /></div>
        </div>
        </>
       
    )
}
    </>
  )
}

export default Menu
