import React, { Component } from 'react';
import '../about/style.css';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import ReactGa from 'react-ga';
import { Helmet } from 'react-helmet';
import CV from '../../components/cv';
import HamburgerMenu from '../../components/hamburger_menu';
import particles from '../../const/about_particle.js';
import Particles from 'react-particles-js';

class About extends Component {
  componentDidMount() {
    //--Samuel Okwalinga's Portfolio website Google analytics--
    //--Replace with your own key !!
    ReactGa.initialize('UA-154721739-1');
    ReactGa.pageview('sookwalinga.netlify.app- About Screen');
    //--Samuel Okwalinga's Portfolio website Google analytics--
  }

  render() {
    return (
      <Container className='About-header' fluid={true}>
        <Helmet>
          <meta charSet='utf-8' />
          <title>About | Samuel Okwalinga</title>
          <link rel='canonical' href='https://sookwalinga.netlify.app/' />
          <meta
            name='description'
            content='Samuel Okwalinga | Mobile App Developer | Web App Developer | Software Developer'
          />
        </Helmet>
        <Animate to='1' from='0' attributeName='opacity'>
          <Particles params={particles} className='particle' />
          <Row className='About-main'>
            <HamburgerMenu />
            <CV />
          </Row>
          <Row className='About-footer'>
            <Footer />
          </Row>
        </Animate>
      </Container>
    );
  }
}

export default About;
