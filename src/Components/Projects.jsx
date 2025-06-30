const Projects = () => {
  return (
    <section className="projects container py-5" id="projects">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100 project-item">
            <div className="card-body project-wrapper">
              <img
                src="/images/pro1.png"
                className="project-image"
                alt="E-commerce website for Boots"
                loading="lazy"
              />
              <div className="project-details">
                <h5 className="card-title">E-commerce Website for Boots</h5>
                <p>
                  A fully functional e-commerce platform for boots, featuring a responsive design, product filtering, and secure checkout. Built with React, Bootstrap, and Netlify hosting.
                </p>
                <a
                  href="https://nk-boots.netlify.app/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100 project-item">
            <div className="card-body project-wrapper">
              <img
                src="/images/pro2.png"
                className="project-image"
                alt="E-commerce Bikes Store"
                loading="lazy"
              />
              <div className="project-details">
                <h5 className="card-title">Retrofy Ecommerce</h5>
                <p>
                  An online store for accessaries, with a user-friendly interface, products, and cart functionality. Developed using React and deployed on Vercel.
                </p>
                <a
                  href="https://retrofy-five.vercel.app/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;