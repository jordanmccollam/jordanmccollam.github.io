import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col } from 'react-bootstrap';
import instaplan from '../../assets/instaplan.png';

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
        {props.project.name}
      </div>

      <div className="project-content">
        <img src={props.project.img} alt={props.project.name} className="project-content-img" />
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
  project: {name: 'PROJECT', img: instaplan},
}

export default Project;


