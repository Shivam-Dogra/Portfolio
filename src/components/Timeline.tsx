import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            //date="2022 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Master of Applied Computing Student</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Windsor, Ontario</h4>
            <p>
    <ul>
        <li>COMP-8547: Advanced Computing Concepts</li>
        <li>COMP-8117: Advanced Software Engineering </li>
        <li>BSMM 8130: Managing Employees </li>
        <li>COMP-8157: Advanced Database Topics </li>
        <li>COMP-8567: Advanced Systems Programming </li>
        <li>COMP-8207: Paradigms in Computing Tech  </li>
    </ul>
</p>


          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            //date="2022 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Test Automation Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Mumbai, IN</h4>
            <ul>
              <li>Led functional and automation testing, responsible for core regression, user acceptance, and integration testing</li>
              <li>Automated 50-60% of manual test cases in each application, reducing turnaround time by 50%</li>
              <li>Developed test automation scripts using Java, Selenium WebDriver, and TestNG</li>
              <li>Improved coverage and reliability through a robust regression suite, reducing 80% of effort spent on regression testing of integration scenarios</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            //date="2020 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Mumbai, IN</h4>
            <p>
            <ul>
              <li>Designed and developed RESTful APIs using Spring Boot, ensuring efficient communication between frontend and backend systems</li>
              <li>Collaborated with frontend developers, QA engineers, and Business Analyst to gather requirements, define API contracts, and deliver high-quality software solutions</li>
              </ul>
            </p>

          </VerticalTimelineElement>
          
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;