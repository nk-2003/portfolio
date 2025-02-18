import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <div className="home container text-center">
      <img src="./images/image.jpg" className="profile-image img-fluid rounded-circle shadow-lg" alt="Profile" />
      <h1 className="mt-4">Hello there! I'm NAVEENKUMAR N</h1>
      <p className="intro-text lead mt-3"> A passionate and creative web developer specializing in building stunning, responsive, and user-friendly websites. Dive into my projects and achievements, and let's connect to bring more digital dreams to life!
      </p>
      <div className="buttons mt-4">
        <a href="/projects" className="btn btn-outline-primary mx-2">View Projects</a>
        <a href="/contact" className="btn btn-primary mx-2">Contact Me</a>
      </div>
    </div>
  );
};

export default Home;
