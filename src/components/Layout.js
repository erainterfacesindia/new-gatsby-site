import * as React from "react"
import Footer from "./Footer"
import Navbar from "../components/navbar/Navbar"
import { GlobalStyle } from './Style/GlobalStyle'
import PropTypes from "prop-types"
import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = ({ children }) => {
  
  return (
    <>
     <GlobalStyle/>
      <Navbar/>
        <main>{children}</main>
        <Footer/>
        </>
        )}

export default Layout
