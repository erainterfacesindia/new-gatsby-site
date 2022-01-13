import * as React from "react"
import Layout from "../components/Layout"
import FeatureSection from '../components/Pages/Industries/FeatureSection'
import Industry from '../components/Pages/Industries/Industry'
import Callus from "../components/Callus"
import '../components/Style/global.css'
import SEO from '../components/SEO'


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
