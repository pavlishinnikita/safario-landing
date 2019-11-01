import React from 'react';

const HeroBaner = () => {
  return (
    <section className="hero-banner magic-ball">
      <div className="container">
        <div className="row align-items-center text-center text-md-left">
          <div className="col-md-6 col-lg-5 mb-5 mb-md-0">
            <h1>Travel More To Discover Yourself</h1>
            <p>Simple text </p>
            <a className="button button-hero mt-4" href="#">Get Started</a>
          </div>
          <div className="col-md-6 col-lg-7 col-xl-6 offset-xl-1">
            <img className="img-fluid" src="/images/home/hero-img.png" alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBaner;
