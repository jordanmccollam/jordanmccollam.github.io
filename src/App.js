import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as Screens from './screens';
import * as Comp from './components';
import { Spinner } from 'react-bootstrap';

import './App.scss';

function App() {

  return (
    <div className="App">
      <Container fluid className="px-0" >
        <Row>
          <Col>
            {/* <Comp.Menu className="d-none d-lg-block" /> */}

            <Screens.Main />
            <Screens.Projects />
            <Screens.Contact />

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
