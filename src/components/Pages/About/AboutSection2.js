import React from 'react'
import styled from 'styled-components'
import * as Styles from '../Home/AboutCompany/Section4.module.css'
import {
  GiCompass,
  GiDiamondHard,


} from "react-icons/gi"
import "./about.css"
import Wrapper from '../../UI/Wrapper'

import { useStaticQuery, graphql } from 'gatsby'


export default function AboutSection2 (){
    const data= useStaticQuery(graphql`
    query {
        wpPage(id: {eq: "cG9zdDo4MjE="}) {
            title
            uri
            slug
            content
                }
            }


    `)

return (

  <AboutElements>
 <div class="bg-black">
  <div class="container-fluid flex-wrap flex-md-nowrap pt-4" style={{padding:"0 5%"}}>
   
        {/* <div class="row">
<div class="col-lg-6 col-sm-12 text-center pad-top-md">
  <h3 className="abouth3">OUR MISSION</h3>
  <GiCompass size={60} color="#f26a2e"/>
  <p className="aboutp">Our Mission is to establish and implement our solutions across the country among Education, Application Development, and Recruitment segments.</p>
</div>
<div class="col-lg-6 col-sm-12 text-center">
<h3 className="abouth3">OUR VISSION</h3>
<GiDiamondHard size={60} color="#f26a2e"/>
<p className="aboutp">Our vision is to develop solutions and build frameworks that help our customers to stay ahead of the change and stay relevant.</p>
</div>
</div> */}
  <div class="py-3">
     <div dangerouslySetInnerHTML={{__html: data.wpPage.content}}/>
    </div>

</div>
</div>

</AboutElements>

)
}
//export default AboutSection2;

const AboutElements=styled.div`
    height:100%;
    width: 100%;
    background-color:#0A0A0A;
    justify-content:center;
    align-items:center;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px; `