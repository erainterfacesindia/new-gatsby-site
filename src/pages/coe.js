import React from 'react'
import Coesection2 from '../components/Pages/Coe/Coesection2'
import SEO from '../components/SEO'
import Layout from "../components/Layout"
import CoeSection1 from '../components/Pages/Coe/CoeSection1'

const coe = () => {
    return (
        <Layout>
            <SEO title="CoE"/>
            <CoeSection1 />
            <Coesection2  />
        </Layout>
    )
}

export default coe
