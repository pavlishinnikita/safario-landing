import React, { useState } from 'react';
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
  const onWheel = (e) => {
    if (e.deltaY > 0) {
      setNavbar('navbar_fixed');
    } else {
      setNavbar('');
    }
  }
  return (
    <div onWheel={onWheel}>
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
