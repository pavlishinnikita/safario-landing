import React from 'react';

const ServiceArea = () => {
  return (
    <section className="section-margin generic-margin">
      <div className="container">
        <div className="section-intro text-center pb-90px">
          <img className="section-intro-img" src="/images/home/section-icon.png" alt="" />
          <h2>Our Popular Services</h2>
          <p>Fowl have fruit moveth male they are that place you will lesser</p>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="service-card text-center">
              <div className="service-card-img">
                <img className="img-fluid" src="/images/home/service1.png" alt="" />
              </div>
              <div className="service-card-body">
                <h3>Hotel Booking</h3>
                <p>Description</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="service-card text-center">
              <div className="service-card-img">
                <img className="img-fluid" src="/images/home/service2.png" alt="" />
              </div>
              <div className="service-card-body">
                <h3>Flight Booking</h3>
                <p>Description</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="service-card text-center">
              <div className="service-card-img">
                <img className="img-fluid" src="/images/home/service3.png" alt="" />
              </div>
              <div className="service-card-body">
                <h3>Destination Booking</h3>
                <p>Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceArea;
