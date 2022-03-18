import React, { Component } from 'react';
import '../cv_left_content/style.css';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHdd } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { Modal, Button } from 'react-bootstrap';
import Projects from '../projects';
import { Link } from 'react-router-dom';

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1,
    }}
  />
);

class CLC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      show: false,
    };
  }

  toggleModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    const { show } = this.state;
    return (
      <Slide left>
        <Bounce>
          <div className='clc_main'>
            <div className='clc_container'>
              <Fade top cascade>
                <h1 className='clc_header'>About</h1>
              </Fade>
              <ColoredLine color='#FFC466' />
              <Fade top cascade>
                <div className='AboutBtnContainer'>
                  <Link to={'./project'} className='left'>
                    <FontAwesomeIcon icon={faHdd} className='left_icon' />
                    <br />
                    <br />
                    Projects & Experiences
                  </Link>
                  <div className='right'>
                    <FontAwesomeIcon
                      onClick={() => this.setState({ show: true })}
                      icon={faGithubSquare}
                      className='right_icon'
                    />
                    <br />
                    <br />
                    Git Projects
                  </div>
                </div>
              </Fade>
            </div>
            <Modal show={show} size='xl' onHide={this.toggleModal} centered>
              <Modal.Header className='modalHeader' closeButton>
                <Projects />
              </Modal.Header>
              <Button
                onClick={() => this.setState({ show: false })}
                variant='outline-light'
                size='lg'
                className='modal-exit-btn about_modal'
              >
                Close
              </Button>
            </Modal>
          </div>
        </Bounce>
      </Slide>
    );
  }
}

export default CLC;
