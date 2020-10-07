import React from "react";
import "./About.css";
import CutePic from "../../assets/image0-6.jpg";

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={CutePic} className="intro-picture" />
        </div>
        <div className="intro-item">
          Hi! My name is David Qian. I'm from Boston, MA and I like swimming, coding, and ice cream!
        </div>
      </div>
    </div>
  );
}
