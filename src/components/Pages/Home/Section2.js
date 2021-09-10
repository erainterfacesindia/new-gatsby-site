 import * as React from "react"
 import { GatsbyImage } from "gatsby-plugin-image"
 import { graphql } from "gatsby"
 import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components"
import {Button} from '../../Button'
import { useStaticQuery } from 'gatsby'
 
export default function OurServices({heading}) {
  const data= useStaticQuery(
    graphql`
query{
 allFile(
    filter: {relativeDirectory: {eq: "ourservices"}}
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


function Section2(data)
 {
  const OurservicesArray = []      
        data.allFile.edges.map(({node , index}) => {
            OurservicesArray.push( 
        <ProductCard key={index}> 
    <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base} css={`
       height:60%;
       max-width:100%;
       position:absolute;
       border-radius:10px;
       filter:brightness(70%);
       transition: 0.4s cubic-bezier(0.075,0.82,0.165, 1);
       
       &:hover {
         filter: brightness(100%)
       }
        
    `}/>
    
          <ProductInfo>      
              <ProductTitle css={`color:white; font-size: 1.3vw;`}>
              Our Technology-Enabled Solutions
                </ProductTitle>
                    <Button to="/" primary="true" round="true" css={`
                    position:absolute;
                    top :220px;
                    font-size:14px;
                    `}>Show More</Button>       
            </ProductInfo>
          </ProductCard> 
   )
 })
   
      return OurservicesArray
       
       
    }
    

    console.log(data)
    return (
      
      <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>{Section2(data)}</ProductWrapper>
      </ProductsContainer>
     
    )
    
    
}

    const ProductsContainer = styled.div`
    height:100%;
  padding: 5rem calc((100vw - 1300px)/2);
  background: white;
  color:#fff;
  background-color: black;
`

const ProductsHeading = styled.div`
font-size: clamp(1.2rem,5vw,3rem);
text-align: left;
padding-bottom: 2rem;
color: #f26a2e;
`
const ProductWrapper = styled.div`
display: grid;
grid-template-columns:repeat(4,1fr);
grid-gap:10px;
justify-items:center;
padding:0 2rem;
height:100%

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
filter: brightness(70%);
transition: 0.4s cubic-bezier(0.075,0.82,0.165, 1);

&:hover {
  filter: brightness(100%);
}

@media screen and (max-width: 280px)
{
  padding:0 1rem;
}`

const ProductInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0 2rem;

@media screen and (max-width: 280px)
{
  padding:0 1rem;
}`

const TextWrap = styled.div`
align-items: center;
position: absolute;
top: 375px;`

const ProductTitle = styled.div`
position: absolute;
font-weight: 400;
font-size: 1rem;
top: 175px;
`
// const ProductImage=styled(GatsbyImage)`
// height:100%;
// max-width:100%;
// position:absolute;
// border-radius:10px;
// filter:brightness(70%);
// tranisition: 0.4s cubic-bazier(0.075,0.82,0.165, 1);

// &:hover {
//   filter: brightness(100%)
// }`


