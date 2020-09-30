import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Ajit from "../images/profile-Ajit Kumar Amit.png";
import Hairizuan from "../images/profile-Hairizuan Noorazman.jpeg";
import Arpit from "../images/profile-Arpit Maheshwari.jpeg";
import George from "../images/profile-George Seah.jpeg";
import Akshata from "../images/profile-Akshata Mohanty.jpeg";
import Anushree from "../images/profile-Anushree Paul.jpeg";
import Hae from "../images/profile-Hae Na Noh.jpeg";
import Min from "../images/profile-Min Fang.jpeg";
import Qiurong from "../images/profile-Qiurong Hu.jpeg";
import Melody from "../images/profile-Melody Huang.jpeg";
import Shafraz from "../images/profile-Shafraz Rahim.jpeg";
import Thriveni from "../images/profile-Thriveni T K.jpeg";
import Weiyuan from "../images/profile-Weiyuan Liu.jpeg";
import Salem from "../images/profile-Salem A.jpeg";
import Leona from "../images/profile-Leona Teng.jpeg";
import Jocelyn from "../images/profile-Jocelyn Agbeko.jpeg";
import empty from "../images/empty.gif"

const Avatar = ({ name, link, job, dp }) => (
  <Col sm={12} md={4} className="mb-5 d-flex flex-column mb-4 align-items-center">
    <img src={dp} alt={`${name}'s profile`} className="mb-3 avatar" />
    <a href={link} target="_blank" rel="noreferrer">{name}</a>
    <span>{job}</span>
  </Col>
)

const Mentors = () => (
  <Container fluid className="px-0 py-5 bg-grey">
    <Row className="m-3 justify-content-center">

      <Col sm={12} md={8} className="d-flex flex-column text-center">
        <h2 className="mb-5">Mentors & Speakers</h2>
        <Row className=" justify-content-center">
          <Avatar name="Akshata Mohanty" link="https://www.linkedin.com/in/akshatamohanty/?originalSubdomain=sg" job="Full Stack Engineer, Viki, Inc." dp={Akshata} />
          <Avatar name="Anushree Paul" link="https://www.linkedin.com/in/paulanushree/" job="Account Executive, Google Cloud" dp={Anushree} />
          <Avatar name="Hae Na, Noh" link="https://www.linkedin.com/in/hae-na-noh/" job="APAC Territory Account Manager, Google Cloud" dp={Hae} />
          <Avatar name="Fang Min" link="https://www.linkedin.com/in/fangmin/" job="Customer Engineering Manager, Southeast Asia, Google Cloud" dp={Min} />
          <Avatar name="Qiurong Hu" link="https://www.linkedin.com/in/qiurong-hu-893b563a/" job="Customer Engineer, Google Cloud" dp={Qiurong} />
          <Avatar name="Thriveni T K" link="https://www.linkedin.com/in/tkthriveni" job="Cloud Computing Consultant (AWS,GCP certified)" dp={Thriveni} />
          <Avatar name="Melody Huang" link="https://www.linkedin.com/in/melody-huang/" job="Associate Cloud Consultant, Sourced Group" dp={Melody} />
          <Avatar name="Shafraz Rahim" link="https://www.linkedin.com/in/shafrazrahim/" job="Cloud Community Manager, Google" dp={Shafraz} />
          <Avatar name="Ajit Kumar Amit" link="https://www.linkedin.com/in/akamit/" job="Managing Partner, Agilitics" dp={Ajit} />
          <Avatar name="Hairizuan Noorazman" link="https://www.linkedin.com/in/hairizuan-noorazman/" job="DevOps Engineer, Acronis" dp={Hairizuan} />
          <Avatar name="Arpit Maheshwari" link="https://www.linkedin.com/in/arpit-maheshwari-70a9a718/" job="Data Architect, Chope" dp={Arpit} />
          <Avatar name="George Seah" link="https://www.linkedin.com/in/george-seah-jin-siang/" job="Director, Revenue Management solutions, GCP Certified" dp={George} />
          <Avatar name="Weiyuan Liu" link="https://www.linkedin.com/in/liuweiyuan/" job="Staff Software Engineer, Hubble, Google Developer Expert" dp={Weiyuan} />
          <Avatar name="Salem Amazit" link="https://www.linkedin.com/in/samazit/" job="Consultant, Google Cloud" dp={Salem} />
          <Avatar name="Leona Teng" link="https://www.linkedin.com/in/leona-teng-aa12aa2/?originalSubdomain=sg" job="Technical Account Manager, Google Cloud" dp={Leona} />
          <Avatar name="Jocelyn Agbeko" link="https://www.linkedin.com/in/jocelynagbeko/" job="Senior Data Engineer/Data Scientist (GCP), PA Consulting (London)" dp={Jocelyn} />
          <Avatar name="Jan Peuker" link="https://www.linkedin.com/in/jan-peuker-2b14b169/" job="Strategic Cloud Engineer, Google" dp={empty} />
        </Row>
      </Col>
    </Row>
  </Container >
)

export default Mentors;