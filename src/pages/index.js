import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Landing from "./landing"
import Summary from "./summary"
import Prerequisites from "./prerequisites"
import WhyCloud from "./whycloud"
import Schedule from "./schedule"
import Activites from "./activities"
import Mentors from "./mentors"
import Applynow from "./applynow"
import Faq from "./faq"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "Code with Cloud" }}>
    <SEO title="Code with Cloud" />
    <Landing />
    <Summary />
    <WhyCloud />
    <Prerequisites />
    <Activites />
    <Schedule />
    <Mentors />
    <Applynow />
    <Faq />
  </Layout>
)

export default IndexPage
