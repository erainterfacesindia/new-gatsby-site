import React from 'react'
import './section2.css'
import { Badge } from 'react-bootstrap'
import Wrapper from '../../UI/Wrapper'
import {GiGraduateCap} from "react-icons/gi"
import { FaUsers } from "react-icons/fa"
import { FaMobileAlt } from "react-icons/fa"
import {IconContext} from "react-icons"
import '../../Style/global.css'
import { StaticImage } from "gatsby-plugin-image"

import { useStaticQuery, graphql } from 'gatsby'


export default function Section2 (){
    const data= useStaticQuery(graphql`
    query {
        wpPage(id: {eq: "cG9zdDo4NjM="}) {
            title
            uri
            slug
            content
                }
            }


    `)
  
  
  return (
      
    <div class="p-3s">
    <div class="container-fluid flex-wrap flex-md-nowrap py-4" style={{padding:"0 5%"}}>
        <div class="row">
        <h2 class="py-4">
  <Badge bg="danger">Our Services</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
              
              {/* <div dangerouslySetInnerHTML={{__html: data.wpPage.content}}/> */}
              <div class="col-md-4 col-sm-12 text-center py-2">
                <a href="/services" class="text-white">
              <StaticImage src="../../../images/Group69.png" 
      width={118}
      height={102} 
       alt="erainterfaces-education_image" 
        />
    <h4 class="text-white py-4">EDUCATION</h4>
      <p>We've questioned ourselves how we can stand out from the 1000+ EdTech companies that are out there and how we can bring a change. By studying and analyzing the existing routine approaches, we think we found a disruptive solution.</p>
      </a><a href="/services" class="text-danger text-start">View details</a>
    </div> 
    <div class="col-md-4 col-sm-12 text-center py-2">
                <a href="/services#recruitmentsection" class="text-white">
              <StaticImage src="../../../images/Group70.png"  
      width={118}
      height={102} 
       alt="erainterfaces-recruitment_image" 
        />
      <h4 class="text-white py-4">RECRUITMENT</h4>
    <p>Recruitment is the process where the rubber meets the road. There is no definitive way to define each company's requirements and process. To shape the early careers we've designed our frameworks that can get you placed in your desired organization.</p>
    </a><a href="/services" class="text-danger text-start">View details</a>
    </div> 
    <div class="col-md-4 col-sm-12 text-center py-2">
                <a href="/services#applicationSection" class="text-white">
              <StaticImage src="../../../images/Group71.png" 
      width={118}
      height={102} 
       alt="erainterfaces-application_image" 
       />
      <h4 class="text-white py-4" >APPLICATION</h4>
    <p>We as an early startup explored 100's of various tech stacks and made numerous meaningful solutions for us and others. We are offering our experience as an application development service so you can be benefitted from our expertise.</p>
    </a><a href="/services" class="text-danger text-start">View details</a>
    </div>  
   </div> 
   <div class="row pt-3 text-center">
<h2>Our Achievements</h2>
<div class="col-md-4 col-sm-12 text-center py-3">
<div class="pa p-3"><span style={{fontSize: "24pt"}}>30+</span>
<h5>Colleges/Universities We've Served</h5>
</div>
</div>
<br />
<div class="col-md-4 col-sm-12 text-center py-3">
<div class="pa p-3">
<h6><span style={{fontSize: "24pt"}}>4500+</span></h6>
<h5>Students We've Empowered</h5>
</div>
</div>
<br />
<div class="col-md-4 col-sm-12 text-center py-3">
<div class="pa p-3">
<h6><span style={{fontSize: "24pt"}}>100+</span></h6>
<h5>Events We've Conducted</h5>
</div>
</div>
</div>
   {/* <div class="row pt-5 text-center">
       <h2>Our Achievements</h2>
       <div class="col-md-4 col-sm-12 text-center py-3">
       <p className="pa">30+<br/><h5>Colleges/Universities We've Served</h5></p>
       </div>
       <div class="col-md-4 col-sm-12 text-center py-3">
       <p className="pa">4500+<br/><h5>Students We've Empowered </h5></p>
       </div>
       <div class="col-md-4 col-sm-12 text-center py-3">
       <p className="pa">100+<br/><h5>Events We've Conducted</h5></p>
       </div>
       

   </div> */}
 </div>
 </div>
  
      )
  }
  
// export default Section2


// export const query = graphql`

// query {
//   education:file(relativePath: {eq: "Group69.png"}) {
//     childImageSharp {
//       gatsbyImageData(layout: Fluid)
//     }
//     }
//   }

