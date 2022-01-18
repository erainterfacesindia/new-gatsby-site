import React from 'react'
import './OurTeam.css'
import { Badge } from 'react-bootstrap'
import Wrapper from '../../UI/Wrapper'
import { BsLinkedin } from "react-icons/bs"
import '../../Style/global.css'
import { StaticImage } from "gatsby-plugin-image"




const OurTeam = () => {
    return (
       
       
         <div class="container-fluid flex-wrap flex-md-nowrap py-5" style={{padding:"0 5%"}}>
        <h2 class="py-2">
  <Badge bg="danger">Our Squad</Badge>
                {/* <span class="underline"></span>  */}
              </h2>    
              <div class="row">
              <div class="col-md-4 col-sm-12 text-center">
              <div class="teamprofile"> 
              <StaticImage src="../../../images/Original Images- Team/Akash.jpg" class="teamprofile-img" alt="erainterfaces-akash-image"/>
            {/* <a href="/"><i class="BsLinkedin"></i></a> */}
            <h2 class="user-name">Akash Vellore</h2>
            <h5>Director</h5>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 text-center">
        <div class="teamprofile"> 
            <StaticImage src="../../../images/Original Images- Team/Indrajeet.jpg" class="teamprofile-img" alt="erainterfaces-indrajith-image"/>
            {/* <a href="/"><i class="BsLinkedin"></i></a> */}
            <h2 class="user-name">Indrajeet Singh</h2>
            <h5>Application Developer</h5>
            </div>
            </div>  
            <div class="col-md-4 col-sm-12 text-center"> 
            <div class="teamprofile"> 
            <StaticImage src="../../../images/Original Images- Team/Mrityunjay.JPG" class="teamprofile-img" alt="erainterfaces-mrityunjay-image"/>
            {/* <a href="/"><i class="BsLinkedin"></i></a> */}
            <h2 class="user-name">Mrityunjay Gupta</h2>
            <h5>Back-End Developer</h5>
            </div>
           </div>
       
            <div class="col-md-4 col-sm-12 text-center"> 
            <div class="teamprofile"> 
            <StaticImage src="../../../images/Original Images- Team/Uday.jpg" class="teamprofile-img" alt="erainterfaces-uday-image"/>
            {/* <a href="/"><i class="BsLinkedin"></i></a> */}
            <h2 class="user-name">Uday S</h2>
            <h5>Front-End Developer</h5>
            </div>
            </div>

            <div class="col-md-4 col-sm-12 text-center"> 
            <div class="teamprofile"> 
            <StaticImage src="../../../images/Original Images- Team/Sainath.jpg" class="teamprofile-img" alt="erainterfaces-sainath-image"/>
            {/* <a href="/"><i class="BsLinkedin"></i></a> */}
            <h2 class="user-name">Sainath Naik</h2>
            <h5>Business Development Executive</h5>
            </div>
            </div>
            
            <div class="col-md-4 col-sm-12 text-center"> 
            <div class="teamprofile"> 
            <StaticImage src="../../../images/Original Images- Team/Sai Lakshmi.PNG" class="teamprofile-img" alt="erainterfaces-sailakshmi-image"/>
            {/* <a href="/"><i class="BsLinkedin"></i></a> */}
            <h2 class="user-name">Sai Lakshmi</h2>
            <h5>IOT</h5>
            </div>
            </div>
       
            <div class="col-md-4 col-sm-12 text-center">
            <div class="teamprofile">
            <StaticImage src="../../../images/Original Images- Team/Nikhil.jpg" class="teamprofile-img" alt="erainterfaces-nikhil-image"/>
            {/* <a href="/"><i class="BsLinkedin"></i></a> */}
            <h2 class="user-name">Nikhil Palde</h2>
            <h5>Devops</h5>
            </div>
    </div>
    
    <div class="col-md-4 col-sm-12 text-center">
        <div class="teamprofile">
        <StaticImage src="../../../images/Original Images- Team/harshitha.jpg" class="teamprofile-img" alt="erainterfaces-harshitha-image"/>
            {/* <a href="/"><i class="BsLinkedin"></i></a> */}
            <h2 class="user-name">Harshitha Dadi</h2>
            <h5>Intern</h5>
            </div>
            </div>
            
    <div class="col-md-4 col-sm-12 text-center">
        <div class="teamprofile">
        <StaticImage src="../../../images/Original Images- Team/ramya.jpg" class="teamprofile-img" alt="erainterfaces-Ramya-image"/>
            {/* <a href="/"><i class="BsLinkedin"></i></a> */}
            <h2 class="user-name">Ramya</h2>
            <h5>Intern</h5>
            </div>
            </div>
        </div>
        
                </div>  
               
               
                
                
    )
}

export default OurTeam
