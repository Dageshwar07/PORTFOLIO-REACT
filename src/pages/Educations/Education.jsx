import React from "react";
import { MdCastForEducation } from 'react-icons/md'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css'
const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <div className="container ">

          <h1 className="gradient-text col-12 mt-3 mb-1 text-center ">
            Education Details
          </h1>
          <hr />
          <VerticalTimeline lineColor="#0ea5e9" className="vt">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #0ea5e9' }}
              date="2011 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<MdCastForEducation />}
            >
              <h3 className="vertical-timeline-element-title">B-Tech (computer science)</h3>
              <h4 className="vertical-timeline-element-subtitle">csvtu,bhilai</h4>
              <p>
                As a computer science student, I'll typically learn about programming languages, data structures, software development, databases, computer architecture, operating systems, networking, web development and much more things.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid   #0ea5e9 ' }}
              date="2011 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<MdCastForEducation />}
            >
              <h3 className="vertical-timeline-element-title">Intermediate</h3>
              <h4 className="vertical-timeline-element-subtitle">govt HSS,saja</h4>
              <p>
                As a science student, i have explored topics in physics, chemistry,  mathematics, and possibly other related subjects.  algebra, and more. my studies would have provided a foundation for pursuing higher education or careers in various scientific and technical fields.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #0ea5e9 ' }}
              date="2011 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<MdCastForEducation />}
            >
              <h3 className="vertical-timeline-element-title">Matriculation</h3>
              <h4 className="vertical-timeline-element-subtitle">govt HSS,saja</h4>
              <p>
                Engaging in class discussions and group work has likely improved my ability to actively listen and understand different viewpoints.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Education;
