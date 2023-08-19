import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h1 className=" gradient-text col-12 mt-3 mb-1 text-center">
            Work Experience
          </h1>
          <hr />
          <VerticalTimeline lineColor="#0ea5e9">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #0ea5e9' }}
              date="2023 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer(Trainee)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                The Codehelp
              </h4>
              <p>
                Creating visually appealing and user-friendly interfaces and server-side logic and core functionality that powers the application.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #0ea5e9' }}
              date="2022 - 2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                NetWork Engineer

              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                The Solution pvt ltd , Raipur

              </h4>
              <p>
                Setting up and managing local area networks (LANs), wide area networks (WANs), and other network segments.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #0ea5e9' }}
              date="2021 - 2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Webtech Solution(intern) , Durg
              </h4>
              <p>
                Designing and implementing the user interface (UI) and user experience (UX) components that users interact with directly
              </p>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
