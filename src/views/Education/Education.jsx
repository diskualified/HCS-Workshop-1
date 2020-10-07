import React from "react";
import "./Education.css";
import CutePic from "../../assets/machinelearning.jpg";

export default function EducationScreen() {
    return (
      <div className="screen-background">
        <div className="intro-background">
          <div className="intro-item">
            <img src={CutePic} className="intro-picture" />
          </div>
          <div className="intro-item">
            High School: Boston Latin School
          </div>
        </div>
      </div>
    );
  }