import * as React from "react"
 import { GatsbyImage } from "gatsby-plugin-image"
 import { graphql } from "gatsby"
 import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap"
import styled from "styled-components"
import {Button} from '../Button'
import { useStaticQuery } from 'gatsby'
import { push } from "object-path";
//import { Carousel } from "bootstrap";
import  "../Style/global.css"
 
export default function Ourblogs({heading}) {
  const data= useStaticQuery(
    graphql`
query{
 allFile(
    filter: {relativeDirectory: {eq: "ourblogs"}}
    sort: {fields: base, order: ASC}
  ) {
    edges {
      node {
        id
        base
        relativePath
        childImageSharp {
           gatsbyImageData(
            height: 480
            width: 480
            placeholder: BLURRED
            quality: 70
            blurredOptions: {width: 100}
          )
        }
      }
    }
  }
}
`)


function Section3(data) {
  const ourservicesArray = []
    data.allFile.edges.map(({node , index}) => { 
      ourservicesArray.push(
        <ProductCard key={index}>
    <GatsbyImage className="blogs"
    image={node.childImageSharp.gatsbyImageData} alt={node.base}/>
        
      <ProductInfo>   
      
         <ProductTitle css={`color:white; font-size: 1.8vw;`}>
         Our Technology-Enabled Solutions
        </ProductTitle>
           <Button to="/" primary="true" round="true" css={`
           position:absolute;
           top :330px;
           font-size:14px;
           `}>Show More</Button> 
             
       </ProductInfo>
       </ProductCard>
      )
 }) 
       return ourservicesArray
    }

    console.log(data)
    return (
      <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
   <ProductWrapper> {Section3(data)} </ProductWrapper >    {/*style={{display: "flex", flexDirection: "row"}}     */}
      </ProductsContainer>
    )
}
    const ProductsContainer = styled.div`
min-height:100vh;
padding: 5rem calc((100vw - 1300px)/2);
background: white;
color:#fff;
background-color: black;
`

const ProductsHeading = styled.div`
font-size: clamp(1.2rem,5vw,3rem);
text-align: left;
margin-bottom: 5rem;
color: #f26a2e;

`
// grid-template-columns: 2fr 2fr 2fr;
//   grid-template-rows: auto;
//   grid-template-areas: "left right";
const ProductWrapper = styled.div`
display: grid;
grid-template-columns: 2fr 2fr 2fr;
grid-gap:20px;
justify-items:center;
padding:0 10%;

@media screen and (max-width: 1200px)
{
  grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 868px)
{
  grid-template-columns: 1fr;
}`

const ProductCard = styled.div`
line-height: 2;
width: 100%;
height: 500px;
position: relative;
border-radius: 10px;
filter: brightness(100%);
transition: 0.4s cubic-bazier(0.075,0.82,0.165, 1);

&:hover {
  filter: brightness(100%);
}

@media screen and (max-width: 280px)
{
  padding:0 10%;
}`

const ProductInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0 2rem;

@media screen and (max-width: 280px)
{
  padding:0 10%;
}`

const TextWrap = styled.div`
align-items: center;
position: absolute;
top: 375px;`

const ProductTitle = styled.div`
position: absolute;
font-weight: 400;
font-size: 1rem; 
top: 275px;
`