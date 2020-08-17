import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import LandingBanner from "./landingBanner"
import Summary from "./summary"
import Prerequisites from "./prerequisites"
import WhyCloud from "./whycloud"
import Schedule from "./schedule"
import Activites from "./activities"
import Mentors from "./mentors"
import Applynow from "./applynow"
import Faq from "./Faq"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "Landing Page" }}>
    <SEO title="Code with Cloud" />
    <LandingBanner />
    <Summary />
    <Prerequisites />
    <WhyCloud />
    <Activites />
    <Schedule />
    <Mentors />
    <Applynow />
    <Faq />
  </Layout>
)

export default IndexPage
