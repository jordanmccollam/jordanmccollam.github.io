import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Container, Row, Col } from 'react-bootstrap'
import { Card, Project, Header, ProjectInfo } from '../../components';
import profile from '../../transparent.png';
import moment from 'moment';
import vandy from '../../assets/vandy.png';
import aspnet from '../../assets/aspnet.png';
import python from '../../assets/python.png';
import { FaFilePdf, FaFileWord } from 'react-icons/fa';
import instaplan from '../../assets/instaplan.png';
import smartdiary from '../../assets/smartdiary.png';
import billsnsheet from '../../assets/billsnsheet.png';
import laserdefender from '../../assets/laserdefender.jpeg';
import shapesBg from '../../assets/shapes.png';

import './_projects.scss';

const logger = "Projects:: ";

const projects = [
  {
    name: 'INSTAPLAN',
    img: instaplan,
    link: 'https://insta-plan.herokuapp.com/',
    tags: ['react', 'mongodb', 'sass', 'node.js', 'auth0'],
    github: 'https://github.com/jordanmccollam/instaplan',
    type: "Game",
    description: "This is an example description"
  },
  {
    name: 'SMART DIARY',
    img: smartdiary,
    link: 'https://smart-diary.herokuapp.com/',
    tags: ['react', 'mongodb', 'sass', 'node.js', 'auth0'],
    github: 'https://github.com/jordanmccollam/smartdiary',
    type: "Website",
    description: "This is an example description"
  },
  // {
  //   name: "BILLS N' SHEET",
  //   img: billsnsheet,
  //   link: 'https://billsnsheet.herokuapp.com/',
  //   tags: ['react', 'mongodb', 'mongoose', 'sass', 'node.js', 'express.js', 'auth0'],
  //   github: 'https://github.com/jordanmccollam/financial-planner'
  // },
  // {
  //   name: "LASER DEFENDER",
  //   img: laserdefender,
  //   link: 'https://jordanmccollam.github.io/laserdefender/',
  //   tags: ['unity', 'c#'],
  //   github: 'https://github.com/jordanmccollam/laserdefender'
  // },
]

const Projects = (props) => {
  let classes = {
		[`projects`]: true
	};

  return (
    <div className={`${props.className} ${classnames(classes)}`} id="projects">
      <div className="shapes">
        <img src={shapesBg} alt="shapes" className="shapes-bg" />
        <img src={shapesBg} alt="shapes-layer-2" className="shapes-bg-layer-2" />
        <img src={shapesBg} alt="shapes-layer-3" className="shapes-bg-layer-3" />
      </div>
      <Container className="h-100" fluid>
        {/* <h1 className="tracking-in-expand text-alt">PROJECTS</h1> */}
        <Header color="yellow" size="md" className="pt-5">PROJECTS</Header>

        <Row className="content justify-content-center front-section">
          {projects.map((project, i) => (
            <Col lg={4} key={`project-${i}`} className="project-container">
              <Project project={project} />
              <ProjectInfo project={project} />
            </Col>
          ))}
        </Row>
      
      </Container>
    </div>
  )
}

Projects.propTypes = {
  className: PropTypes.string
}

Projects.defaultProps = {
  className: ""
}

export default Projects;


