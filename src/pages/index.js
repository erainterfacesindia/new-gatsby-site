import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/HeroSection"
import Section2 from "../components/Section2"



const IndexPage = ({data}) => (
  <Layout>
    <Hero/>

    <Section2 heading="Our Services"/>
  </Layout>
)

export default IndexPage


