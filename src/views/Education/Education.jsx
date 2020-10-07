import React from "react";
import "./Education.css";

function TimeLineItem(props) {
  return(
    <div 
      onClick={() => {
      props.setActiveTitle(props.title);
      props.setActiveDate(props.date);
      props.setActiveGrad(props.grad);
    }}
    className="timeline-item">
      <h1>{props.title}</h1>
      <p>{props.date}</p>
      <p>{props.grad}</p>
    </div>
  );
}
export default function EducationScreen() {
  const [activeTitle, setActiveTitle] = React.useState('');
  const [activeDate, setActiveDate] = React.useState('');
  const [activeGrad, setActiveGrad] = React.useState('');
  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem 
            title="BLS"
            date="2014-2020"
            grad="Graduated"
            setActiveTitle={setActiveTitle}
            setActiveDate={setActiveDate}
            setActiveGrad={setActiveGrad}
          ></TimeLineItem>
          <TimeLineItem 
            title="Harvard"
            date="2020-2024"
            grad="First-Year"
            setActiveTitle={setActiveTitle}
            setActiveDate={setActiveDate}
            setActiveGrad={setActiveGrad}
          ></TimeLineItem>
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <p>{activeDate}</p>
          <h4>{activeGrad}</h4>
        </div>
      </div>
    </div>
  );
}