import React from 'react';
import '../footer/style.css';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

function Footer() {
  return (
    <Container className="footer" fluid={true}>
      <Row >
        <Col xl={12}>
        Copyright © 2020-{(new Date().getFullYear())} <strong>Samuel Okwalinga</strong>,  <small>V1.2</small>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
