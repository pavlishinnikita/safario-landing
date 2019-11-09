import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Head from './head';
import Header from './Header';
import Footer from './Footer';
import HeroBaner from './HeroBaner';
import ServiceArea from './ServiceArea';
import About from './About';
import TourSection from './TourSection';
import TestimonialSection from './TestimonialSection';

const Safario = () => {
  const [navbar, setNavbar] = useState('');
  const navOffsetTop = 100; // in future: get header height + 50
  const onScroll = () => {
    const scroll = window.scrollY;
    if (scroll >= navOffsetTop) {
      setNavbar('navbar_fixed');
    } else {
      setNavbar('');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  });

  return (
    <div className="test" onScroll={onScroll}>
      <Head title="Home" />
      <Header test={navbar} />
      <HeroBaner />
      <ServiceArea />
      <About />
      <TourSection />
      <TestimonialSection />
      <Footer />
    </div>
  )
}


const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Safario)
