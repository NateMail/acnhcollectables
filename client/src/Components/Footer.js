import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./stylingComponents/footer.css";

const Footer = () => (
  <div className="footer">
    <div>
      <h1 className="footer-header">
        Animal Crossing New Horizons Collectable List
      </h1>
    </div>
    <Container fluid={true}>
      <Row>
        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
          <h2>Disclaimer</h2>
          <p>
            I do not own any of the properties listed. This is a fan site
            created for Animal Crossing New Horizons on the Nintendo Switch.
          </p>
        </Col>
        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
          <h2>Contact Me</h2>
          <a
            className="footer-a"
            href="https://www.linkedin.com/in/nathanmailhiot/"
          >
            LinkedIn
          </a>
          <a className="footer-a" href="https://www.natemailhiot.com/">
            Website
          </a>
        </Col>
        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
          <h2>Special Thanks</h2>
          <p>
            Special thanks to all the devs who made Animal Crossing New Horizons
            and to you for using my website!
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
