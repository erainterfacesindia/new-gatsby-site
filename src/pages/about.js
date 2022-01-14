import * as React from "react"
import AboutSection1 from '../components/Pages/About/AboutSection1'
import AboutSection2 from '../components/Pages/About/AboutSection2'
import AboutSection3 from '../components/Pages/About/AboutSection3'
import Callus from '../components/Callus'
import Layout from "../components/Layout"
import '../components/Style/global.css'
import SEO from '../components/SEO'

const about = () => {
return (
        <Layout>
            <SEO title="About" />
            <AboutSection1 />
            <AboutSection2 />
            <AboutSection3 />
            <Callus />
        </Layout>
    )
}

export default about
