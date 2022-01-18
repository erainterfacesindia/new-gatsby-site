import * as React from "react"
import Layout from "../components/Layout"
import OurTeam from '../components/Pages/OurTeam/OurTeam'
import '../components/Style/global.css'
import OurAdvisors from '../components/Pages/OurTeam/OurAdvisors'
import SEO from '../components/SEO'

const team = () => {
    return (
        <Layout>
            <SEO title="Team" />
        <OurAdvisors />
        <OurTeam />
        </Layout>
    )
}

export default team
