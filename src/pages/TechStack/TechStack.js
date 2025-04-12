import React from 'react'
import './TechStack.css'
import { TechStackList } from '../../utils/TechstackList'

const TechStack = () => {
  return (
    <>
      <div className='container TechStack' id='techstack'>
        <div data-aos='fade-down'>
          <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
            Technologies Stacks
          </h2>
          <hr />
          <p className='pb-3 text-center'>
            👉 including programming languages, framework, databases, front-end
            and back-end tools and APIs
          </p>
        </div>
       
          <div className='row'>
            {TechStackList.map(tech => (
              <div className='col-md-3'>
                 <div
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
                <div key={tech._id} className='card md-2'>
                  <div className='card-content'>
                    <div className='card-body'>
                      <div className='media d-flex justify-content-center'>
                        <div className='align-self-center'>
                          <tech.icon className='tech-icon' />
                        </div>
                        <div className='align-self-center'>
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                       </div>
              </div>
            ))}
          </div>
 
      </div>
    </>
  )
}

export default TechStack
