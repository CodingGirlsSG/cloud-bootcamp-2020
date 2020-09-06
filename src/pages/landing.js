import React from "react";
import { Container } from "react-bootstrap";
import DownArrow from "../images/down-arrow.svg";

const Landing = () => (
  <>
    <Container fluid className="px-0 d-flex align-items-center" id="landing-container">
      <div id="landingbg" />

      {/* for large screens */}
      <div className="d-none d-md-block" id="landingbg" />
      <h1 className="d-none d-md-block" id="landing-header">
        Code With Cloud <br /><span style={{ fontSize: "36px" }}>Learn the No.1 in-demand skill in Today's Workforce</span>
      </h1>

      {/* for small screens */}
      <div className="d-block d-md-none bg-blue" />
      <h1 className="d-block d-md-none text-center" style={{ fontSize: "32px" }} id="landing-header">
        Code With Cloud <br /><span style={{ fontSize: "28px" }}>Learn the No.1 in-demand skill in Today's Workforce</span>
      </h1>

      <img
        src={DownArrow}
        alt="scroll down for more information"
        height="25px"
        id="landing-down-icon"
      />

    </Container >
  </>
)

export default Landing;