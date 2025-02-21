import React from 'react';
import '../App.css';

const Projects = () => {
  return (
    <div className="projects container py-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">E-commerce website for Boots</h5>
              <img src="/images/pro1.png" className="project-img" alt="E-commerce website for Boots" />
              <a href="https://nk-boots.netlify.app/" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">E-commerce Bikes store</h5>
              <img src="/images/pro2.png" className="project-img" alt="E-commerce Bikes store" />
              <a href="https://retrobikes.netlify.app/" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
