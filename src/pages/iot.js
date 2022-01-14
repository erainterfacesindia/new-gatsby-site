import React from 'react'
import Callus from "../components/Callus"
import Layout from "../components/Layout"
import Iot from '../components/Pages/IOT/Iot'
//import IotFeature from '../components/Pages/IOT/IotFeature'
import SEO from '../components/SEO'
import '../components/Style/global.css'

const IotPage = () => {
    return (
        <Layout>
            <SEO title="IoT"/>
            <Iot /> 
            {/* <IotFeature />  */}
            <Callus />
            </Layout>
    )
}

export default IotPage
