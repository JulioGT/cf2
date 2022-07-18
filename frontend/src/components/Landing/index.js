import React from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';

import Main from './main';
import Header from './header';
import Footer from './footer';

const Landing = () => {

    return (
      <Container className="mw-100 px-0 justify-content-between">
        <Row>
          <Col className="px-0">
            <div className="d-flex mw-100 h-100 text-center" >        
              <div className="app mw-100">
                <Header />
                <Main />
                <Footer />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(Landing);
