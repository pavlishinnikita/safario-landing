import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={'header_area '.concat(props.test)}>
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container box_1620">
            <Link className="navbar-brand logo_h" to="/"> <img src="/images/logo.png" alt="" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul className="nav navbar-nav menu_nav justify-content-end">
                <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="about">About</Link></li>
                <li className="nav-item"><Link className="nav-link" to="package">Packages</Link></li>
                <li className="nav-item submenu dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><Link className="nav-link" to="amentities">Amentities</Link></li>
                  </ul>
                </li>

                <li className="nav-item submenu dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><Link className="nav-link" to="blog">Blog Single</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="blog-details">Blog Details</Link></li>
                  </ul>
                </li>
                <li className="nav-item"><Link className="nav-link" to="contact">Contact</Link></li>
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
