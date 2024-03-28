import React, { useState } from 'react';
import Home from '../../pages/Home/Home';
import { RiArrowLeftDoubleLine, RiArrowRightDoubleFill } from "react-icons/ri";
import './Layout.css';
import Menu from '../Menu/Menu';


const Layout = () => {
  const[toggle,setToggle]=useState(true);

  const toggleHandle=()=>{
    setToggle(!toggle);
  }
  return (
    <>
      <div className='sidebar-section'>
        <div className={toggle?'sidebar-toggle sidebar':'sidebar'}>
          <div className='sidebar-toggle-icons'>
         
            <p onClick={toggleHandle}>
              {toggle?(<RiArrowLeftDoubleLine size={30} />):( <RiArrowRightDoubleFill size={30} />)}
            </p>
          </div>
          <Menu toggle={toggle}/>
        </div>
        <div className='container'>
          <Home/>
        </div>
        
      </div>
     
    </>
  )
}

export default Layout
