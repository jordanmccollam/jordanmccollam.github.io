import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Card } from '../../components';
import profile from '../../transparent.png';
import moment from 'moment';
import vandy from '../../assets/vandy.png';
import aspnet from '../../assets/aspnet.png';
import python from '../../assets/python.png';
import { FaFilePdf, FaFileWord } from 'react-icons/fa';

import './_main.scss';

const logger = "Main:: ";

const Main = (props) => {
  let classes = {
		[`main`]: true
	};

  return (
    <Container className={`${props.className} ${classnames(classes)}`} id="about">
      <h1 className="tracking-in-expand">JORDAN MCCOLLAM</h1>
      <h2 className="tracking-in-expand text-lighter">SOFTWARE DEVELOPER</h2>

      <div className="content swing-top-fwd">
        <span className="font-weight-bold">Hello world! Here's a little bit about me...</span>
        <br/> I am {moment().diff('1997-11-17', 'years')} years old and married to the beautiful Leesha McCollam.
        <br/> I've gained experience working for Neurotargeting,
        <br/> developing information-heavy interfaces for medical use.
        <br/> I first learned problem solving skills as an audio engineer,
        <br/> which helped me as I quickly fell in love with programming.
        <br/> Then I attended the Vanderbilt Full Stack Coding Bootcamp 
        <br/> and completed other courses on Udemy as well.
      </div>
      
      <Row className="swing-top-fwd">
        <div>
          <div className="content">
            <span className="font-weight-bold">Education</span>
            <div className="d-flex">
              <Card className="content-item" id="vandy" tooltip="Vanderbilt Full Stack Coding Bootcamp (MERN)" ><img src={vandy} alt="image" className="content-image" /></Card>
              <Card className="content-item" id="aspnet" tooltip="The Complete ASP.NET MVC 5 Course" ><img src={aspnet} alt="image" className="content-image" /></Card>
              <Card className="content-item" id="python" tooltip="2021 Complete Python Bootcamp From Zero to Hero" ><img src={python} alt="image" className="content-image" /></Card>
            </div>
          </div>
        </div>
        <div>
          <div className="content">
            <span className="font-weight-bold">Resume</span>
            <div className="d-flex">

              <Card className="content-item" id="download-pdf" tooltip="Download as PDF" ><FaFilePdf size={50} /></Card>
              <Card className="content-item" id="download-word" tooltip="Download as WORD" ><FaFileWord size={50} /></Card>
            </div>
          </div>
        </div>
      </Row>

      <img src={profile} alt="profile image" className="profile-image flip-in-diag-2-br d-none d-lg-block" />
    </Container>
  )
}

Main.propTypes = {
  className: PropTypes.string
}

Main.defaultProps = {
  className: ""
}

export default Main;


