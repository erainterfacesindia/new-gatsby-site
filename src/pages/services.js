import React from 'react'
import ServicesSection from '../components/Pages/Services/ServicesSection'
import Callus from '../components/Callus'
import Layout from "../components/Layout"
import '../components/Style/global.css'
import SEO from '../components/SEO'

const industries= () => {
return (
         <Layout>
             <SEO title="Services" />
            <ServicesSection />
            <Callus />
        </Layout>
    )
}

export default industries
