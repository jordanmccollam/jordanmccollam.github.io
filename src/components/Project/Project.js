import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col } from 'react-bootstrap';

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
        {props.name}
      </div>

      <div className="project-content">

      </div>
    </div>
  )
}

Project.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string
}

Project.defaultProps = {
  className: "",
  name: 'PROJECT'
}

export default Project;


