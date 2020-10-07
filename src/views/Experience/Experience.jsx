import React from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return(
    <div 
      onClick={() => {
      props.setActiveTitle(props.title);
    }}
    className="timeline-item">
      <h1>{props.title}</h1>
    </div>
  );
}
export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = React.useState('BLANK');
  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem 
            title="Lifeguard"
            setActiveTitle={setActiveTitle}
          ></TimeLineItem>
          <TimeLineItem 
            title="BeaverWorks"
            setActiveTitle={setActiveTitle}
          ></TimeLineItem>
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          {/* <p>all the date information about the selected experience!</p>
          <h4>description of the selected experience</h4> */}
        </div>
      </div>
    </div>
  );
}
