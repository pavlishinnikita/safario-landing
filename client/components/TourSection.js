import React from 'react';

const TourSection = () => {
  return (
    <section className="section-margin pb-xl-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="tour-card">
              <img className="card-img rounded-0" src="/images/home/tour1.png" alt="" />
              <div className="tour-card-overlay">
                <div className="media">
                  <div className="media-body">
                    <h4>Paris tour offer</h4>
                    <small>5 days offer</small>
                    <p>We proper guided our tourist</p>
                  </div>
                  <div className="media-price">
                    <h4 className="text-primary">$65/day</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="tour-content">
                  <h2>We offer worldwise tour plan recently</h2>
                  <p>Simple text </p>
                </div>
              </div>
            </div>

            <div className="tour-card">
              <img className="card-img rounded-0" src="/images/home/tour2.png" alt="" />
              <div className="tour-card-overlay">
                <div className="media">
                  <div className="media-body">
                    <h4>Paris tour offer</h4>
                    <small>5 days offer</small>
                    <p>We proper guided our tourist</p>
                  </div>
                  <div className="media-price">
                    <h4 className="text-primary">$65/day</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-7">
            <div className="tour-card">
              <img className="card-img rounded-0" src="/images/home/tour3.png" alt="" />
              <div className="tour-card-overlay">
                <div className="media">
                  <div className="media-body">
                    <h4>Paris tour offer</h4>
                    <small>5 days offer</small>
                    <p>We proper guided our tourist</p>
                  </div>
                  <div className="media-price">
                    <h4 className="text-primary">$65/day</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="tour-card">
              <img className="card-img rounded-0" src="/images/home/tour4.png" alt="" />
              <div className="tour-card-overlay">
                <div className="media">
                  <div className="media-body">
                    <h4>Paris tour offer</h4>
                    <small>5 days offer</small>
                    <p>We proper guided our tourist</p>
                  </div>
                  <div className="media-price">
                    <h4 className="text-primary">$65/day</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TourSection;
