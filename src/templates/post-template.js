
// import React, { Component } from "react"
// import { Link, graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
// import SEO from '../components/SEO'
// import { Badge } from 'react-bootstrap'
// import '../components/Style/global.css'

// import LayoutComponent from "../components/PostLayout/PostLayout"
// export default function BlogPost({ data: { wpPost } }) {
//   console.log(wpPost)
//   const { title, featuredImage, author, date, content} = wpPost
//   return (
//     <LayoutComponent>
//     <div class="container-fluid pb50 py-5 uipad" style={{padding:"0 5%"}}>
//       <SEO title={title}/>  
//       <h2 class="pt-5">
//   <Badge bg="danger">{title}</Badge>    
//               </h2> 
//       <GatsbyImage
//         style={{height:"500px",width:"100%",objectFit:"cover"}}
//         image={featuredImage.node?.localFile.childImageSharp?.gatsbyImageData}
//       /> 
//       <div dangerouslySetInnerHTML={{__html: content}}/>
//     </div>
//     </LayoutComponent>
//   )
// }

// export const pageQuery = graphql`
//   query($slug: String!) {
//     wpPost(slug: { eq: $slug }) {
//       content
//       date(formatString: "LLL")
//       slug
//       tags {
//         nodes {
//           name
//           slug
//         }
//       }
//       title
//       featuredImage {
//         node {
//           localFile {
//             childImageSharp {
//               gatsbyImageData
//             }
//           }
//         }
//       }
//     }
//   }
// `