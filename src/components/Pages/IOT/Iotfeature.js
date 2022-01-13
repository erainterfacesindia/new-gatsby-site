import React from 'react'
import './iot.css'
import { Badge } from 'react-bootstrap'
import {Button} from '../../Button'
import '../../Style/global.css'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'



export default function Iotfeature() {
    const data= useStaticQuery(graphql`
    query {
        wpPage(id: {eq: "cG9zdDo3NjM="}) {
    content
    title
  }
            }
    `)
   return (
    <div class="p-3">
    <div class="container-fluid flex-wrap flex-md-nowrap" style={{padding:"0 4%"}}>
    <h2 class="py-5">
<Badge bg="danger">IoT</Badge>
           </h2> 
           </div>
          <div class="hero">
                      <StaticImage src="../../../images/iot/iot.png" class=" img-fluid" style={{height:"500px",width:"100%",objectFit:"cover"}} alt="erainterfaces-iot-coverimage" />
                      <div class="hero-text">
                         <h1>Setup your own IOT lab in college</h1>
                           <p>Learn from industry experts</p>
                             </div> 
                             </div>   
<div class="py-3">
 <div dangerouslySetInnerHTML={{__html: data.wpPage.content}}/>
</div>
</div>
//</div>
)
}

