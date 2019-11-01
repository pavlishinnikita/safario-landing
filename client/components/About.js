import React from 'react';

const About = () => {
  return (
    <section className="bg-gray section-padding magic-ball magic-ball-about">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-6 mb-4 mb-md-0">
            <div className="about-img">
              <img className="img-fluid" src="/images/home/about-img.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5 col-md-6 align-self-center about-content">
            <h2>Exploration is <br className="d-none d-xl-block" /> really the essence <br className="d-none d-xl-block" /> of the human spirit</h2>
            <p>Simple text</p>
            <a className="button" href="#">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
