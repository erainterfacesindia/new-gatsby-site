/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 import Footer from "../Footer"
 import Navbar from "../navbar/Navbar"
//  import { GlobalStyle } from '../Style/GlobalStyle'
 import { GlobalStyle } from "./PostStyle.js"
 
 const LayoutComponent = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
 
   return (
     <>
      <GlobalStyle/> 
    
      <Navbar/>
     
           
         <main>{children}</main>
         
       
       <Footer/>
     </>
   )
 }
 
 LayoutComponent.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default LayoutComponent
 