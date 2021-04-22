import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col, OverlayTrigger, Tooltip, Overlay } from 'react-bootstrap';

import './_card.scss';

const logger = "Card:: ";

const Card = (props) => {
  let classes = {
		[`card`]: true
	};

  return (
    <OverlayTrigger overlay={<Tooltip id={props.id}>{props.tooltip}</Tooltip>} >
    <div className={`${props.className} ${classnames(classes)}`}>
    
      {props.children}
    </div>
    </OverlayTrigger>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node
  ]),
  className: PropTypes.string,
  id: PropTypes.string,
  tooltip: PropTypes.string
}

Card.defaultProps = {
  className: "",
  id: 'default-card-id',
  tooltip: 'Default Tooltip'
}

export default Card;


