import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col, Button } from 'react-bootstrap';
import instaplan from '../../assets/projects/instaplan.png';

import './_project-info.scss';

const logger = "ProjectInfo:: ";

const ProjectInfo = (props) => {
  let classes = {
		[`project-info`]: true
	};

  const onVisitPage = () => {
    window.open(props.project.link);
  }

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      {props.children}

      <div className="info">
        <h6>{props.project.type.toUpperCase()}</h6>
        {props.project.description}
      </div>

      <div className="buttons">
        {props.project.type.toLowerCase() == "website" ? (
          <Button variant="warning" className="text-white font-primary" onClick={onVisitPage} >Visit Page</Button>
        ) : (
          <Button variant="warning" className="text-white font-primary" onClick={onVisitPage} >See Game</Button>
        )}
      </div>

      <div className="project-tags d-none d-md-flex">
          <div className="info-sub-header font-primary" >{("Made With:").toUpperCase()} </div>
          {props.project.tags.map((tag, i) => (
            <div key={`${props.project.name.replace(/\s+/g, '')}-tag-${i}`} className="project-tag">{tag}</div>
          ))}
      </div>
    </div>
  )
}

ProjectInfo.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  className: PropTypes.string,
  project: PropTypes.object
}

ProjectInfo.defaultProps = {
  className: "",
  project: {name: 'PROJECT', img: instaplan, tags: ['tag'], link: 'https://insta-plan.herokuapp.com/', github: 'https://github.com/jordanmccollam/instaplan', type: "Website", description: "This is an example description"},
}

export default ProjectInfo;


