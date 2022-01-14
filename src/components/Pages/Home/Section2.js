import React from 'react'
import { Badge } from 'react-bootstrap'
import {GiGraduateCap} from "react-icons/gi"
import { FaUsers } from "react-icons/fa"
import { FaMobileAlt } from "react-icons/fa"
import {IconContext} from "react-icons"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from 'gatsby'
import Wrapper from '../../UI/Wrapper'
import './section2.css'
import '../../Style/global.css'

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

