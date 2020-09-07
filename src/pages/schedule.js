import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Badge } from "react-bootstrap";

const TimeItem = ({ date, details, last }) => (
  <Row className="d-flex flex-row">
    < Col md={12} lg={2} className="d-flex flex-column">
      <Row className="justify-content-center">
        <Badge pill variant="secondary" className="py-1 timebadge">
          {date}
        </Badge>
      </Row>
      <Row className={`mt-1 flex-grow-1 justify-content-center timeline ${last && "d-block d-md-none"}`} />
    </Col >
    <Col className="text-center text-lg-left pb-2">{details}</Col>
  </Row>
)

const TimelineHeader = ({ text }) => (
  <h3 className="mt-4 mb-3 text-center">{text}</h3>
)

TimeItem.defaultProps = {
  week: "",
  details: "",
  last: false
}

TimeItem.propTypes = {
  week: PropTypes.string,
  details: PropTypes.string,
  last: PropTypes.bool
}

const Schedule = () => (
  <>
    <Container fluid className="px-0 py-5 bg-white" id="schedule" >
      <Row className="m-3 justify-content-center">
        <Col sm={12} md={7} className="d-flex flex-column">
          <h2 className="mb-4 text-center">Full Schedule</h2>
          <b className="text-center"><i>8 weeks programme</i></b>

          <TimelineHeader text="Phase 1" />
          <TimeItem date="26 Sept" details="Workshop: Google Cloud Fundamentals: Core Infrastructure" />
          <TimeItem date="28 Sep - 4 Oct" details="Coursera: Essential Google Cloud Infrastructure: Foundation" />
          <TimeItem date="5 Oct - 11 Oct" details="Coursera:  Essential Google Cloud Infrastructure: Core Services" />
          <TimeItem date="12 Oct - 18 Oct" details="Coursera: Elastic Google Cloud Infrastructure: Scaling and Automation" />
          <TimeItem date="19 Oct -25 Oct" details="Coursera: Preparing for the Google Cloud Associate Cloud Engineer Exam" />

          <TimelineHeader text="Phase 2" />
          <TimeItem date="28 Oct" details="Talks:  GCP showcases" />
          <TimeItem date="31 Oct" details="Breakout session:  Chat with Certified Google Cloud Associate Cloud Engineers" />
          <TimeItem date="2 Nov - 15 Nov" details="Exam Preparation" />
          <TimeItem date="10 Nov (TBC)" details="Breakout session:  Chat with Certified Google Cloud Associate Cloud Engineers" />
          <TimeItem date="10 Nov (TBC)" details="Talks: Machine Learning with Google Cloud" />
          <TimeItem date="15 Nov" details="Examination Day" />
          <TimeItem date="6 Nov - 20 Nov" details="Mock Interview: Selected graduates to practise interview skills with insiders" />
          <TimeItem date="21 Nov" details="Closing" last />

          <p className="mt-4"><i>*please note that programme schedule may be subject to change</i></p>
        </Col>
      </Row >
    </Container>
  </>
)

export default Schedule;