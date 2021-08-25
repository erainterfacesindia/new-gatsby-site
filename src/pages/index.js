import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/HeroSection"
import Section2 from "../components/Section2"
import Section3 from "../components/Section3"
import Section4 from "../components/Section4"
import Callus from "../components/Callus"



const IndexPage = ({data}) => (
  <Layout>
    <Hero/>
    <Section2 heading="Our Services"/>
    <Section3 heading="Our Blogs"/>
    <Section4 />
    <Callus />
  </Layout>
)

export default IndexPage


