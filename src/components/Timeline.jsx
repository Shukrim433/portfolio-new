import React from "react";
import timelineElements from "../assets/timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "../assets/WorkIcon";
import SchoolIcon from "../assets/SchoolIcon";

const Timeline = () => {
  return (
    <div className="flex flex-col gap-6  px-6 py-4 justify-center mt-8 ">
      <h2 className="text-4xl md:text-6xl xl:text-7xl mt-4 mb-5 px-3">
        MY CAREER TIMELINE<span className="text-red">.</span>
      </h2>
      <div>
        {timelineElements.map((role) => (
          <div key={role.id}>
            <VerticalTimeline>
              <VerticalTimelineElement
                className={`${
                  role.type == "school"
                    ? "vertical-timeline-element--education"
                    : "vertical-timeline-element--work"
                }`}
                contentStyle={{ background: "", color: "#0c0a09  " }}
                contentArrowStyle={{ borderRight: "7px solid  #ffffff" }}
                date={role.date}
                iconStyle={{ background: "#8c0000", color: "#fff" }}
                icon={role.type == "school" ? <SchoolIcon /> : <WorkIcon />}
                position={`${role.type == "school" ? "left" : "right"}`}
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  {role.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-sm text-neutral-800">
                  {role.institution}
                </h4>
                <p>{role.description}</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
