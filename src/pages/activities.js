import React from "react"
import { Container, Row, Col } from "react-bootstrap"


const Schedule = () => (
  <>
    <Container fluid className="px-0 py-5 bg-grey">
      <h2 className="mb-5 text-center">Exciting Activities and Rewards</h2>
      <Row className="m-3 justify-content-center text-left">
        <Col sm={12} md={6} className="d-flex flex-column">
          <p className="mb-2">
            <b>Virtual Learning</b> - Self-paced learning with free access to Coursera and Qwiklabs<br />
          </p>
          <p className="mb-2">
            <b>Career Talks</b> - Gain insight from industry professionals who have made it<br />
          </p>
          <p className="mb-2">
            <b>Mentoring</b> - Weekly mentoring session with industry professionals<br />
          </p>
          <p className="mb-2">
            <b>Mock Interviews</b> - Level up your coding skills by practise with insider<br />
          </p>
          <p className="mb-2">
            <b>Cash Reward</b> - We will reward you with cash once you get your certificate<br />
          </p>
        </Col>
      </Row >
    </Container>
  </>
)

export default Schedule;