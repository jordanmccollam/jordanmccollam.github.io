import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Card } from '../../components';
import { FaPaperPlane } from 'react-icons/fa';

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
          <Col lg={8}>
            <h5 className="text-white">Let's talk!</h5>
            <form action="https://formspree.io/f/jordy.mccollam@gmail.com" method="POST" >
              <Form.Control placeholder="Email" type="email" name="_replyto" />
              <Form.Control className="mt-2" placeholder="Subject" name="subject" />
              <Form.Control className="mt-2" as="textarea" rows={5} placeholder="Message" name="message" />
              <div className="d-flex justify-content-between mt-2">
                <Button type="submit">Send <FaPaperPlane/></Button>
                <div className="text-white d-none d-lg-block">Or email directly at jordy.mccollam@gmail.com</div>
              </div>
            </form>
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


