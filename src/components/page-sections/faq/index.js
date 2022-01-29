import * as React from "react";
import { Container, Tabs, Tab, Row, Col, Nav, Sonnet } from "react-bootstrap";

const Faq = () => {
  return (
    <Container className="rs-features">
      <h2 className="text-center pt-5">Frequently Asked Questions</h2>
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                    <p>udhuhsichijsaoscjsc dfhihifefef</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <p>udhuhsichijsaoscjsc dfhihifefef</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Tabs>
    </Container>
  );
};
export default Faq;
