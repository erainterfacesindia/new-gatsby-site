import * as React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { GlobalStyle } from './Style/GlobalStyle'


const Layout = ({ children }) => {
  
  return (
    <>
     <GlobalStyle/>
      <Navbar/>
      
      {/* <Sidebar /> */}
        <main>{children}</main>
        <Footer/>
        </>
        )}
export default Layout
