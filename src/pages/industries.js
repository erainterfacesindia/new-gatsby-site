import * as React from "react"
import Callus from "../components/Callus"
import FeatureSection from '../components/Pages/Industries/FeatureSection'
import Industry from '../components/Pages/Industries/Industry'
import Layout from "../components/Layout"
import SEO from '../components/SEO'
import '../components/Style/global.css'

const Industries= () => {
return (
    <Layout>
            <SEO title="Industries" />
            {/* <FeatureSection /> */}
            <Industry />
            <Callus />
        </Layout>
    )
}

export default Industries
