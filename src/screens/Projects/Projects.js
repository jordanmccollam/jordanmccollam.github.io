import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Container, Row, Col } from 'react-bootstrap'
import { Card, Project, Header, ProjectInfo } from '../../components';
import { FaFilePdf, FaFileWord } from 'react-icons/fa';
import shapesBg from '../../assets/UI/shapes.png';
import smartdiary from '../../assets/projects/smartdiary.png';
import emoball from '../../assets/projects/emoball.png';

import './_projects.scss';

const logger = "Projects:: ";

const projects = [
  {
    name: 'SMART DIARY',
    img: smartdiary,
    link: 'https://smart-diary.herokuapp.com/',
    tags: ['react', 'mongodb', 'sass', 'node.js', 'auth0'],
    github: 'https://github.com/jordanmccollam/smartdiary',
    type: "Website",
    description: "The Smart Diary acts as a virtual diary, but now with added smart features! Log your mood changes and the smart diary will present you with your average mood. This can be your mood for the year, or just this week!"
  },
  {
    name: 'EMOBALL',
    img: emoball,
    link: 'https://youtu.be/ttlYU7xV-eA',
    tags: ['C#', 'Unity', 'Logic_Pro_X', 'Affinity_Designer'],
    github: 'https://github.com/jordanmccollam',
    type: "Game", 
    description: 'A multiplayer game where you embody emotions and battle for control of the human psyche! Each emotion/character has a unique ability to aid you. Game developed, designed, animated, and scored by Jordan.'
  }
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
        <Header color="yellow" size="md" className="pt-5 mb-5">PROJECTS</Header>

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


