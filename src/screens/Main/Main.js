import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Container, Row, Col, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
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
  const [ bioSize, setBioSize ] = useState('md');
  let classes = {
		[`main`]: true
	};

  const RenderBio = () => {
    switch (bioSize) {
      case "sm":
        return "Jordan McCollam is a software developer and a cool guy!";
        break;
      case "md":
        return "Jordan McCollam is an a skilled, apsiring software developer. Jordan was certified by Vanderbilt's Full-stack Coding Bootcamp and gained professional experience working for Neurotargeting. There he developed information-heavy interfaces for medical use. Jordan's pride and joy is developing video games in his free time.";
        break;
      case "lg":
        return "Jordan McCollam is a skilled, aspiring software developer with a love for problem solving and tech. Jordan first learned problem solving skills from a previous career as an Audio Engineer. Then completed and was certified by the Vanderbilt Full-stack Coding Bootcamp among other various courses. Finally gained experience working for Neurotargeting, developing information-heavy interfaces for medical use. Jordan's pride and joy is developing video games in his free time.";
        break;
      default:
        break;
    }
  }

  return (
    <Container fluid className={`${props.className} ${classnames(classes)}`} id="about">
      <div className="main-section">
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
      </div>

      <Container className="about-section px-5">
        <Header color="white" size="sm" className="pb-3">ABOUT </Header>
        <div className="size-adjuster pr-5">
          <div className="font-weight-bold">Adjust the size of Jordan's bio</div>
          <div className="d-flex justify-content-center align-items-center mt-2">
            <Button onClick={() => setBioSize("sm")} variant={`${bioSize == "sm" ? "light" : "outline-light"}`} size="sm" className="mr-2"></Button>
            <Button onClick={() => setBioSize("md")} variant={`${bioSize == "md" ? "light" : "outline-light"}`} size="md" className="mr-2"></Button>
            <Button onClick={() => setBioSize("lg")} variant={`${bioSize == "lg" ? "light" : "outline-light"}`} size="lg"></Button>
          </div>
        </div>
        <div>{RenderBio()}</div>
      </Container>
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


