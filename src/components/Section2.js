// import * as React from "react"
// import { GatsbyImage } from "gatsby-plugin-image"
// import { graphql } from "gatsby"



// const Section2 = ({ data }) => {
    
// {data.allFile.edges.map(({node}) => (
  
// <p key={node.id}>
//     {node.base}
//     <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base} />
//     </p>
// ))}



// }
  


// export default Section2

// export const pageQuery = graphql `
// query{
//    allFile(
//       filter: {relativeDirectory: {eq: "ourservices"}}
//       sort: {fields: base, order: ASC}
//     ) {
//       edges {
//         node {
//           id
//           base
//           relativePath
//           childImageSharp {
//             gatsbyImageData(
//               height: 600
//               width: 900
//               placeholder: BLURRED
//               quality: 70
//               blurredOptions: {width: 100}
//             )
//           }
//         }
//       }
//     }
// }`