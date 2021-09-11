import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Section1 from "../components/Pages/Home/HeroSection/Section1"
import Section2 from "../components/Pages/Home/Section2"
import Section3 from "../components/Pages/Home/Section3"
import Section4 from "../components/Pages/Home/AboutCompany/Section4"
import Callus from "../components/Callus"
//import Section2Duplicate from "../components/Section2Duplicate"
//import Sidebar from "../components/Sidebar"




const IndexPage = ({data}) => (
  <Layout>
    <Section1/>
    <Section2 heading="Our Services"/>
    <Section3 heading="Our Blogs"/>
    <Section4 />
    <Callus />
  </Layout>
)

export default IndexPage


