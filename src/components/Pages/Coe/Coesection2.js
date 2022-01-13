import React ,{useState} from 'react'
import OurblogData from '../../../data/ourblogs'
import {Button} from '../../Button'
import { Badge } from 'react-bootstrap'
import '../../Style/global.css'
import { StaticImage } from 'gatsby-plugin-image'
import './coesection2.css'




const Coesection2 = () => {
    // const [visible, setVisible]= useState(3);
    // const loadMore = () =>{
    //     setVisible(visible + visible);
    // }
    // const sliceData=OurblogData.CardData.slice(0, visible);
    
  return (
    <div class="p-3s">
    <div class="container-fluid flex-wrap flex-md-nowrap" style={{padding:"0 5%"}}>
        <div class="row">
        <h2 class="pad-bottom-md">Look at what we are doing</h2>
        <div class="col-md-12">
                    <a href="#" class="ourblogcontainer ourblogcontainer-image">
                    <div>
                            <StaticImage src="../../../images/iot/iot.png"  class=" img-fluid" style={{height:"500px",width:"100%",objectFit:"cover"}} alt="erainterfaces-iot-cover-image"/>
                        </div>
                        <div class="ourblogcontainer-image-info">
                            <h2 class="pt-4">We Recently Inagurated COE In V.S.B College Of Engineering </h2>
                            {/* <h5 style={{width:"fit-content",fontSize:"13px",border:"2px solid #fff",padding:"10px"}}>Read More</h5> */}
                        </div>
                    </a>
                </div>
               
                <div class="row">
                      {/* <h2 class="pad-bottom-sm">Recent Blogs</h2> */}
              
                    
                    <div class="col-sm-8 col-xs-6">
  <a href="#" class="projectcontainer projectcontainer-image">
    <StaticImage
      src="../../../images/coe/coe2.jpg" 
      class="w-100 shadow-1-strong rounded mb-4 opacity-85"
      alt="erainterfaces-era-invite"
    />
    <div class="projectcontainer-image-info">
                            <h2>Invite for the event </h2>
                            {/* <h5 style={{width:"fit-content",fontSize:"13px",border:"2px solid #fff",padding:"10px"}}>View Project Details</h5> */}
                        </div>
    </a>
    </div>
    <div class="col-sm-4 col-xs-4">
    <a href="#" class="projectcontainer projectcontainer-image">
    <StaticImage
      src="../../../images/coe/erainvite.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="erainterfaces-era-invite"
    />
    <div class="projectcontainer-image-info">
                            <h2>Invite for the event </h2>
                            {/* <h5 style={{width:"fit-content",fontSize:"13px",border:"2px solid #fff",padding:"10px"}}>View Project Details</h5> */}
                        </div>
                        </a>
  </div>
               

             
              {/* <div className="text-center mt-5 mb-5">   
                      <button className="btn btn-danger"  onClick={() => loadMore()}>Load More</button>
                      </div> */}
                    
                     
              
            </div>
            {/* <div className=" text-center">
              <a href="/blogs" class="btn btn-danger text-white btn-lg">View More</a>  
            </div> */}
             </div>
             </div>
             </div>
           
      )
     
  }
  
export default Coesection2





























































































// import * as React from "react"
//  import { GatsbyImage } from "gatsby-plugin-image"
//  import { graphql } from "gatsby"
//  import 'bootstrap/dist/css/bootstrap.min.css';
// import { Carousel } from "react-bootstrap"
// import styled from "styled-components"
// import {Button} from '../../Button'
// import { useStaticQuery } from 'gatsby'
// import { push } from "object-path";
// //import { Carousel } from "bootstrap";
// import  "../../Style/global.css"
// import Wrapper from "../../UI/Wrapper";
 
// export default function Ourblogs({heading}) {
//   const data= useStaticQuery(
//     graphql`
// query{
//  allFile(
//     filter: {relativeDirectory: {eq: "ourblogs"}}
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


// function Section3(data) {
//   const ourservicesArray = []
//     data.allFile.edges.map(({node , index}) => { 
//       ourservicesArray.push(
//         <ProductCard key={index}>
//     <GatsbyImage className="blogs"
//     image={node.childImageSharp.gatsbyImageData} alt={node.base} css={`
//     height:80%;`}/>
        
//       <ProductInfo>   
      
//          <ProductTitle css={`color:white; font-size: 20px;`}>
//          {node.name}
//         </ProductTitle>
//            <Button to="/" primary="true" round="true" css={`
//            position:absolute;
//            top:300px;
//            font-size:14px;
//            `}>Show More</Button> 
             
//        </ProductInfo>
//        </ProductCard>
//       )
//  }) 
//        return ourservicesArray
//     }

//     console.log(data)
//     return (
      
//       <ProductsContainer>
//       <ProductsHeading>{heading}</ProductsHeading>
//    <ProductWrapper> {Section3(data)} </ProductWrapper >    {/*style={{display: "flex", flexDirection: "row"}}     */}
//       </ProductsContainer>
     
//     )
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

// const ProductCard = styled.div`
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


