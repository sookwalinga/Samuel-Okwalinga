import React from 'react';
import '../social_icons/style.css';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
  return (
    <Col xl={12} className='social-icons'>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <a
        href='https://www.facebook.com/Sokwalinga'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon className='fb' icon={faFacebook} />
      </a>
      <a
        href='https://github.com/sookwalinga'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon className='git' icon={faGithub} />
      </a>
      <a
        href='https://twitter.com/sookwalinga'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon className='twitter' icon={faTwitter} />
      </a>
      <a
        href='https://sookwalinga.medium.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon className='insta' icon={faMedium} />
      </a>
      <a
        href='https://www.linkedin.com/in/samuel-okwalinga/?originalSubdomain=bd'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon className='linkedin' icon={faLinkedin} />
      </a>
    </Col>
  );
}

export default SocialIcons;
