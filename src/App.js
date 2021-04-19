import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as Screens from './screens';
import * as Comp from './components';
import { Spinner } from 'react-bootstrap';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className="full">
          <Col>

            <Screens.Main />

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
