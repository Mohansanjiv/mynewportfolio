import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { IoMdSchool } from "react-icons/io";
import './Education.css'

const Education = () => {
  return (
    <>
      <div className='container education  text-uppercase'>
        <h2 className='text-center'>Education Details</h2>
     
      <VerticalTimeline>
      <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2015"
      iconStyle={{ background: '#138781', color: '#fff' }}
      icon={<IoMdSchool/>}
    >
      <h3 className="vertical-timeline-element-title">BE</h3>
      <h4 className="vertical-timeline-element-subtitle">RGPV, BHOPAL</h4>
      
    </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2011"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<IoMdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">12th(Intermediate)</h3>
    <h4 className="vertical-timeline-element-subtitle">BSEB, PATNA</h4>
    
  </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    </>
  )
}

export default Education
