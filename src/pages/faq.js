import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";

const contents = [
  {
    qns: "Who should sign up for the Code with Cloud Programme?",
    ans: "We welcome any female developers with some experience in coding, who are thinking of upskilling themselves in cloud computing! You could be a recent graduate or a mid-career switcher, but most importantly, you are willing to commit 8 weeks to deep diving into the fundamentals of cloud computing, and are excited to form new connections with other like-minded peers!"
  },
  {
    qns: "When is the deadline for registration?",
    ans: "20th September 2020"
  },
  {
    qns: "Can males sign up for this programme?",
    ans: "As CodingGirls aim to uplift women and their representation in the tech industry, this programme is women-only."
  },
  {
    qns: "I am aspiring to be a Cloud Practitioner. Is this course for me?",
    ans: "This programme will equip you with the fundamental skills needed to launch your career in cloud computing and we aim to provide a conducive (online) learning environment with other like-minded people and mentors.\n\nWhile we will guide participants to be Google Cloud Certified at the end of the programme, it is not guaranteed and is dependent on your active participation and commitment to the course and activities."
  },
  {
    qns: "Will I become Google Cloud Certified after completing this programme?",
    ans: "No, but at the end of course, participants will be encouraged to sign up for the Google Cloud Associate Cloud Engineer Examination. Our Mentors will be guiding you throughout the process and hold group study sessions, where relevant."
  },
  {
    qns: "Will CodingGirls pay for my Google Cloud Certification examination?",
    ans: "We will reimburse participants who have successfully passed their Google Cloud Certification. 🎉"
  },
  {
    qns: "Is taking the exam optional?",
    ans: "Yes."
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
    qns: "What are the courses and activities I can expect from this bootcamp?",
    ans: "While the programme is entirely virtual, there'll be plenty of mentorship and networking opportunities.\n\nParticipants will be guided through a series of online foundational courses and workshops for Google Cloud, with the help of weekly check-ins with mentors and their study groups. These will be supported by unlimited access to Qwiklabs, a real cloud environment platform, for participants to practise and self-study. After completing the curriculum, participants will be prepared (and highly encouraged!) to take the Google Associate Cloud Engineer certification exam.\n\nTo give participants an extra edge in their career transitions, the online learning will be accompanied by a career coaching component in the form of mock interviews and sharing sessions by hiring managers."
  },
  {
    qns: "How does the study groups work?",
    ans: "Up to 50 participants will be selected for this programme. If you’ve been selected for the programme, you will be randomly grouped into peer groups of 5. Each study group will have a mentor who is responsible for weekly check-ins and study sessions with the group.\n\nWe have kept the numbers low for members per study group as we find that learning is best in smaller groups! That way, you can make new connections and motivate one another through this difficult time and climate."
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
    qns: "Do I have to commit to the full 8 weeks of the programme?",
    ans: "In order to have a meaningful learning experience for yourself and your peers, we strongly encourage every participant to contribute and take away as much as you can from the entire run of this programme.\nYou would need to commit an estimated 10 - 16 hours each week."
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
    <Container fluid className="px-0 py-5 bg-white">
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