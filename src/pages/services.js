import React from 'react'
import Callus from '../components/Callus'
import Layout from "../components/Layout"
import '../components/Style/global.css'
import SEO from '../components/SEO'
import ServicesSection from '../components/Pages/Services/ServicesSection'

const Services= () => {
return (
         <Layout>
             <SEO title="Services" />
            <ServicesSection />
            <Callus />
        </Layout>
    )
}

export default Services
