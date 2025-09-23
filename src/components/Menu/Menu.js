import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col } from 'react-bootstrap';
import logo1 from '../../assets/UI/logo-mono.png';
import logo2 from '../../assets/UI/logo-2.png';
import logo3 from '../../assets/UI/logo-3.png';
import profileCircle from '../../assets/UI/circleNoShadow.png';
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

  useEffect(() => {
    console.log("LEVEL: ", state);
  }, [state])

  const handleScroll = () => {
    // const h = (window.innerHeight - 386);
    // const y = window.scrollY;
    // const t = 64;
    
    const h = (window.innerHeight - 450); // 386 is roughly the height of the menu bar so the color only changes at menu height
    const y = window.scrollY;
    const t = 64;
    const multiplier = 4.75; // This should be changed based on section height. If section is one page multiplier = 2. After overflowing, I had to increase...

    // To level 7 is the project page...
    if (y >= h && y < h+t) {setState('level-2');}
    else if (y >= h+t && y < h+(t*2)) {setState('level-3');}
    else if (y >= h+(t*2) && y < h+(t*3)) {setState('level-4');}
    else if (y >= h+(t*3) && y < h+(t*4)) {setState('level-5');}
    else if (y >= h+(t*4) && y < h+(t*5)) {setState('level-6');}
    else if (y >= h+(t*5) && y < (h*multiplier)+(t*6)) {setState('level-7');}

    // From here it reverses the effects
    else if (y >= (h*multiplier)+(t*6) && y < (h*multiplier)+(t*7)) {setState('level-8');}
    else if (y >= (h*multiplier)+(t*7) && y < (h*multiplier)+(t*8)) {setState('level-9');}
    else if (y >= (h*multiplier)+(t*8) && y < (h*multiplier)+(t*9)) {setState('level-10');}
    else if (y >= (h*multiplier)+(t*9) && y < (h*multiplier)+(t*10)) {setState('level-11');}
    else if (y >= (h*multiplier)+(t*10) && y < (h*multiplier)+(t*11)) {setState('level-12');}
    else if (y >= (h*multiplier)+(t*11)) {setState('level-13');}

    // Keeps everything tidy and error free!
    else {setState('level-1');}
  }

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      {/* <img src={logo} alt="logo" className="logo" /> */}
      {/* <img src={profileCircle} alt="logo" className="profile-circle avoid-clicks" /> */}

      <div className="menu-links">
        <div className="menu-logo">JM</div>
        {links.map((link, i) => (
          <div onClick={() => doAction(link.name)} key={`link-${i}`} className="menu-link" >
            <span className="menu-link-name">{link.name}</span> 
            {link.icon}
          </div>
        ))}
      </div>
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


