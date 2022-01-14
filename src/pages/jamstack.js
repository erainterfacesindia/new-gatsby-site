import React from 'react'
import Layout from "../components/Layout"
import Hero from '../components/Pages/Jamstack/Hero'
import SEO from '../components/SEO'
import '../components/Style/global.css'

const jamstack = () => {
    return (
        <Layout>
            <SEO title="JAMstack"/>
            <Hero />
            </Layout>
    )
}

export default jamstack




