import React from 'react'
import AboutSection1 from '../components/Pages/About/AboutSection1'
import AboutSection2 from '../components/Pages/About/AboutSection2'
import Callus from '../components/Callus'
import Layout from "../components/Layout"
import '../components/Style/global.css'

const about = () => {
return (
        <Layout>
            <AboutSection1 />
            <AboutSection2 />
            <Callus />
        </Layout>
    )
}

export default about
