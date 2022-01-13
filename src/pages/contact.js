import * as React from "react"
import Layout from "../components/Layout"
// import Callus from "../components/Callus"
// import ContactSection from "../components/Pages/Contact/ContactSection"
import SEO from '../components/SEO'
import ContactPage from "../components/Pages/Contact/ContactPage"
import Clientsection from "../components/Pages/Home/clients/Client"


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
  