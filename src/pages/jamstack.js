import React from 'react'
import Layout from "../components/Layout"
import '../components/Style/global.css'
import Hero from '../components/Pages/Jamstack/Hero'
import SEO from '../components/SEO'


const jamstack = () => {
    return (
        <Layout>
            <SEO title="JAMstack"/>
            <Hero />
            </Layout>
    )
}

export default jamstack




