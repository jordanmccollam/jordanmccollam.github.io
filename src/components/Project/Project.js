import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col } from 'react-bootstrap';
import instaplan from '../../assets/instaplan.png';
import { FaGithub } from 'react-icons/fa';

import './_project.scss';

const logger = "Project:: ";

const Project = (props) => {
  let classes = {
		[`project`]: true
	};

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      <div className="project-bar">
        <div className="red-dot"></div>
        <div className="yellow-dot"></div>
        <div className="green-dot"></div>
        <div className="github-link" onClick={() => window.open(props.project.github)}><FaGithub size={'100%'} /></div>
        {props.project.name}
      </div>

      <div className="project-content" onClick={() => window.open(props.project.link)}>
        <img src={props.project.img} alt={props.project.name} className="project-content-img" />
        <div className="project-overlay">
          <div className="font-primary project-overlay-header">Click to visit page</div>
          <div className="font-primary project-overlay-header-sub">(or click the github icon to see the code)</div>
        </div>
      </div>
    </div>
  )
}

Project.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object,
}

Project.defaultProps = {
  className: "",
  project: {name: 'PROJECT', img: instaplan, tags: ['tag'], link: 'https://insta-plan.herokuapp.com/', github: 'https://github.com/jordanmccollam/instaplan', type: "Website", description: "This is an example description"},
}

export default Project;


