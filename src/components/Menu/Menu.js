import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col } from 'react-bootstrap';
import logo from '../../logo-mono.png'

import './_menu.scss';

const logger = "Menu:: ";

const Menu = (props) => {
  let classes = {
		[`menu`]: true
	};

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      <img src={logo} alt="logo" className="logo" />
    </div>
  )
}

Menu.propTypes = {
  className: PropTypes.string
}

Menu.defaultProps = {
  className: ""
}

export default Menu;


