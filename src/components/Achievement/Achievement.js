import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col } from 'react-bootstrap';
import achievementIcon from '../../assets/award.png';
import nt from '../../assets/nt_transparent.png';

import './_achievement.scss';

const logger = "Achievement:: ";

const Achievement = (props) => {
  let classes = {
		[`achievement`]: true,
    ['achievement-nudge-left']: props.nudgeLeft,
    ['achievement-bigger-down']: props.biggerAndDown,
    ['achievement-bigger']: props.bigger,
	};

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      <div className="shell">
        <img src={props.pic} alt="achievement" className="pic" />
      </div>
      <img src={achievementIcon} alt="achievement_icon" className="icon" />
    </div>
  )
}

Achievement.propTypes = {
  className: PropTypes.string,
  pic: PropTypes.element,
  nudgeLeft: PropTypes.bool,
  biggerAndDown: PropTypes.bool,
  bigger: PropTypes.bool,
}

Achievement.defaultProps = {
  className: "",
  pic: nt,
  nudgeLeft: false,
  biggerAndDown: false,
  bigger: false,
}

export default Achievement;


