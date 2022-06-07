import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col } from 'react-bootstrap';
import achievementIcon from '../../assets/UI/award.png';
import chatBubble from '../../assets/UI/chatBubble.png';
import nt from '../../assets/qualification/nt_transparent.png';

import './_achievement.scss';
import { propTypes } from "react-bootstrap/esm/Image";

const logger = "Achievement:: ";

const Achievement = (props) => {
  const [ showingDescription, showDescription ] = useState(false);

  let classes = {
		[`achievement`]: true,
    ['achievement-nudge-left']: props.nudgeLeft,
    ['achievement-bigger-down']: props.biggerAndDown,
    ['achievement-bigger']: props.bigger,
	};

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      <div className="shell">
        <img 
          src={props.pic} 
          alt="achievement" 
          className="pic" 
          onMouseEnter={e => {
            showDescription(true);
          }}
          onMouseLeave={e => {
            showDescription(false);
          }}
        />
      </div>

      <img 
        src={achievementIcon} 
        alt="achievement_icon" 
        className="icon" 
      />

      <div className="achievement-description" style={{opacity: showingDescription ? "1" : "0"}} >
        <div className="description-container">
          <img src={chatBubble} alt="bubble" className="achievement-description-bubble" />
          <div className="achievement-description-text" >{props.description}</div>
        </div>
      </div>
    </div>
  )
}

Achievement.propTypes = {
  className: PropTypes.string,
  pic: PropTypes.string,
  nudgeLeft: PropTypes.bool,
  biggerAndDown: PropTypes.bool,
  bigger: PropTypes.bool,
  description: PropTypes.string,
}

Achievement.defaultProps = {
  className: "",
  pic: nt,
  nudgeLeft: false,
  biggerAndDown: false,
  bigger: false,
  description: "Description here",
}

export default Achievement;


