import React from 'react'
import Layout from "../components/Layout"
import Iot from '../components/Pages/IOT/Iot'
//import IotFeature from '../components/Pages/IOT/IotFeature'
import Callus from "../components/Callus"
import '../components/Style/global.css'
import SEO from '../components/SEO'


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
