import React from "react"
import { Container } from "react-bootstrap";
import DownArrow from "../images/down-arrow.svg";

const LandingBanner = () => (
  <>
    <Container fluid className="px-0 d-flex align-items-center" id="landing-container">
      <div id="landingbg" />

      {/* for large screens */}
      <h1 className="d-none d-md-block" id="landing-header">
        Get ahead with<br />&nbsp;&nbsp;&nbsp;Cloud Certification
      </h1>

      {/* for small screens */}
      <h1 className="d-block d-md-none text-center" id="landing-header">
        Get ahead with Cloud Certification
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

export default LandingBanner;