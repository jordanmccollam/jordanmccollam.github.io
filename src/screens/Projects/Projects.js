import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Container, Row, Col } from 'react-bootstrap'
import { Card, Project, Header } from '../../components';
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

import './_projects.scss';

const logger = "Projects:: ";

const projects = [
  {
    name: 'INSTAPLAN',
    img: instaplan,
    link: 'https://insta-plan.herokuapp.com/',
    tags: ['react', 'mongodb', 'mongoose', 'sass', 'node.js', 'express.js', 'auth0'],
    github: 'https://github.com/jordanmccollam/instaplan'
  },
  {
    name: 'SMART DIARY',
    img: smartdiary,
    link: 'https://smart-diary.herokuapp.com/',
    tags: ['react', 'mongodb', 'mongoose', 'sass', 'node.js', 'express.js', 'auth0'],
    github: 'https://github.com/jordanmccollam/smartdiary'
  },
  {
    name: "BILLS N' SHEET",
    img: billsnsheet,
    link: 'https://billsnsheet.herokuapp.com/',
    tags: ['react', 'mongodb', 'mongoose', 'sass', 'node.js', 'express.js', 'auth0'],
    github: 'https://github.com/jordanmccollam/financial-planner'
  },
  {
    name: "LASER DEFENDER",
    img: laserdefender,
    link: 'https://jordanmccollam.github.io/laserdefender/',
    tags: ['unity', 'c#'],
    github: 'https://github.com/jordanmccollam/laserdefender'
  },
]

const Projects = (props) => {
  let classes = {
		[`projects`]: true
	};

  return (
    <div className={`${props.className} ${classnames(classes)}`} id="projects">
      <Container className="h-100">
        {/* <h1 className="tracking-in-expand text-alt">PROJECTS</h1> */}
        <Header color="bg" size="md">PROJECTS</Header>

        <Row className="content justify-content-center">
          <Col lg={10}>
            <Row>
              {projects.map((project, i) => (
                <Col lg={6} key={`project-${i}`}>
                  <Project project={project} />
                </Col>
              ))}
            </Row>
          </Col>
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


