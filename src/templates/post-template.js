// import React from "react"
// import { Link, graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
// import parse from "html-react-parser"

// // We're using Gutenberg so we need the block styles
// // these are copied into this project due to a conflict in the postCSS
// // version used by the Gatsby and @wordpress packages that causes build
// // failures.
// // @todo update this once @wordpress upgrades their postcss version
// // import "../components/Style/@wordpress/block-library/build-style/style.css"
// // import "../components/Style/@wordpress/block-library/build-style/theme.css"


// // import Bio from "../components/bio"
// import BlogLayout from "../components/Bloglayout "
// import Seo from "../components/SEO"

// const BlogPostTemplate = ({ data: { previous, next, post } }) => {
//   const featuredImage = {
//     data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
//     alt: post.featuredImage?.node?.alt || ``,
//   }

//   return (
//     <BlogLayout>
//       <Seo title={post.title} description={post.excerpt} />

//       <article
//         className="blog-post"
//         itemScope
//         itemType="http://schema.org/Article"
//       >
//         <header>
//           <h1 itemProp="headline">{parse(post.title)}</h1>

//           <p>{post.date}</p>

//           {/* if we have a featured image for this post let's display it */}
//           {featuredImage?.data && (
//             <GatsbyImage
//               image={featuredImage.data}
//               alt={featuredImage.alt}
//               style={{ marginBottom: 50 }}
//             />
//           )}
//         </header>

//         {!!post.content && (
//           <section itemProp="articleBody">{parse(post.content)}</section>
//         )}

//         <hr />

//         {/* <footer>
//           <Bio />
//         </footer> */}
//       </article>

//       <nav className="blog-post-nav">
//         <ul
//           style={{
//             display: `flex`,
//             flexWrap: `wrap`,
//             justifyContent: `space-between`,
//             listStyle: `none`,
//             padding: 0,
//           }}
//         >
//           <li>
//             {previous && (
//               <Link to={previous.uri} rel="prev">
//                 ← {parse(previous.title)}
//               </Link>
//             )}
//           </li>

//           <li>
//             {next && (
//               <Link to={next.uri} rel="next">
//                 {parse(next.title)} →
//               </Link>
//             )}
//           </li>
//         </ul>
//       </nav>
//     </BlogLayout>
//   )
// }

// export default BlogPostTemplate

// export const pageQuery = graphql`
//   query BlogPostById(
//     $id: String!
//     $previousPostId: String
//     $nextPostId: String
//   ) {
//     post: wpPost(id: { eq: $id }) {
//       id
//       excerpt
//       content
//       title
//       date(formatString: "MMMM DD, YYYY")
//       featuredImage {
//         node {
//           altText
//           localFile {
//             childImageSharp {
//               gatsbyImageData(
//                 quality: 100
//                 placeholder: TRACED_SVG
//                 layout: FULL_WIDTH
//               )
//             }
//           }
//         }
//       }
//     }
//     previous: wpPost(id: { eq: $previousPostId }) {
//       uri
//       title
//     }
//     next: wpPost(id: { eq: $nextPostId }) {
//       uri
//       title
//     }
//   }
// `
import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SEO from '../components/SEO'
import { Badge } from 'react-bootstrap'
import '../components/Style/global.css'

import LayoutComponent from "../components/PostLayout/PostLayout"
export default function BlogPost({ data: { wpPost } }) {
  console.log(wpPost)
  const { title, featuredImage, author, date, content} = wpPost
  return (
    <LayoutComponent>
    <div class="container-fluid pb50 py-5 uipad" style={{padding:"0 5%"}}>
      <SEO title={title}/>  
      <h2 class="pt-5">
  <Badge bg="danger">{title}</Badge>    
              </h2> 
      <GatsbyImage
        style={{height:"500px",width:"100%",objectFit:"cover"}}
        image={featuredImage.node?.localFile.childImageSharp?.gatsbyImageData}
      /> 
      <div dangerouslySetInnerHTML={{__html: content}}/>
    </div>
    </LayoutComponent>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      content
      date(formatString: "LLL")
      slug
      tags {
        nodes {
          name
          slug
        }
      }
      title
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`