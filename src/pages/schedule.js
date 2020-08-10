import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Badge } from "react-bootstrap";

const TimeItem = ({ week, details, last }) => (
  <Row className="mb-1 justify-content-center">
    <Col md={12} lg={9}>
      <Row className="d-flex flex-row">
        < Col md={12} lg={2} className="d-flex flex-column">
          <Row className="justify-content-center">
            <Badge pill variant="secondary" className="py-1 timebadge">
              Week {week}
            </Badge>
          </Row>
          <Row className={`mt-1 flex-grow-1 justify-content-center timeline ${last && "d-block d-md-none"}`} />
        </Col >
        <Col className="text-center text-lg-left pb-2">{details}</Col>
      </Row>
    </Col >
  </Row >
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
    <Container fluid className="px-0 py-5 bg-grey" id="schedule">
      <Row className="m-3 justify-content-center">
        <Col sm={12} md={8} className="d-flex flex-column">
          <h2 className="mb-4 text-center">Full Schedule</h2>
          <b className="mb-4 text-center"><i>8 weeks programme</i></b>
          <TimeItem week="0" details="Kickstart Session" />
          <TimeItem week="1" details="Google Cloud Platform Fundamentals: Core Infrastructure" />
          <TimeItem week="2-3" details="Essential Google Cloud Infrastructure: Core Services" />
          <TimeItem week="4" details="Break + Career talks" />
          <TimeItem week="5-6" details="Elastic Google Cloud Infrastructure: Scaling and Automation" />
          <TimeItem week="7" details="Preparation for Google Cloud Associate Cloud Engineer Exam" />
          <TimeItem week="8" details="Mock Interview + Closing ceremony" last />
        </Col>
      </Row >
    </Container>
  </>
)

export default Schedule;