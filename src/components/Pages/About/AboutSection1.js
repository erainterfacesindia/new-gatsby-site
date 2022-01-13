import React from 'react'
import styled from 'styled-components'
import '../../Style/global.css'
import Wrapper from '../../UI/Wrapper'
import * as Styles from '../Home/AboutCompany/Section4.module.css'
import { Badge } from 'react-bootstrap'
import "./about.css"
import video1 from '../../Assets/videos/ERA.mp4'
import { useStaticQuery, graphql } from 'gatsby'


export default function AboutSection1 (){
    const data= useStaticQuery(graphql`
    query {
        wpPage(id: {eq: "cG9zdDo3OTQ="}) {
            title
            uri
            slug
            content
                }
            }


    `)
    return (
        
        <div class="container-fluid flex-wrap flex-md-nowrap pt-4" style={{padding:"0 5%"}}>
        <h2 class="pt-5">
  <Badge bg="danger">About us</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
        {/* <div class="row">
                <div className="col-lg-6 col-sm-12 py-4">
                            <p>We’re a team that deeply cares about designing & building products that our clients love. We care about how a product feels. Products that go beyond the functional imperative and are a delight.</p>
                        <p>ERAINTERFACES was built on the idea of disrupting the conventional approaches. Since day one, the community has been at our core. From the design of websites, apps to our projects and internship offers, we strive to be a place where every individual—regardless of their background, the color of their skin, gender, political or religious beliefs, sexual orientation, or difference of any kind—is welcomed, included, and cherished.</p>
                <hr class="pt-1"/>
                    <h5 class="p-4"> "BRING TECHNOLOGY AND INNOVATION TO EVERY STUDENT IN THE WORLD."</h5>  
                    <hr class="pt-1"/>        
                    </div>
                <div className="col-md-6 col-sm-12 text-end">
                <video src={video1} type="video/mp4" autoPlay loop muted playsInline className="aboutvideoalignment" alt="erainterfaces-erainterfaces-youtube-video"/>
                </div>
            </div> */}
            <div class="py-3">
     <div dangerouslySetInnerHTML={{__html: data.wpPage.content}}/>
    </div>
       
        </div>


        
)
        }
        // export default AboutSection1 
    
    
const SubTitle=styled.div`
text-align:start;
/* padding-left:0 1rem;
padding-bottom:2rem; */
font-size:2rem;
`
const TitleContainer=styled.div`
padding-top: 20px; 
font-size:3rem;
/* padding-left:0 1rem;*/
color:#f26a2e;

p {
font-size: 2rem;
}
`


