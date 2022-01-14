import * as React from "react"
import ContactPage from "../components/Pages/Contact/ContactPage"
import Clientsection from "../components/Pages/Home/clients/Client"
import Layout from "../components/Layout"
// import Callus from "../components/Callus"
// import ContactSection from "../components/Pages/Contact/ContactSection"
import SEO from '../components/SEO'


const Contact = () => {
    return (
      <Layout>
        <SEO title="Contact"/>
        <ContactPage />
          {/* <ContactSection />*/}
         <Clientsection />   
    </Layout>
    )
  }

  export default Contact
  