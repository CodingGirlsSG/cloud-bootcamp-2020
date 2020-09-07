import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hairizuan from "../images/profile-Hairizuan Noorazman.jpeg";
import Arpit from "../images/profile-Arpit Maheshwari.jpeg";
import Ikhsan from "../images/profile-Ikhsan Saputro.jpeg";
import George from "../images/profile-George Seah.jpeg";
import Akshata from "../images/profile-Akshata Mohanty.jpeg";
import Ajit from "../images/profile-Ajit Kumar Amit.png";

const Avatar = ({ name, link, job, dp }) => (
  <Col sm={12} md={4} className="mb-5 d-flex flex-column mb-4 align-items-center">
    <img src={dp} alt={`${name}'s profile`} className="mb-3 avatar" />
    <a href={link} target="_blank" rel="noreferrer">{name}</a>
    <span>{job}</span>
  </Col>
)

const Mentors = () => (
  <Container fluid className="px-0 pt-5 bg-grey">
    <Row className="m-3 justify-content-center">

      <Col sm={12} md={8} className="d-flex flex-column text-center">
        <h2 className="mb-5">Mentors</h2>
        <Row className=" justify-content-center">
          <Avatar name="Ajit Kumar Amit" link="https://www.linkedin.com/in/akamit/" job="Managing Partner at Agilitics" dp={Ajit} />
          <Avatar name="Hairizuan Noorazman" link="https://www.linkedin.com/in/hairizuan-noorazman/" job="DevOps Engineer at Acronis" dp={Hairizuan} />
          <Avatar name="Arpit Maheshwari" link="https://www.linkedin.com/in/arpit-maheshwari-70a9a718/" job="Data Architect at Chope" dp={Arpit} />
          <Avatar name="George Seah" link="https://www.linkedin.com/in/george-seah-jin-siang/" job="Director at Revenue Management solutions, GCP Certified" dp={George} />
          <Avatar name="Akshata Mohanty" link="https://www.linkedin.com/in/akshatamohanty/?originalSubdomain=sg" job="Full Stack Engineer at Viki, Inc." dp={Akshata} />
        </Row>
      </Col>
    </Row>
  </Container >
)

export default Mentors;