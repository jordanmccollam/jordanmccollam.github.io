import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Container, Row, Col } from 'react-bootstrap'
import { Card, Project, Header, ProjectInfo } from '../../components';
import { FaFilePdf, FaFileWord } from 'react-icons/fa';
import smartdiary from '../../assets/projects/smartdiary.png';
import emoball from '../../assets/projects/emoball.png';
import billsnsheet from '../../assets/projects/billsnsheet2025.jpg'
import instaplan from '../../assets/projects/instaplan.png'
import cdoez from '../../assets/projects/cdoez_landing.png'

import './_projects.scss';

const logger = "Projects:: ";

const projects = [
  // {
  //   name: 'SMART DIARY',
  //   img: smartdiary,
  //   link: 'https://smart-diary.herokuapp.com/',
  //   tags: ['react', 'mongodb', 'sass', 'node.js', 'auth0'],
  //   github: 'https://github.com/jordanmccollam/smartdiary',
  //   type: "Website",
  //   description: "The Smart Diary acts as a virtual diary, but now with added smart features! Log your mood changes and the smart diary will present you with your average mood. This can be your mood for the year, or just this week!"
  //   description: "Personal journaling app with a custom mood tracker, trend visualizations, and supportive well-being insights."
  // },
  {
    name: `BILLS N' SHEET`,
    img: billsnsheet,
    link:'https://billsnsheet.up.railway.app/',
    tags: ['React', 'Sass', 'Javascript', 'Express.js', 'Mongoose', 'MongoDB', 'Auth0', 'Node'],
    github: 'https://github.com/jordanmccollam/BillsNSheet',
    type: "Website",
    description: "Full-stack expense manager with secure authentication, a custom interactive table, and seemless database integration. Track your bills but more importantly, your spending money!"
  },
  {
    name: `INSTA-PLAN`,
    img: instaplan,
    link:'https://instaplan.up.railway.app',
    tags: ['React', 'Sass', 'Javascript', 'Express.js', 'Mongoose', 'MongoDB', 'Auth0', 'Node'],
    github: 'https://github.com/jordanmccollam/instaplan',
    type: "Website",
    description: "A classic, trello-like task manager with project sharing, relational data modeling, and a drag and drop interface."
  },
  {
    name: `CDOEZ FLICKS`,
    img: cdoez,
    link:'https://cdoezflicks.up.railway.app/',
    tags: ['React', 'Sass', 'Javascript', 'Express.js', 'Dropbox', 'API', 'Node'],
    github: 'https://github.com/jordanmccollam/photoportfolio',
    type: "Website",
    description: "This is a real professional website and portfolio built to showcase a local photographer. It features a dynamic gallery that uses the Dropbox API to pull images from his Dropbox account."
  },
  // {
  //   name: 'EMOBALL',
  //   img: emoball,
  //   link: 'https://youtu.be/ttlYU7xV-eA',
  //   tags: ['C#', 'Unity_Game_Engine', 'Logic_Pro_X', 'Affinity_Designer'],
  //   github: 'https://github.com/jordanmccollam',
  //   type: "Game", 
  //   description: 'A multiplayer game where you embody emotions with unique abilities and battle for control of the human psyche! Game developed, designed, animated, and scored by Jordan.'
  // }
]

const Projects = (props) => {
  let classes = {
		[`projects`]: true
	};

  const [ headerColor, setHeaderColor ] = useState('bg');

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.body.scrollHeight - windowHeight;

    // How far have we scrolled? (0 to 1)
    const progress = scrollTop / docHeight;

    // Map progress to circle size (0% to speed%)
    const speed = 245;
    const size = 0 + progress * speed;

    document.querySelector(".color-splash").style.clipPath = `circle(${size}% at left center)`;

    // when progress > ~0.3, switch header text color
    if (progress > 0.3) {
      // document.querySelector(".projects-header").style.color = "#1e90ff"; // Color 1
      setHeaderColor("bg");
    } else {
      // document.querySelector(".projects-header").style.color = "#ff6347"; // Color 2
      setHeaderColor("yellow");
    }
  });

  return (
    <div className={`${props.className} ${classnames(classes)}`} id="projects">
      <div className="color-splash"></div>

      
      <Container className="h-100" fluid>
        <Header color={headerColor} size="md" className="pt-5 mb-5 projects-header">PROJECTS</Header>

        <Row className="content justify-content-center front-section">
          <Col lg={8} >
            <Row className="d-flex justify-content-center">
              {projects.map((project, i) => (
                <Col lg={6} key={`project-${i}`} className="project-container">
                  <Project project={project} />
                  <ProjectInfo project={project} />
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


