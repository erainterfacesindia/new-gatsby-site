import * as React from "react"
import Footer from "./Footer"
import Navbar from "../components/navbar/Navbar"
import { GlobalStyle } from './Style/GlobalStyle'
import PropTypes from "prop-types"
import 'bootstrap/dist/css/bootstrap.min.css';
// import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import '@wordpress/block-library/build-style/style.css'

const Layout = ({ children }) => {
  
  return (
    <>
    {/* <BreadCrumb parent={data.wpPage.wpParent && data.wpPage.wpParent.node} /> */}
     <GlobalStyle/>
      <Navbar/>
      
      {/* <Sidebar /> */}
        <main>{children}</main>
        <Footer/>
        </>
        )}
        Layout.propTypes = {
          children: PropTypes.node.isRequired,
        }
export default Layout
