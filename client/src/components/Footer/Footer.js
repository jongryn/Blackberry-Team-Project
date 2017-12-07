import React from "react";
import "./Footer.css";
import { Col, Row, Container } from "../../components/Grid";

const Footer = () => (
  <div className="footer">
  <Container>
    <Row>
      <Col size='xs-4' className='hometab'>
        <span className='glyphicon glyphicon-home'></span><br/>Home
      </Col>
      <Col size='xs-4' className='triviatab'>
        <span className='glyphicon glyphicon-home'></span><br/>Trivia
      </Col>
      <Col size='xs-4' className='managementtab'>
        <span className='glyphicon glyphicon-home'></span><br/>Host Login
      </Col>
  </Row>
  </Container>
  </div>
);

export default Footer;
