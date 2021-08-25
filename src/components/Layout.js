import * as React from "react"
import Footer from "./Footer"
import Header from "./Header"
import { GlobalStyle } from './Style/GlobalStyle'


const Layout = ({ children }) => {
  
  return (
    <>
     <GlobalStyle/>
      <Header/>
      
      
        <main>{children}</main>
        <Footer/>
        </>
        )}
export default Layout
