import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col} from 'react-bootstrap';
import { ArrowRightCircle } from 'react-feather';
import { Button, UncontrolledTooltip, Badge } from 'reactstrap';

const Main = () => {
  return (
    <main className="w-100 text-black">
      <Row className="px-md-5 mx-md-5">
        <Col className=" d-none d-md-block mr-3">
        <svg viewBox="0 0 32 32" height="320px" selectable="1" width="320px" className="sc-1pmbxjh-0 pmruo">
                    <g fill="none" fillRule="evenodd">
                      <circle cx="16" cy="16" r="16" fill="#F7931A"></circle>
                      <path fill="#FFF" fillRule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"></path>
                    </g>
                  </svg>
        </Col>
        <Col className="px-0 mx-auto d-flex align-items-center">
          <div className="text-center">
            <Badge pill className="ae-color-lightblue px-4 text-uppercase h-auto py-1" id="cf2">
              Code For Fun {'< cf2 >'}
            </Badge>
            <UncontrolledTooltip
              placement="top"
              target="cf2">
              Version: 1.2.0
            </UncontrolledTooltip>
            <div className="px-4 px-sm-0 mt-4" style={{color: "#1b3066"}}>
              <h1 className="mb-5 font-weight-bold">
                Welcome to the Code For Fun @J2GT!
              </h1>
              <p className="font-size-xl text-black-50 mb-3 mx-3">
                I am so glad you are here. This is a simple web app that displays some blocks (data structure which groups transactions) from blockchain.info. 
                You will also select each block to see its details.
              </p>
              <p className="text-black-50 font-size-lg">
                Click in the button below to see how it works.
              </p>
              <div className="divider border-2 border-light my-5 border-light opacity-2 mx-auto rounded-circle w-50" />
              <div className="d-flex justify-content-center">
                <Button
                  tag={Link}
                  to="/dashboard"
                  size="lg"
                  data-testid="btnLanding"
                  style={{backgroundColor: "#00adee", border: "2px solid #00adee"}}
                  className="d-block d-lg-inline-block"
                  title="Let's Go!">
                  <span className="btn-wrapper--label">Let's Go!  </span>
                  <span className="btn-wrapper--icon ">
                    <ArrowRightCircle />
                  </span>
                </Button>
              </div>
              
            </div>
          </div>
        </Col>
      </Row>
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="white"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,202.7C672,213,768,235,864,213.3C960,192,1056,128,1152,133.3C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </main>
  );
}

export default Main;