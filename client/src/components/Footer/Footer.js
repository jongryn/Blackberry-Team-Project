import React from "react";
import "./Footer.css";
import { Col, Row, Container } from "../../components/Grid";

const Footer = () => (
  <div className="footer">
  <Container>
    <Row>
      <Col size='xs-4' className='hometab'>
        <a href="/"><span className='glyphicon glyphicon-home'></span><br/>Home
        </a>
      </Col>
      <Col size='xs-4' className='triviatab'>
        <a href="/Trivia"><span className='glyphicon glyphicon-home'></span><br/>Trivia
        </a>
      </Col>
      <Col size='xs-4' className='managementtab'>
        <a href="/Restaurantsignup"><span className='glyphicon glyphicon-home'></span><br/>Host Login
        </a>
      </Col>
  </Row>
  </Container>
  </div>
);

export default Footer;