//   recruit:file(relativePath: {eq: "Group70.png"}) {
//     childImageSharp {
//       gatsbyImageData(layout: Fluid)
//     }
//   }

//   application:file(relativePath: {eq: "Group71.png"}) {
//     childImageSharp {
//       gatsbyImageData(layout: Fluid)
//     }
//   }
// }



// `
















































































































































































//  import * as React from "react"
//  import { GatsbyImage } from "gatsby-plugin-image"
//  import { graphql } from "gatsby"
//  import 'bootstrap/dist/css/bootstrap.min.css';
// import styled from "styled-components"
// import {Button} from '../../Button'
// import { useStaticQuery } from 'gatsby'
// // import Wrapper from "../../UI/Wrapper";
// import * as heroStyles from '../Home/HeroSection/Section1.module.css';
// import Wrapper from "../../UI/Wrapper";
 
// export default function OurServices({heading}) {
//   const data= useStaticQuery(
//     graphql`
// query{
//  allFile(
//     filter: {relativeDirectory: {eq: "ourServices"}}
//     sort: {fields: base, order: ASC}
//   ) {
//     edges {
//       node {
//         id
//         name
//         base
//         relativePath
//         childImageSharp {
//            gatsbyImageData(
//             height: 480
//             width: 480
//             placeholder: BLURRED
//             quality: 70
//             blurredOptions: {width: 100}
//           )
//         }
//       }
//     }
//   }
// }
// `)


// function Section2(data)
//  {
//   const OurservicesArray = []      
//         data.allFile.edges.map(({node}) => {
//             OurservicesArray.push( 
//               <Productsection2container key={node}>
//                   <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base} css={`
//                       height:100%;
//                       max-width:100%;
//                       position:absolute;
//                       border-radius:10px;
//                       filter:brightness(70%);
//                       transition: 0.4s cubic-bezier(0.075,0.82,0.165, 1);
       
//                             &:hover {
//                               filter: brightness(100%)
//                             }   
//                           `} />
                          
//           <ProductInfo>
//           <ProductTitle css={`color:white; font-size: 3vw;`}>
//              {node.name}
//           </ProductTitle>
//         <Button to="/services" primary="true" round="true" css={`
//           position:absolute;
//           top :320px;
//           font-size:14px;
//         `}>Explore More</Button>
//         </ProductInfo>
                                    
//    </Productsection2container> 
//                         )
                        
//                       })
                        
//                             return OurservicesArray
                            
                            
//                           }
                          

//                           console.log(data)
//                           return (
                            
//                                   <ProductsContainer>
//                                     <ProductsHeading>{heading}</ProductsHeading>
//                                     <ProductWrapper>{Section2(data)}</ProductWrapper> 
//                                   </ProductsContainer>
                                
                                 
                          
                          
//                           )
// }
                          
                          
// const ProductsContainer = styled.div`
// height:100%;
// /* padding:3rem calc((100vw - 1300px)/2); */
// background: white;
// color:#fff;
// background-color: black;
// `

// const ProductsHeading = styled.div`
// font-size: clamp(1.2rem,5vw,3rem);
// text-align: start;
// padding-left: 50px;
// padding-bottom: 2rem;
// color: #f26a2e;
// `
// const ProductWrapper = styled.div`
// display: grid;
// grid-template-columns:repeat(3,1fr);
// grid-gap:20px;
// justify-items:center;
// padding:0 3rem;
// height:50%;

// @media screen and (max-width: 1200px)
// {
// grid-template-columns: 1fr 1fr;
// }

// @media screen and (max-width: 868px)
// {
// grid-template-columns:1fr;
// }`

// const Productsection2container = styled.div`
// line-height: 2;
// width: 100%;
// height: 500px;
// position: relative;
// border-radius: 10px;
// filter: brightness(70%);
// transition: 0.4s cubic-bezier(0.075,0.82,0.165, 1);

// &:hover {
// filter: brightness(100%);
// }

// @media screen and (max-width: 280px)
// {
// padding:0 1rem;
// }`

// const ProductInfo = styled.div`
// display:flex;
// flex-direction:column;
// align-items:flex-start;
// padding: 0 2rem;

// @media screen and (max-width: 400px)
// {
// padding:0 1rem;
// }`

// const TextWrap = styled.div`
// align-items: center;
// position: absolute;
// top: 375px;`

// const ProductTitle = styled.div`
// position:absolute;
// top: 220px;
// text-align: center;
// justify-content: center;





// `
