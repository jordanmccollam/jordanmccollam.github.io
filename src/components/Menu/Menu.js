import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col } from 'react-bootstrap';
import logo1 from '../../logo-mono.png';
import logo2 from '../../assets/logo-2.png';
import logo3 from '../../assets/logo-3.png';
import { FaUserCircle, FaGithub, FaProjectDiagram, FaLinkedinIn } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

import './_menu.scss';

const logger = "Menu:: ";

const iconSize = '2em'

const links = [
  {
    name: 'ABOUT',
    icon: <FaUserCircle size={iconSize} />
  },
  {
    name: 'PROJECTS',
    icon: <FaProjectDiagram size={iconSize} />
  },
  {
    name: 'CONTACT',
    icon: <MdMail size={iconSize} />
  },
  {
    name: 'GITHUB',
    icon: <FaGithub size={iconSize} />
  },
  {
    name: 'LINKEDIN',
    icon: <FaLinkedinIn size={iconSize} />
  },
]

const levels = [460, 530, 600, 660, 730, 830, 1350, 1420, 1490, 1560, 1630, 1760]

const Menu = (props) => {
  const [ state, setState ] = useState('level-1');
  const [ logo, setLogo ] = useState(logo1)
  let classes = {
		[`menu`]: true,
    [`menu-${state}`]: true
	};

  const doAction = (name) => {
    switch(name) {
      case 'GITHUB':
        window.open("https://github.com/jordanmccollam");
        break;
      case 'LINKEDIN':
        window.open("https://www.linkedin.com/in/jordan-mccollam/");
        break;
      default: 
        var elmnt = document.getElementById(name.toLowerCase());
        elmnt.scrollIntoView();
        return;
    }
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if (window.scrollY >= levels[0] && window.scrollY < levels[1]) {setState('level-2');}
    else if (window.scrollY >= levels[1] && window.scrollY < levels[2]) {setState('level-3');}
    else if (window.scrollY >= levels[2] && window.scrollY < levels[3]) {setState('level-4');}
    else if (window.scrollY >= levels[3] && window.scrollY < levels[4]) {setState('level-5');}
    else if (window.scrollY >= levels[4] && window.scrollY < levels[5]) {setState('level-6');}
    else if (window.scrollY >= levels[6] && window.scrollY < levels[7]) {setState('level-7');}
    else if (window.scrollY >= levels[7] && window.scrollY < levels[8]) {setState('level-8');}
    else if (window.scrollY >= levels[8] && window.scrollY < levels[9]) {setState('level-9');}
    else if (window.scrollY >= levels[9] && window.scrollY < levels[10]) {setState('level-10');}
    else if (window.scrollY >= levels[10] && window.scrollY) {setState('level-11');}
    else {setState('level-1');}

    if (window.scrollY < 830) {
      setLogo(logo1);
    } 
    else if (window.scrollY >= 830 && window.scrollY < 1720) {
      setLogo(logo3);
    }
    else if (window.scrollY >= 1720) {
      setLogo(logo2);
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


