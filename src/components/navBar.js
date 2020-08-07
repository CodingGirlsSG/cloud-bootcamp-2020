import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import CGLogo from "../images/CG3.png"

const CustomNavbar = ({ pageInfo }) => {


  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" id="site-navbar">
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">
            <img
              alt=""
              src={CGLogo}
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav activeKey={pageInfo && pageInfo.pageName} className="ml-auto">
            <Link to="#about" className="link-no-style">
              <Nav.Link as="span" eventKey="about">
                About The Program
              </Nav.Link>
            </Link>
            <Link to="#prerequisites" className="link-no-style">
              <Nav.Link as="span" eventKey="about">
                Prerequisites
              </Nav.Link>
            </Link>
            <Link to="#schedule" className="link-no-style">
              <Nav.Link as="span" eventKey="background">
                Schedule
              </Nav.Link>
            </Link>
            <Link to="#applynow" className="link-no-style">
              <Nav.Link as="span" eventKey="timeline">
                Apply Now
              </Nav.Link>
            </Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default CustomNavbar
