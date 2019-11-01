import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3  col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>About Agency</h6>
              <p>
                The world has become so fast
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>Navigation Links</h6>
              <div className="row">
                <div className="col">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Feature</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                  </ul>
                </div>
                <div className="col">
                  <ul>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>Newsletter</h6>
              <p>
                For business professionals
                {/* caught between high OEM price and mediocre print and graphic output. */}
              </p>
              <div id="mc_embed_signup">
                <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscription relative">
                  <div className="input-group d-flex flex-row">
                    <input name="EMAIL" placeholder="Email Address" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Email Address '" required="" type="email" />
                    <button className="btn bb-btn" type="button"> <span className="lnr lnr-location" /></button>
                  </div>
                  <div className="mt-10 info" />
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-md-6 col-sm-6">
            <div className="single-footer-widget mail-chimp">
              <h6 className="mb-20">InstaFeed</h6>
              <ul className="instafeed d-flex flex-wrap">
                <li><img src="/images/instagram/i1.jpg" alt="" /></li>
                <li><img src="/images/instagram/i2.jpg" alt="" /></li>
                <li><img src="/images/instagram/i3.jpg" alt="" /></li>
                <li><img src="/images/instagram/i4.jpg" alt="" /></li>
                <li><img src="/images/instagram/i5.jpg" alt="" /></li>
                <li><img src="/images/instagram/i6.jpg" alt="" /></li>
                <li><img src="/images/instagram/i7.jpg" alt="" /></li>
                <li><img src="/images/instagram/i8.jpg" alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <p className="col-lg-8 col-sm-12 footer-text m-0 text-center text-lg-left">
              Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
            </p>
            <div className="col-lg-4 col-sm-12 footer-social text-center text-lg-right">
              <a href="#"> <i className="fab fa-facebook-f" /></a>
              <a href="#"> <i className="fab fa-twitter" /></a>
              <a href="#"> <i className="fab fa-dribbble" /></a>
              <a href="#"> <i className="fab fa-behance" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
