import React from "react";
import { Container } from "react-bootstrap";
import DownArrow from "../images/down-arrow.svg";

const LandingBanner = () => (
  <>
    <Container fluid className="px-0 d-flex align-items-center" id="landing-container">
      <div id="landingbg" />

      {/* for large screens */}
      <h1 className="d-none d-md-block" id="landing-header">
        Code With Cloud <br /><span style={{ fontSize: "36px", marginLeft: '16px' }}>- Learn the #No.1 in-demand skill in Today's Workforce</span>
      </h1>

      {/* for small screens */}
      <h1 className="d-block d-md-none text-center" id="landing-header">
        Code With Cloud -  Learn the #No.1 in-demand skill in Today's Workforce
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