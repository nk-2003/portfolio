// Projects.jsx
import React from 'react';
import '../App.css';

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        <div className="project-item">
          <h3>Project 1: E-commerce website for Boots</h3>
          <a href="https://nk-boots.netlify.app/" className="btn">View Project</a>
        </div>
        <div className="project-item">
          <h3>Project 2: E-commerce Bikes store</h3>
          <a href="https://retrobikes.netlify.app/" className="btn">View Project</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
