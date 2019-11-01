import React from 'react';

const TestimonialSection = () => {
  return (
    <section className="bg-gray section-padding magic-ball magic-ball-testimonial pb-xl-5">
      <div className="container">
        <div className="section-intro text-center pb-90px">
          <img className="section-intro-img" src="/images/home/section-icon.png" alt="" />
          <h2>Our client says</h2>
          <p>Fowl have fruit moveth male they are that place you will lesser</p>
        </div>


        <div className="owl-carousel owl-theme testimonial pb-xl-5">
          <div className="testimonial__item">
            <div className="row">
              <div className="col-md-3 col-lg-2 align-self-center">
                <div className="testimonial__img">
                  <img className="card-img rounded-0" src="/images/testimonial/t-slider1.png" alt="" />
                </div>
              </div>
              <div className="col-md-9 col-lg-10">
                <div className="testimonial__content mt-3 mt-sm-0">
                  <h3>Daniel heart</h3>
                  <p>Project manager, Nestle</p>
                  <p className="testimonial__i">Simple test</p>
                  <span className="testimonial__icon"><i className="ti-quote-right" /></span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial__item">
            <div className="row">
              <div className="col-md-3 col-lg-2 align-self-center">
                <div className="testimonial__img">
                  <img className="card-img rounded-0" src="/images/testimonial/t-slider1.png" alt="" />
                </div>
              </div>
              <div className="col-md-9 col-lg-10">
                <div className="testimonial__content mt-3 mt-sm-0">
                  <h3>Daniel heart</h3>
                  <p>Project manager, Nestle</p>
                  <p className="testimonial__i">Simple text</p>
                  <span className="testimonial__icon"><i className="ti-quote-right" /></span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial__item">
            <div className="row">
              <div className="col-md-3 col-lg-2 align-self-center">
                <div className="testimonial__img">
                  <img className="card-img rounded-0" src="/images/testimonial/t-slider1.png" alt="" />
                </div>
              </div>
              <div className="col-md-9 col-lg-10">
                <div className="testimonial__content mt-3 mt-sm-0">
                  <h3>Daniel heart</h3>
                  <p>Project manager, Nestle</p>
                  <p className="testimonial__i">Simple text</p>
                  <span className="testimonial__icon"><i className="ti-quote-right" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
