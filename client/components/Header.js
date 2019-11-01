import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header_area">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container box_1620">
            <a className="navbar-brand logo_h" href="index.html"> <img src="/images/logo.png" alt="" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul className="nav navbar-nav menu_nav justify-content-end">
                <li className="nav-item active"><Link className="nav-link" to="/safario">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="about">About</Link></li>
                <li className="nav-item"><Link className="nav-link" to="package">Packages</Link></li>
                <li className="nav-item submenu dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="nav-link" href="amentities.html">Amentities</a></li>
                  </ul>
                </li>

                <li className="nav-item submenu dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="nav-link" href="blog.html">Blog Single</a></li>
                    <li className="nav-item"><a className="nav-link" href="blog-details.html">Blog Details</a></li>
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
              </ul>

              <div className="nav-right text-center text-lg-right py-4 py-lg-0">
                <a className="button" href="#">Get Started</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
