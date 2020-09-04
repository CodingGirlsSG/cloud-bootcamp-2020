import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";

const contents = [
  {
    qns: "Who should sign up for the Code with Cloud Programme?",
    ans: "We welcome any female developers with some experience in coding, who are thinking of upskilling themselves in cloud computing! You could be a recent graduate or a mid-career switcher, but most importantly, you are willing to commit to 8 weeks of deep diving into the fundamentals of cloud computing."
  },
  {
    qns: "When is the deadline for registration?",
    ans: "[...]"
  },
  {
    qns: "I am aspiring to be a Cloud Practitioner. Is this course for me?",
    ans: "This programme will equip you with the fundamental skills needed to launch your career in cloud computing and a conducive (online) learning environment with other like-minded people. While we will guide participants to be Google Cloud Certified at the end of the programme, it is not guaranteed and is dependent on your active participation and [...]."
  },
  {
    qns: "Can males sign up for this programme?",
    ans: "As CodingGirls aim to uplift women and their representation in the tech industry, unfortunately this programme is women-only. Do check out XXX or XXX for other co-ed tech career programmes!"
  },
  {
    qns: "How much is this programme?",
    ans: "It is free-of-charge. However, you will have to take care of your own software needs."
  },
  {
    qns: "How long is this course?",
    ans: "It will run for 8 weeks. Please see our Schedule for more information."
  },
  {
    qns: "How does the study group work?",
    ans: "Once you’ve been selected for the programme, you will be randomly grouped into peer groups of 5. Each study group will have a mentor who is responsible for weekly check-ins and study sessions with the group.\nWe have kept the numbers low for members per study group as we find that learning might be best [...]"
  },
  {
    qns: "Can I choose to be in the same study group as my friend?",
    ans: "No. You will be randomly grouped with others in order to maximise the learning experience with other participants from diverse backgrounds."
  },
  {
    qns: "What apps will we be using for communications throughout this programme?",
    ans: "We will have a dedicated CodingGirls Slack Channel where you will find your study groups, as well as a general channel for all participants of Code with Cloud 💫"
  },
  {
    qns: "Is taking the exam optional?",
    ans: "Yes."
  }
]

const CustomCard = ({ index, qns, ans }) => (
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey={index}>
      {qns}
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={index}>
      <Card.Body style={{ whiteSpace: "pre-line" }}>{ans}</Card.Body>
    </Accordion.Collapse>
  </Card>
)

CustomCard.defaultProps = {
  index: "",
  header: "",
  body: ""
}

CustomCard.propTypes = {
  index: PropTypes.number,
  header: PropTypes.string,
  body: PropTypes.string
}


const Faq = () => (
  <>
    <Container fluid className="px-0 py-5 bg-grey">
      <h2 className="my-5 text-center">FAQ</h2>
      <Row className="m-3 justify-content-center">
        <Col sm={12} md={8} className="d-flex flex-column">
          <Accordion defaultActiveKey="0" className="shadow">
            {contents.map(({ qns, ans }, index) => (
              <CustomCard
                index={index.toString()}
                qns={qns}
                ans={ans}
              />
            ))}
          </Accordion>
        </Col>
      </Row >
    </Container>
  </>
)

export default Faq;