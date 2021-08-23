import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/HeroSection"
// import Section2 from "../components/Section2"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"


const IndexPage = ({data}) => (
  <Layout>
    <Hero/>
    {data.allFile.edges.map(({node}) => (
  
  <p key={node.id}>
      {node.base}
      <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base} />
      </p>
  ))}
  </Layout>
)

export default IndexPage


export const pageQuery = graphql `
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
              height: 600
              width: 900
              placeholder: BLURRED
              quality: 70
              blurredOptions: {width: 100}
            )
          }
        }
      }
    }
}`