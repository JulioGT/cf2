import Moment from 'react-moment';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

import { 
  ChevronRight, 
  ChevronsRight,
  ChevronLeft, 
  ChevronsLeft,
  RefreshCw, 
  Search, 
  Activity, 
  Maximize, 
  DollarSign 
} from 'react-feather';

import {
  Row,
  Col,
  Card,
  Table,
  Badge,
  Label,
  Modal,
  Button,
  CardBody,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';

//Actions
import { getBlocksCall } from '../../actions/getBlocksActions';
import { getBlockDetails } from '../../actions/getBlockDetails';

import Header from '../Landing/header';

const Dashboard = (props) => {
  
  //Destructure Actions
  const { getBlocksCall, getBlockDetails, blocks } = props;
  const [modal, setModal] = useState(false);

  // //Stores the PAGE value, prior to consume the endpoint
  const [pageValue, setPageValue] = useState(1);

  //Requesting blocks from blockchain.info throgh a proxy in an action
  useEffect(() => {
    getBlocksCall(pageValue);
  }, [getBlocksCall, pageValue]);

  //display Modal when click on the magnifying glass from the All Affiliates section
  const toggle = (e, blockHash) => {
    e.preventDefault();

    //Get all Affiliates Info from API
    if (blockHash !== undefined) {
      getBlockDetails(blockHash);
      
    }
    setModal(!modal);
    // setBlockIndex(blockHash);
  };

  //Building an HTML based on the blocks object from the API
  const parseBlocksResult = () => {
    try {
    
      if (blocks) {
        return Object.values(blocks).map((blk, idx) => {
          return (
            <tr key={idx}>
              <td className="pl-3">
                <div className="d-flex align-items-center">
                  <div className="font-weight-bold text-black"
                    title="Click on the magnifying glass for details">
                    {blk.hash}
                    <span style={{ fontSize: "smaller" }} className="text-black-50 d-block">
                      <Moment unix>{blk.time}</Moment>
                    </span>
                  </div>
                </div>
              </td>
              <td className="text-center">
                <Badge color="success" className="h-auto py-0 px-3">
                  {blk.height}
                </Badge>
              </td>
              <td className="text-center">
                <div>
                  <Button
                    style={{ backgroundColor: "rgba(60,68,177,.15)", color: "#3c44b1", border: "0px", height: "40px", width: "30px" }}
                    size="sm"
                    onClick={(e) => toggle(e, blk.hash)}
                    className="btn-icon d-40 p-0 btn-animated-icon-sm">
                    <Search />
                  </Button>
                </div>
              </td>
            </tr>
          )
        })
      }
      else{
        console.log('erro');
      }
    } catch (e) {
      console.error(e);
      return (
        <tr className="w-100 text-center">
          <td>Oops! An Error has occured, please try again later.</td>
        </tr>
      )
    }
  }

  
  //PAGINATION: Gets the next set of blocks
  // const getNextPage = (e, value) => {
  //    e.preventDefault();
  //    let pageNo = pageValue;

  //   if (value === '+'){
  //     pageNo+=1;
  //   } else {
  //     if( pageNo > 1) pageNo-=1;
  //   }
  //   setPageValue(pageNo);

  // }

  return (
    <>
      <Container>
        <div className="pb-5 mb-5">
          <Header />
        </div>
        <Card className="card-box mb-5">
          <div className="card-header bg-white justify-content-between d-flex">
            <div className="">
              <div className=" mr-3">
                <span className="mr-3">
                  <svg viewBox="0 0 32 32" height="32px" selectable="1" width="32px" className="sc-1pmbxjh-0 pmruo">
                    <g fill="none" fillRule="evenodd">
                      <circle cx="16" cy="16" r="16" fill="#F7931A"></circle>
                      <path fill="#FFF" fillRule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"></path>
                    </g>
                  </svg>
                </span>
                <b>Blocks</b> <br />
              </div>

              <small className="text-black-50">List the latest blocks and details of each block.</small>
            </div>
            <div>
              <Button size="lg" style={{ backgroundColor: "#3c44b1" }} className="d-40 p-0">
                <RefreshCw className="p-2" style={{ width: "40px", height: "50px" }} />
              </Button>
            </div>
          </div>
          <CardBody className="p-0">
            <div className="table-responsive-md" style={{ overflow: "auto", maxHeight: "560px" }}>
              <Table hover responsive className="text-nowrap mb-0">
                <thead className="thead-light">
                  <tr>
                    <th style={{ width: '40%', position: "sticky", top: "0" }}>Block Hash</th>
                    {/* <th className="text-center">Block Time</th> */}
                    <th className="text-center" style={{ position: "sticky", top: "0" }}>Block Height</th>
                    <th className="text-center" style={{ position: "sticky", top: "0" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    props.blocks.blocksLoading ? (
                      <tr>
                        <td className="text-center font-size-lg pt-5 mt-5">
                          <span
                            className="spinner-border text-warning"
                            role="status"
                            aria-hidden="true"></span>
                          <br />
                          <br />
                          <span className="font-weight-bold text-warning"> Loading...</span>
                        </td>
                      </tr>
                    ) :
                      parseBlocksResult()
                  }
                </tbody>
              </Table>
            </div>

            <div className="p-3 d-flex justify-content-center">
              <Pagination className="pagination-primary">
                <PaginationItem disabled>
                  <PaginationLink
                    first
                    href="#/"
                    onClick={(e) => e.preventDefault()}>
                    <ChevronsLeft />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem disabled>
                  <PaginationLink
                    previous
                    href="#/"
                    onClick={(e) => e.preventDefault()}>
                    <ChevronLeft />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink href="#/" onClick={(e) => e.preventDefault()}>
                    1
                </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    next
                    href="#/"
                    onClick={(e) => e.preventDefault()}>
                    <ChevronRight />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    last
                    href="#/"
                    onClick={(e) => e.preventDefault()}>
                    <ChevronsRight />
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </div>
          </CardBody>
        </Card>

        <Modal className="modal-lg" zIndex={2000} centered isOpen={modal} toggle={toggle}>
          <div>
            <Card className="shadow-none border-0">
              <div style={{ backgroundColor: "#6a70d6" }}>
                <div className=" opacity-2" />
                <div className="" />
                <div className=" text-center text-light p-3">
                  <h5 className="mb-2 font-size-xl font-weight-bold">
                    Block Details
                </h5>
                  <p className="mb-0 font-size-lg opacity-8">
                    Here are the details about the block you selected.
                </p>
                </div>
              </div>
              {
                props.blockSelected.blockSelectedLoading ? (
                  <div className="card-body px-lg-5 font-size-sm ">
                    <div className="text-center bg-white mb-3 container py-3">
                      <span
                            className=" spinner-border text-warning"
                            role="status"
                            aria-hidden="true"></span>
                            <br />
                            <br />
                          <span className="font-weight-bold text-warning "> Loading...</span>
                    </div>
                  </div>
                ) : (
                  <div className="card-body px-lg-5 font-size-sm ">
                    <Row>
                      <Col>
                        <Card className="card-box mb-5">
                          <Row className="no-gutters">
                            <Col md="4" className="p-3 border-right">
                              <div className="divider-v divider-v-lg" />
                              <div className="text-center">
                                <div>
                                  <Maximize className="text-warning"/>
                                </div>
                                <div className="mt-2 line-height-sm">
                                  <b className="font-size-lg">{props.blockSelected.size}</b>
                                  <span className="text-black-50 d-block">Size</span>
                                </div>
                              </div>

                            </Col>
                            <Col md="4" className="p-3 border-right">
                              <div className="divider-v divider-v-lg" />

                              <div className="text-center">
                                <div>
                                  <Activity className="text-info" />
                                </div>
                                <div className="mt-2 line-height-sm">
                                  <b className="font-size-lg">{props.blockSelected.tx.length}</b>
                                  <span className="text-black-50 d-block">Transactons</span>
                                </div>
                              </div>

                            </Col>
                            <Col md="4" className="p-3">

                              <div className="text-center">
                                <div>
                                  <DollarSign className="text-success"/>
                                </div>
                                <div className="mt-2 line-height-sm">
                                  <b className="font-size-lg">{props.blockSelected.fee}</b>
                                  <span className="text-black-50 d-block">Fee</span>
                                </div>
                              </div>

                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                    <div className="bg-white mb-3 container py-3">
                      <Row>
                        <Col>
                          <Label htmlFor="blockhash" className="font-weight-bold">Block Hash</Label>
                          <div>{props.blockSelected.hash}</div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Label htmlFor="blockprevious" className="pt-2 font-weight-bold">Block Previous</Label>
                          <div>{props.blockSelected.prev_block}</div>
                        </Col>
                      </Row>
                    </div>
                    <div className="mb-3"></div>
                  </div>
                )
              }
              
            </Card>
          </div>
        </Modal>

      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  
  return {
    ...state
  }
};

const mapDispatchToProps = dispatch => ({
  getBlocksCall: (page) => dispatch(getBlocksCall(page)),
  getBlockDetails: (blockHash) => dispatch(getBlockDetails(blockHash))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
