/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useEffect } from "react"
import { StaticQuery, graphql, navigate } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import Navbar from "./navBar"

import "animate.css/animate.min.css";

const Layout = ({ children, pageInfo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    navigate("/", { replace: true });
  }, [])

  return (
    <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
      render={data => (
        <>
          <Container fluid className="px-0 main">
            <Navbar pageInfo={pageInfo} />
            <Container fluid className="px-0">
              <Row noGutters>
                <Col>
                  <main>{children}</main>
                </Col>
              </Row>
            </Container>
          </Container>
          <Container fluid className="px-0">
            <Row noGutters>
              <Col className="footer-col">
                <footer>
                  <span>
                    © 2020, <a href="https://codinggirls.sg/" target="_blank" rel="noreferrer">CodingGirls</a>
                  </span>
                </footer>
              </Col>
            </Row>
          </Container>
        </>
      )}
    />
  )
}

export default Layout
