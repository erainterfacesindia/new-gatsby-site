import React from 'react'
import {BiNotepad} from "react-icons/bi"
import { MdLocalPhone } from 'react-icons/md';
import { StaticImage } from 'gatsby-plugin-image'
import { Badge } from 'react-bootstrap'
import './projects.css'


const Projects = () => {
    return (
        
        <div class="container-fluid flex-wrap flex-md-nowrap py-4" style={{padding:"0 5%"}}>
        <h2 class="py-4 mt-4">
  <Badge bg="danger">Projects & Internships</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
        <div class="row">
                <div className="col-md-12 py-4">
                    <h2>About Our P&I</h2>
                            <p>In our project and internship initiative we bring students across the globe best mentors from the industries to enable students to skill themselves up according to the industry's real requirements. We aim to fill the critical skill gap between the academia curriculum and fast changing industry. In our agreements with various colleges and universities we noticed after the students completion of a project and internship initiative. 
                              They were able to secure jobs easily and started their endeavours in domains which the curriculum could not provide.</p>  
                              <p>Some of the subjects our mentors teach are App Development, IoT development, full stack development, Django/Python, Cyber Security, Data Science, Wordpress/ Frontend Development, 
                                Artificial intelligence/Machine learning, Blockchain, UI/UX Design, Flutter Development, IoT Development and much more</p>  
                    </div>
            </div>
            <div class="row pt-3 text-center justify-content-around">
            <div class="col-md-5 col-sm-12 text-center p-2 px-5" >
                <a href="/services">
              <StaticImage src="../../../images/Group69.png" 
      width={118}
      height={102} 
       alt="erainterfaces-education_image" 
        /></a>
    <h4 class="text-white p-4">Projects</h4>
      <p>With ever changing technologies, we can’t emphasize the importance of projects in today’s education. Get the exposure and hands-on experience with our ever assisting team of mentors and experts!</p>
      
    </div>
    <div class="col-md-5 col-sm-12 text-center p-2 px-5">
                <a href="/services">
              <StaticImage src="../../../images/Group69.png" 
      width={118}
      height={102} 
       alt="erainterfaces-education_image" 
        /></a>
    <h4 class="text-white p-4">Internships</h4>
      <p>We provide internships to students from the finest companies of the market to enable them gain exposure. Students are also benefited with stipend during their internship. Students who show outstanding performance are awarded pre-placement offers! </p>

    </div>
            </div>
            <div class="container text-center" style={{margin:"20px 0px",maxWidth:"2560px"}}>
                <h2> Want To Know More?</h2>
                <p> Check our brochure to see some mind blowing projects our students did to transform the world as they wanted! </p>
            <div class="row justify-content-center">
            <div class="col col-lg-1 py-3 px-2">
            <BiNotepad size={43}/>
            <a href="https://drive.google.com/file/d/1irioZwkTcHRczKuUTI9-GadFxUd1jXSw/view?usp=sharing" target="_blank" class="btn  btn-danger btn-sm text-white mt-2">Broucher</a>
             </div>
             <div class="col col-lg-1 py-3 px-2">
             <MdLocalPhone size={43}/>
            <a href="/contact" class="btn  btn-danger btn-sm  text-white mt-2">Call now</a>
             </div>
        </div>
        </div>
        </div>
      
    )
}

export default Projects
