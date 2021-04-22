import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Container, Row, Col } from 'react-bootstrap'
import { Card } from '../../components';

import './_contact.scss';

const logger = "Contact:: ";

const Contact = (props) => {
  let classes = {
		[`contact`]: true
	};

  return (
    <div className={`${props.className} ${classnames(classes)}`} id="contact">
      <Container className="h-100">
        <h1 className="tracking-in-expand">CONTACT</h1>

        <Row className="content swing-top-fwd justify-content-center">
          <Col lg={10}>

          </Col>
        </Row>
      
      </Container>
    </div>
  )
}

Contact.propTypes = {
  className: PropTypes.string
}

Contact.defaultProps = {
  className: ""
}

export default Contact;


