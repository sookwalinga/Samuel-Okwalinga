import React from 'react';
import '../cv/style.css';
import { Col, Row } from 'react-bootstrap';
import CLC from '../cv_left_content';

function CV() {
  return (
    <Row style={{ height: '100%', width: '100%' }}>
      <Col className='about'>
        <CLC />
      </Col>
    </Row>
  );
}

export default CV;
