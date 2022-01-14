import * as React from "react"
import Callus from "../components/Callus"
import FeatureSection from '../components/Pages/Industries/FeatureSection'
import Industry from '../components/Pages/Industries/Industry'
import Layout from "../components/Layout"
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
