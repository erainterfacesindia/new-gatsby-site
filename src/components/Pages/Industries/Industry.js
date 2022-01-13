import React from 'react'
import Wrapper from '../../UI/Wrapper'
import { useStaticQuery, graphql } from 'gatsby'
import * as Styles from './FeatureSection.module.css'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import {
    GiGraduateCap,
    GiShoppingCart,
    GiHospital,
    GiHeartBeats,
  } from "react-icons/gi"
  import { FaUsers } from "react-icons/fa";
  import "./feature.css"
  import '../../Style/global.css'


  export default function Industry ()  {
    const data= useStaticQuery(graphql`
    query {
        wpPage(id: {eq: "cG9zdDo2NDk="}) {
            title
            uri
            slug
            content
                }
            }


    `)
    return (
        <div class="container-fluid flex-wrap flex-md-nowrap py-3 uipad" style={{padding:"0 5%"}}>
  <div className={Styles.container + " row"}>
  <h2 class="py-5">
  <Badge bg="danger">Industries We Serve</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
    <div class="py-3">
      {/* <FaUsers size={70} color="#f26a2e"/> */}
     <div dangerouslySetInnerHTML={{__html: data.wpPage.content}}/>
    </div>
    </div>
  </div>
    )
}


