import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './WorkExfo.css'
import { GrReactjs } from 'react-icons/gr'
import { FaNodeJs } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'

const WorkExfo = () => {
  return (
    <>
      <div className=' work'>
        <div className=' container work-exp'>
          <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
            Work Experiences
          </h2>
          <hr />
          <VerticalTimeline 
          >
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{ background: 'white', color: '#000000' }}
              contentArrowStyle={{ borderRight: '7px solid  #138781' }}
              date='nov 2023 - feb 2024'
              iconStyle={{ background: 'white', color: '#000000' }}
              icon={<FaNodeJs />}
            >
              <h3 className='vertical-timeline-element-title'>
                Full Stack Developer
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>
               Techavia IT Solutions
              </h4>
              <p>
                Creative Direction, User Experience, Project Management, Team
                Leading
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{ background: 'white', color: '#000000' }}
              contentArrowStyle={{ borderRight: '7px solid  #138781' }}
              date='Jan 2022 - Dec 2022'
              iconStyle={{ background: 'white', color: '#000000' }}
              icon={<GrReactjs />}
            >
              <h3 className='vertical-timeline-element-title'>
                Frontend Developer
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>
                Hits Rourkela
              </h4>
              <p>
                As a React developer, I thrive on the dynamic intersection of
                creativity and technology. With a
                JavaScript and  React, I bring digital
                ideas to life through intuitive and responsive user interfaces
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{ background: 'white', color: '#000000' }}
              contentArrowStyle={{ borderRight: '7px solid  #138781' }}
              date='2017 - 2021'
              iconStyle={{ background: 'white', color: '#000000' }}
              icon={<GiTeacher />}
            >
              <h3 className='vertical-timeline-element-title'>Lab Asistant</h3>
              <h4 className='vertical-timeline-element-subtitle'>
                CNET, Rourkela
              </h4>
              <p>
                As a lab assistant in the computer lab, I play a pivotal role in
                facilitating a conducive learning environment for students and
                supporting the smooth operation of technical resources.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

export default WorkExfo
