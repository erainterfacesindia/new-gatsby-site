import * as React from "react"
import {Button} from "../../../Button"
import styled from 'styled-components'
import Wrapper from "../../../UI/Wrapper"
import Carousel from 'react-bootstrap/Carousel'
import './Section.css'
import video1 from '../../../Assets/videos/s1.mp4'
import video2 from '../../../Assets/videos/s2.mp4'
import video3 from '../../../Assets/videos/s3.mp4'



const Section1 = (props) => {
    return (
       
        <div class="p-3s">
       <div>
      
       <Carousel controls={false} style={{ position: 'relative' }} fade={true}>
  <Carousel.Item interval={2000}>
  <Wrapper>
        <div class="row p-5">
            <div class="col-lg-6"> 
            <video src={video1} type="video/mp4" autoPlay loop muted playsInline/> 
						</div>
            <div class="col-lg-6 p-4">
                <div> 
                <HeroH1  className="mt-3">Futuristic Solutions</HeroH1>
                    <HeroP className="mt-3">We've been developing our products and services inline with the emerging technologies since our beginning.</HeroP>
                    <p class="fs-4 mt-3">Believe us</p>
                    <h4  className="mt-3 mb-3 text-danger fst-italic">"THE FUTURE IS MAGIC"</h4>
                    <a href="/about" class="btn btn-danger text-white mt-3">About us</a>
                <span>
                  <a href="/services" class="btn mx-2 btn-danger text-white mt-3">Services</a>
                </span>								
				</div>
            </div>      
</div>
            </Wrapper>
  </Carousel.Item>
  <Carousel.Item >
  <Wrapper>
        <div class="row p-5">
        <div class="col-lg-6"> 
							<video src={video2} type="video/mp4" autoPlay loop muted playsInline/>
						</div> 
            <div class="col-lg-6 p-4">
            <div> 
                <HeroH1  className="mt-3">Research | Speed Dev | Support</HeroH1>
                    <HeroP className="mt-3 mb-3">We are explorers and path breakers. We always strive to make more automation and cost-efficiency to our offerings.</HeroP>
                    <p class="fs-4 mt-3">Disruptive Approaches </p>
                    <h4  className="mt-3 mb-3 text-danger fst-italic">"PATH BREAKERS"</h4>
                    <a href="/about" class="btn btn-danger text-white mt-3">About us</a>
                <span>
                  <a href="/services" class="btn mx-2 btn-danger text-white mt-3">Services</a>
                </span>								
				</div>
            </div>     
</div>
            </Wrapper>
  </Carousel.Item>
  <Carousel.Item >
  <Wrapper>
  <div class="row p-5">
  <div class="col-lg-6"> 
        <video src={video3} type="video/mp4" autoPlay loop muted playsInline />
        </div> 
            <div class="col-lg-6 p-4">
            <div> 
            <HeroH1  className="mt-3">Let us guide your Early Career. </HeroH1>
            <HeroP className="mt-3 mb-3">We are a group of AUTODIDACTS who have been through different phases while emerging as professionals. </HeroP>
            <p class="fs-4 mt-3">Become an Avenger </p>
            <h4  className="mt-3 mb-3 text-danger fst-italic">"LET'S FIND YOUR PASSION"</h4>
            <a href="/projectinternship" rel="noopener noreferrer" class="btn btn-danger text-white mt-3">P&I</a>
            <span>
                  <a href="/coe" class="btn mx-2 btn-danger text-white mt-3">CoE</a>
                  </span>								
				</div>
            </div>     
</div>
            </Wrapper>
  </Carousel.Item>
</Carousel>
        </div>
        </div>
        
       
    )
}

export default Section1
    

const HeroH1=styled.div`
text-align:start;
padding-left:0 1rem;
font-size:1.7rem;
font-weight:bold;
/* padding-top:5rem; */
`
const HeroP=styled.div`
text-align:start;
font-size:1.3rem;`





