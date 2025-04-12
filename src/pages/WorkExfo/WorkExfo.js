import React, { useContext } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './WorkExfo.css';
import { GrReactjs } from 'react-icons/gr';
import { FaNodeJs } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { ThemeContext } from '../../context/ThemeContext'; // Adjust path based on your folder structure

const WorkExfo = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const iconStyle = {
    background: isDark ? '#1f1f1f' : 'white',
    color: isDark ? '#fff' : '#000'
  };

  const contentStyle = {
    background: isDark ? '#1f1f1f' : 'white',
    color: isDark ? '#fff' : '#000'
  };

  const contentArrowStyle = {
    borderRight: `7px solid ${isDark ? '#1f1f1f' : '#138781'}`
  };

  return (
    <div className={`work theme-${theme}`} id='workexp'>
      <div className='container work-exp'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
          Work Experiences
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date='April 2024 - April 2025'
            iconStyle={iconStyle}
            icon={<FaNodeJs />}
          >
            <h3 className='vertical-timeline-element-title'>
              Full Stack Developer
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Wamika Technologies
            </h4>
            <p>
              As a Full Stack Developer, I am proficient in both front-end and back-end technologies...
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date='Jan 2022 - Dec 2022'
            iconStyle={iconStyle}
            icon={<GrReactjs />}
          >
            <h3 className='vertical-timeline-element-title'>
              Frontend Developer
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Hits Rourkela
            </h4>
            <p>
              As a React developer, I thrive on the dynamic intersection of creativity and technology...
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date='2017 - 2021'
            iconStyle={iconStyle}
            icon={<GiTeacher />}
          >
            <h3 className='vertical-timeline-element-title'>Lab Assistant</h3>
            <h4 className='vertical-timeline-element-subtitle'>
              CNET, Rourkela
            </h4>
            <p>
              As a lab assistant in the computer lab, I play a pivotal role in facilitating a conducive learning environment...
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExfo;
