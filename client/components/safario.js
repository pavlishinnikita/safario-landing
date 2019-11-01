import React from 'react';
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

class Safario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Head title="Home" />
        <Header />
        <HeroBaner />
        <ServiceArea />
        <About />
        <TourSection />
        <TestimonialSection />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Safario)
