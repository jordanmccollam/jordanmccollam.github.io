import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Container, Row, Col, OverlayTrigger, Tooltip, Button, DropdownButton, Dropdown } from 'react-bootstrap'
import { Card, Header, Achievement } from '../../components';
import { FaFilePdf, FaFileWord } from 'react-icons/fa';
import mainHeader from '../../assets/UI/header.png';
import { nt, vandy, unity, aspnet } from '../../assets/qualification';
import resume from '../../assets/resumes/2022_JordanMcCollam_Resume.docx';
import doc from '../../assets/resumes/mccollam_resume.docx';
import pdf from '../../assets/resumes/mccollam_resume.pdf';

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
        return "Jordan is a software developer and a cool guy!";
        break;
      case "md":
        return "Jordan is an inspired software developer. Jordan was certified by Vanderbilt's Full-stack Coding Bootcamp and gained professional experience working for Neurotargeting.";
        break;
      case "lg":
        return "Jordan is an inspired software developer with a love for problem solving. Jordan was certified by Vanderbilt's Full-stack Coding Bootcamp and gained professional experience working for Neurotargeting. Jordan loves music and writes songs in his spare time. For now, Jordan is focused on building his career as a software developer";
        break;
      default:
        break;
    }
  }

  return (
    <Container fluid className={`${props.className} ${classnames(classes)} center`} id="about">
      <div className="">
        <div className="d-none d-lg-block">
          <img alt="header" className="main-header" src={mainHeader} />
        
          <div className="about-section">
            <div className="about-section-content">
              <Row>
                <Col><Header size="sm" className="about-header" >ABOUT</Header></Col>
                <Col className="d-flex justify-content-end">
                  <div className="size-adjuster">
                    <div className="text-center font-primary">ADJUST SIZE OF BIO</div>
                    <div className="d-flex justify-content-center align-items-center mt-1">
                      <Button onClick={() => setBioSize("sm")} variant={`${bioSize == "sm" ? "light" : "outline-light"}`} size="sm" className="mr-2"></Button>
                      <Button onClick={() => setBioSize("md")} variant={`${bioSize == "md" ? "light" : "outline-light"}`} size="md" className="mr-2"></Button>
                      <Button onClick={() => setBioSize("lg")} variant={`${bioSize == "lg" ? "light" : "outline-light"}`} size="lg"></Button>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="bio">
                {RenderBio()}
              </div>
              <div className="text-center">
                <DropdownButton
                  variant="warning"
                  title="Click here for my official resume!"
                  id="dropdown-resumes"
                  className="mt-3"
                  alignRight
                >
                  <Dropdown.Item href={doc} download>Resume.docx</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href={pdf} download>Resume.pdf</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          </div>
        </div>

        <Row className="d-block d-lg-none">
          <Col xs={12} className="text-center" ><img alt="header" className="small-header" src={mainHeader} /></Col>
          <Col xs={12} className="text-center" >
            <div className="about-section mt-3">
              <div className="about-section-content">
                <Row>
                  <Col><Header size="sm" className="about-header text-left" >ABOUT</Header></Col>
                  <Col className="d-flex justify-content-end">
                    <div className="size-adjuster">
                      <div className="text-center font-primary">ADJUST SIZE OF BIO</div>
                      <div className="d-flex justify-content-center align-items-center mt-1">
                        <Button onClick={() => setBioSize("sm")} variant={`${bioSize == "sm" ? "light" : "outline-light"}`} size="sm" className="mr-2"></Button>
                        <Button onClick={() => setBioSize("md")} variant={`${bioSize == "md" ? "light" : "outline-light"}`} size="md" className="mr-2"></Button>
                        <Button onClick={() => setBioSize("lg")} variant={`${bioSize == "lg" ? "light" : "outline-light"}`} size="lg"></Button>
                      </div>
                    </div>
                  </Col>
                </Row>

                <div className="bio text-left">
                  {RenderBio()}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Achievements */}
      <div className="achievements d-none d-lg-flex">
        <div className="achievement-instructions">Check out my qualifications</div>
        <div className="achievement-row"><Achievement pic={nt} description={`Jordan worked for Neurotargeting`} bigger /></div>
        <div className="achievement-row"><Achievement pic={vandy} description="Jordan is certified by the Vanderbilt Full-stack Web Developer Course" /></div>
        <div className="achievement-row"><Achievement pic={unity} description="Jordan makes games with unity and C#" nudgeLeft /></div>
        <div className="achievement-row"><Achievement pic={aspnet} description="Jordan is certified by the Complete ASP.NET MVC 5 Course" biggerAndDown /></div>
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


