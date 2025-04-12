import React, { useContext } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoMdSchool } from "react-icons/io";
import { ThemeContext } from '../../context/ThemeContext'; // adjust path as needed
import './Education.css';

const Education = () => {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === 'dark';

  const iconStyle = {
    background: '#138781',
    color: '#fff'
  };

  const contentStyle = {
    background: isDark ? '#1f1f1f' : '#fff',
    color: isDark ? '#fff' : '#000'
  };

  const contentArrowStyle = {
    borderRight: `7px solid ${isDark ? '#1f1f1f' : '#fff'}`
  };

  return (
    <div className={`container education text-uppercase ${isDark ? 'dark' : 'light'}`} id='education'>
      <h2 className='text-center'>Education Details</h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="2015"
          iconStyle={iconStyle}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">BE</h3>
          <h4 className="vertical-timeline-element-subtitle">RGPV, BHOPAL</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="2011"
          iconStyle={iconStyle}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">12th (Intermediate)</h3>
          <h4 className="vertical-timeline-element-subtitle">BSEB, PATNA</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
