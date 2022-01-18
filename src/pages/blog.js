// import React ,{useState} from 'react'
// import { Badge } from 'react-bootstrap'
// import { Link, graphql} from 'gatsby'
// import SEO from '../components/SEO'
// import Layout from '../components/Layout'
// import Callus from "../components/Callus"
// import '../components/Pages/Blogs/blogs.css'
// import { stripHtml } from "string-strip-html"
// import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'



// const BlogSection = ({ data }) => {
//      const [visible, setVisible]= useState(3);
//      const loadMore = () =>{
//         setVisible(visible + visible);
//      }
//      const blogListLength =data.allWpPost.nodes;
//      const sliceData=data.allWpPost.nodes.slice(0, visible);

//      const hideBtn = blogListLength.length == sliceData.length;

//      console.log("testing");
//      console.log(hideBtn)
    
//   return (
//     <Layout>
//             <SEO title="Blogs"/>
            
            
//      <div class="container-fluid flex-wrap flex-md-nowrap py-5" style={{padding:"0 5%"}}>
//         <div class="row">
//         <h2 class="py-4">
//   <Badge bg="danger">BLOGS</Badge>
//               </h2>
//         <div class="row">
     
//               <div class="col-md-12">
                   
//                     <Link to={`/${data.wpPost.slug}`} class="ourblogcontainer ourblogcontainer-image">
//                     <div>
//                     <GatsbyImage
//                       className="gatsbyimage"
//                         image={data.wpPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData} style={{height:"500px",width:"100%",objectFit:"cover",opacity:"0.8"}} alt="erainterfaces-learning-record-image"/> 
                           
//                         </div>
//                         <div class="ourblogcontainer-image-info">
//                             <h4>The importance of LRS in any LMS </h4>
//                             <p>
//                             Learning Record Store a new technology is changing the game in LMS...
//                             </p>
//                             <h5 style={{width:"fit-content",fontSize:"13px",border:"2px solid #fff",padding:"10px"}}>Read article</h5>
//                         </div>
//                         </Link>
//                 </div>
//                 <div class="underline"></div>
//                 <div class="row">
//                       <h2 class="pad-bottom-sm">Recent Blogs</h2>
//                       {sliceData.map((item, index) => {
//                          console.log(item)
//                           return (
//                             <div class="col-md-4 mb-4" key={index}>
//                                  <Link to={`/${item.slug}`}>
//                                   <div class="card-content">
//                                        <div class="card-img">
//                                        <GatsbyImage
//                                          className=""
//                                             image={item.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt="erainterfaces-blog-images"/>   
//                                       </div>
//                                        <div class="card-desc">
//                                            <h3>{item.title}</h3>
//                                            <p>
//                                               {stripHtml(item.excerpt).result}
//                                               </p>
//                                                <a href={item.slug} class="text-danger">Read article</a>   
//                                        </div>
//                                    </div>
//                                    </Link>
//                                </div>
               
                             
//                                  )
//                              })}
              

             
             
             
             
             
             
             
             
             
             
            
//               <div className="text-center mt-5 mb-5 "  style={{display: (hideBtn == true ? "none" : "block")}}>   
//                       <button className="btn btn-danger"  onClick={() => loadMore()}>Load Blogs</button>
//                       </div> 
                    
                     
//               </div>
//             </div>
//              </div>
//              </div>
//              <Callus />
//              </Layout>
           
//       )
     
//   }
  
// export default BlogSection

// export const pageQuery = graphql`
//   query {
//     allWpPost(skip: 1,sort: { fields: [date]}) {
//       nodes {
//         title
//         excerpt
//         slug
//         date(formatString: "MMMM Do, YYYY")
//         featuredImage {
//           node {
//             sourceUrl
//             localFile {
//               childImageSharp {
//                 gatsbyImageData
//               }
//             }
//           }
//         }
//       }
//     }
//     wpPost(id: {eq: "cG9zdDo2Mzk="}) {
//         title
//         excerpt
//         slug
//         date(formatString: "MMMM Do, YYYY")
//         featuredImage {
//           node {
//             sourceUrl
//             localFile {
//               childImageSharp {
//                 gatsbyImageData(width: 920)
//               }
//             }
//           }
//         }
      
//   }
//   }
// `


