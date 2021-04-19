import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Container, Row, Col } from 'react-bootstrap'
import { Card } from '../../components';
import profile from '../../transparent.png';
import moment from 'moment';

import './_main.scss';

const logger = "Main:: ";

const Main = (props) => {
  let classes = {
		[`main`]: true
	};

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      <h1 className="tracking-in-expand text-lighter">JORDAN MCCOLLAM</h1>
      <h2 className="tracking-in-expand">SOFTWARE DEVELOPER</h2>

      <div className="content swing-top-fwd">
        Hello world! Here's a little bit about me...
        <br/> I am {moment().diff('1997-11-17', 'years')} years old and married to the beautiful Leesha McCollam.
        <br/> I first learned problem solving skills as an audio engineer,
        <br/> which helped me as I quickly fell in love with programming.
        <br/> I attended the Vanderbilt Full Stack Coding Bootcamp 
        <br/> and completed other courses on Udemy as well.
        <br/> I gathered experience working for Neurotargeting,
        <br/> developing information-heavy interfaces for medical use.
      </div>

      <img src={profile} alt="profile image" className="profile-image flip-in-diag-2-br" />
    </div>
  )
}

Main.propTypes = {
  className: PropTypes.string
}

Main.defaultProps = {
  className: ""
}

export default Main;


