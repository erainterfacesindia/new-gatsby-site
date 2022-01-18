import React from 'react'
import Callus from "../components/Callus"
import Layout from "../components/Layout"
import Hero from '../components/Pages/Jamstack/Hero'
import SectionFeature from '../components/Pages/Jamstack/Sectionfeature'
import SEO from '../components/SEO'
import '../components/Style/global.css'


const jamstack = () => {
    return (
        <Layout>
            <SEO title="JAMstack"/>
            <Hero />
            <SectionFeature />
            <Callus />
            </Layout>
    )
}

export default jamstack




