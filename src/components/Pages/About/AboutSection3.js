import React from 'react'
import styled from 'styled-components'
import { AiOutlineArrowDown} from "react-icons/ai";
import Wrapper from '../../UI/Wrapper';
import { useStaticQuery, graphql } from 'gatsby'


export default function AboutSection3 (){
    const data= useStaticQuery(graphql`
    query {
        wpPage(id: {eq: "cG9zdDo4MzM="}) {
            title
            uri
            slug
            content
                }
            }


    `)

    return (
      
       <AboutElements>
        <div class="col text-center bg-black pad-bottom-md pad-top-md pt-3">
        <div class="container-fluid flex-wrap flex-md-nowrap py-3" style={{padding:"0 5%"}}>
            <h1 class="text-center abouth3">Our Process</h1>
            <h5>Discover the steps we follow  to ensure that every project we deliver is a success</h5>
               <h4 class="aboutsection3" > IDEATION</h4>
               <h6>(Brainstorming - Creativity)</h6>
               <p>We will collaborate with you to refine and expand your initial conception and show you diverse potential approaches for its fruition.</p>
                <AiOutlineArrowDown size={50}/>
                <h4 class="aboutsection3"> CREATION</h4>
                <h6>(Design - Innovation)</h6>
               <p>Our designers tailor and upgrade your existing frameworks into simple, and effective solutions to meet your business prospects for assured returns.</p>
                <AiOutlineArrowDown size={50}/>
                <h4 class="aboutsection3"> EXECUTION</h4>
                <h6>(Coding - Seamless)</h6>
               <p>The design is then transformed into a real application through state-of-the-art coding processes and techniques free from glitches.</p>
                <AiOutlineArrowDown size={50}/>
                <h4 class="aboutsection3" > CELEBRATION </h4>
                <h6>(Customer - Success)</h6>
               <p>What is delivered to you is not merely an application or a website, but an effectively tailored, and optimized, marketing business platform.</p>
                {/* <div dangerouslySetInnerHTML={{__html: data.wpPage.content}}/> */}
                </div>
        </div>
        </AboutElements>
     
    )
}

// export default AboutSection3

const AboutElements=styled.div`
    height:100%;
    width: 100%;
   background-color:#1F1F1F;    /*  */
    justify-content:center;
    align-items:center;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;  

    h1{
      color: #D5302C;
      text-transform: uppercase;
      font-size:2.5rem;
      padding-bottom:0.5rem ;
      padding-top:20px; 
      text-align:center;
    }
    p {
      color: white;
      font-weight: 250;
      align-items: center;
      justify-content: center;

      
    }
    h4{
    text-align:center;
    color:#D5302C;
      padding-top: 10px;
      }
    
    `