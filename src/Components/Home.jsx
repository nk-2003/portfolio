// Home.jsx
import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <div className="home">
      <img src="./images/image.jpg" className="profile-image" alt="Profile" />
      <h1>Welcome to My Portfolio</h1>
      <p className="intro-text">
        Hello there! I'm <strong>NAVEENKUMAR N</strong>, a passionate and creative web developer specializing in building stunning, responsive, and user-friendly websites. Dive into my projects and achievements, and let's connect to bring more digital dreams to life!
      </p>
      <div className="buttons">
        <a href="/projects" className="btn">View Projects</a> {/* Update link */}
        <a href="/contact" className="btn btn-primary">Contact Me</a>
      </div>
    </div>
  );
};

export default Home;
