import React from 'react'
import CoeSection1 from '../components/Pages/Coe/CoeSection1'
import Coesection2 from '../components/Pages/Coe/Coesection2'
import Layout from "../components/Layout"
import SEO from '../components/SEO'

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
