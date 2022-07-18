import React from 'react';
import { Row, Col} from 'react-bootstrap';

const Footer = () => (
  <Row className="bg-white w-100">
    <Col className="px-0">
      <footer className="mt-auto text-black">
        <small className="d-block pt-4">
          Thanks <strong>Bitwala </strong> for the inspiration.
        </small>
      </footer>
    </Col>
  </Row>
);

export default Footer;