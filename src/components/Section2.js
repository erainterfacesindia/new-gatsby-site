 import * as React from "react"
 import { GatsbyImage } from "gatsby-plugin-image"
 import { graphql } from "gatsby"
 import 'bootstrap/dist/css/bootstrap.min.css';
//  import { Carousel } from "react-bootstrap"
import styled from "styled-components"
import {Button} from './Button'
import { useStaticQuery } from 'gatsby'
 
function Section2 (data) {
    const ServicesArray = []
    data.allFile.edges.map(({node , index}) => {
    ServicesArray.push(
        <ProductCard key={index}>
            <GatsbyImage
        image={node.childImageSharp.gatsbyImageData} alt={node.base}/>
        
      <ProductInfo>
         {/* <TextWrap>       
         <ProductTitle>
            <h1>Our Services</h1>
        </ProductTitle>
            <h1> Blog 1</h1>  
            
           </TextWrap> */}
           <Button to="/" primary="true" round="true" css={`
           position:"absolute;
           top :420px;
           font-size:14px;
           `}>Show More</Button> 
       </ProductInfo>
   </ProductCard>
   )
    })
return ServicesArray

}

export default function Ourservices() {
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
    
    console.log(data)
    return (
      <ProductsContainer>
      <ProductsHeading>Heading</ProductsHeading>
       <ProductWrapper> {/* style={{display: "flex", flexDirection: "row"}} */}
      {/* <Carousel
        index={index}
        onChange={handleChange}
        interval={4000}
        animation="slide"
        indicators={false}
        stopAutoPlayOnHover
        swipe
        className="my-carousel"
      > 
       
        </Carousel> */}
         {Section2(data)}
        </ProductWrapper>
      </ProductsContainer>
    )
    }
    const ProductsContainer = styled.div`
min-height:100vh;
padding: 5rem calc((100vw - 1300px)/2);
background: white;
color:#fff;
`

const ProductsHeading = styled.div`
font-size: clamp(1.2rem,5vw,3rem);
text-align: center;
margin-bottom: 5rem;
color: #000;
`
const ProductWrapper = styled.div`
display: grid;
grid-template-columns:repeat(4,1fr);
grid-gap:10px;
justify-items:center;
padding:0 3rem;

@media screen and (max-width: 1200px)
{
  grid-template-colums: 1fr 1fr;
}

@media screen and (max-width: 1200px)
{
  grid-template-colums: 1fr;
}`

const ProductCard = styled.div`
line-height: 2;
width: 100%;
height: 500px;
position: relative;
border-radius: 10px;
filter: brightness(70%);
tranisition: 0.4s cubic-bazier(0.075,0.82,0.165, 1);

&:hover {
  filter: brightness(100%);
}`

const ProductInfo = styled.div`
display: flex;
flex-direction: column;
algn-items: flex-start;
padding: 0 2rem;

@media screen and (max-width: 280px)
{
  padding:0 1rem;
}`

const TextWrap = styled.div`
display: flex;
align-items: center;
position: absolute;
top: 375px;`

const ProductTitle = styled.div`
font-weight: 400;
font-size: 1rem;
margin-left: 1 rem;
margin-left:0.5rem;
`
// const GatsbyImage=styled.div`
// height:100%;
// max-width:100%;
// position:absolute;
// border-radius:10px;
// filter:brightness(70%);
// tranisition: 0.4s cubic-bazier(0.075,0.82,0.165, 1);

// &:hover {
//   filter: brightness(100%)
// }`