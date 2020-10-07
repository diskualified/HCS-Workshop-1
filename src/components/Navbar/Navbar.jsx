import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>David Qian</h1>
        <div className="info-bar">
          <p className="info-item">dqian@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link
            className={"info-link"}
            to= {{ pathname: "https://www.instagram.com/diskualified/" }}
            target = "_blank"
          >
            Instagram
          </Link>

          <Link
            className={"info-link"}
            to= {{ pathname: "https://open.spotify.com/playlist/5zieXGwNAmeKrxIfLVJQe0?si=KHITX3iCQUyE80GsoYw-Mg" }}
            target = "_blank"
          >
            Spotify
          </Link>
          <Link
            className={"info-link"}
            to= {{ pathname: "https://github.com/diskualified" }}
            target = "_blank"
          >
            Github
          </Link>
      
        </div>
      </div>
      <div className="nav-background">
        <Link className= "nav-link" to = {{pathname: "/about"}}>About</Link>
        <Link className= "nav-link" to = {{pathname: "/experience"}}>Experience</Link>
        <Link className= "nav-link" to = {{pathname: "/projects"}}>Projects</Link>
        <Link className= "nav-link" to = {{pathname: "/education"}}>Education</Link>
      </div>
    </>
  );
}
