import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col } from 'react-bootstrap';
import logo from '../../logo-mono.png';
import { FaUserCircle, FaGithub } from 'react-icons/fa';

import './_menu.scss';

const logger = "Menu:: ";

const iconSize = '2em'

const links = [
  {
    name: 'ABOUT',
    icon: <FaUserCircle size={iconSize} />
  },
  {
    name: 'GITHUB',
    icon: <FaGithub size={iconSize} />
  }
]

const Menu = (props) => {
  let classes = {
		[`menu`]: true
	};

  const doAction = (name) => {
    switch(name) {
      case 'GITHUB':
        window.open("https://github.com/jordanmccollam");
        break;
      default: 
        console.log(logger + 'No action assigned');
        return;
    }
  }

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      <img src={logo} alt="logo" className="logo" />

      {links.map((link, i) => (
        <div onClick={() => doAction(link.name)} key={`link-${i}`} className="menu-link" >
          <span className="menu-link-name">{link.name}</span> 
          {link.icon}
        </div>
      ))}
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


