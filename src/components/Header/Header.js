import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col } from 'react-bootstrap';

import './_header.scss';

const logger = "Header:: ";

const Header = (props) => {
  let classes = {
		[`header`]: true,
    [`header-${props.color}`]: true,
    [`header-${props.size}`]: true,
    [`header-border`]: props.useBorder,
	};

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      {props.children}
    </div>
  )
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  className: PropTypes.string,
  color: PropTypes.oneOf(["white", "yellow", "bg"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  useBorder: PropTypes.bool 
}

Header.defaultProps = {
  className: "",
  children: "Header",
  color: "bg",
  size: "md",
  useBorder: false
}

export default Header;


