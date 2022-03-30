import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Card, Header, Achievement } from '../../components';
import profile from '../../transparent.png';
import moment from 'moment';
import vandy from '../../assets/vandy.png';
import aspnet from '../../assets/aspnet.png';
import python from '../../assets/python.png';
import unity from '../../assets/unity.png';
import nt from '../../assets/nt_transparent.png';
import { FaFilePdf, FaFileWord } from 'react-icons/fa';

import './_main.scss';

const logger = "Main:: ";

const Main = (props) => {
  let classes = {
		[`main`]: true
	};

  return (
    <Container fluid className={`${props.className} ${classnames(classes)}`} id="about">
      <div className="full center-h">
      {/* <div className="full center pb-5"> */}
        <div className="flip-in-diag-2-br text-center mt-5 pt-5">
          <Header color="yellow" size="lg">Jordan</Header>
          <Header color="yellow" size="md" useBorder>McCollam</Header>
          <Header color="yellow" size="sm" className="mt-2">Software Developer</Header>
        </div>
      </div>

      {/* Achievements */}
      <div className="achievements d-none d-lg-flex">
        <div className="achievement-instructions">Check out my qualifications</div>
        <div className="achievement-row"><Achievement pic={nt} description={`Jordan worked for Neurotargeting`} bigger /></div>
        <div className="achievement-row"><Achievement pic={vandy} description="Jordan is certified by the Vanderbilt Full-stack Web Developer Course" /></div>
        <div className="achievement-row"><Achievement pic={unity} description="Jordan makes games with unity and C#" nudgeLeft /></div>
        <div className="achievement-row"><Achievement pic={aspnet} description="Jordan is certified by the Complete ASP.NET MVC 5 Course" biggerAndDown /></div>
        {/* <div className="achievement-row"><Achievement pic={python} description="Jordan is learning Python from the Complete Python Bootcamp" /></div> */}
      </div>
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


