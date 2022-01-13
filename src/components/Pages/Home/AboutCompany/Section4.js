import React from 'react'
import styled from 'styled-components'
import '../../../Style/global.css'
import { Badge } from 'react-bootstrap'
import './section4.css'
import video1 from '../../../Assets/videos/era-t.mp4'
import { StaticImage } from 'gatsby-plugin-image'
import Wrapper from '../../../UI/Wrapper'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { useStaticQuery, graphql } from 'gatsby'


export default function Section4 (){
    const data= useStaticQuery(graphql`
    query {
        wpPage(id: {eq: "cG9zdDo4OTc="}) {
            title
            uri
            slug
            content
                }
            }


    `)
    return (
        
        
        <div class="p-3s">
        <div class="container-fluid flex-wrap flex-md-nowrap" style={{padding:"0 5%"}}>
       <h2 class="py-4">
  <Badge bg="danger">About us</Badge>
              </h2> 
        <div class="row">
                <div className="col-lg-7 col-sm-12">
                    {/* <TitleContainer>About Our Company</TitleContainer> */}
                        {/* <SubTitle>A team of #AUTODIDACTS</SubTitle>
                            <p>We are an EdTech startup based out of Bengaluru. We are on a mission to provide better tools<br/> for the academicians and innovative learning frameworks 
                                for students to create an ecosystem<br/> that could potentially change the way how current pedagogy is in play.</p>
                        <ul class="checkmark">
                        <li>Emerging Tech Stack is where we operate.</li>
                        <li>Disruptive & Yet Meaningful Solutions Provider. </li>
                        <li>We never make anything that is boring. </li>
                        <li>Company with an employee-centric culture.</li>
                        </ul> */}
                        <div dangerouslySetInnerHTML={{__html: data.wpPage.content}}/>
                        <Title>Our Tech Stacks & Tools</Title>  
                        <div class="wrapper-module">
                          <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<StaticImage src="../../../../images/tl/jquery.png"  alt="erainterfaces-jquery" />
		</div>
		<div class="slide">
		<StaticImage src="../../../../images/tl/cyberpanel.png"  alt="erainterfaces-cyberpanel" />
		</div>
		<div class="slide">
    <StaticImage src="../../../../images/tl/dart.png"  alt="erainterfaces-dart" />
		</div>
		<div class="slide">
    <StaticImage src="../../../../images/tl/django.png"  alt="erainterfaces-django" />
		</div>
		<div class="slide">
    <StaticImage src="../../../../images/tl/docker.png"  alt="erainterfaces-docker" />
		</div>
		<div class="slide">
    <StaticImage src="../../../../images/tl/figma.png"  alt="erainterfaces-figma" />
		</div>
		<div class="slide">
    <StaticImage src="../../../../images/tl/finalcut.png"  alt="erainterfaces-finalcut" />
		</div>
		<div class="slide">
    <StaticImage src="../../../../images/tl/firebase.png"  alt="erainterfaces-firebase" />
		</div>
		<div class="slide">
    <StaticImage src="../../../../images/tl/flutter.png" alt="erainterfaces-flutter" />
		</div>
		<div class="slide">
		<StaticImage src="../../../../images/tl/gatsby.png"  alt="erainterfaces-gatsby" />
		</div>
		<div class="slide">
    <StaticImage src="../../../../images/tl/github.png"  alt="erainterfaces-github" />
		</div>
		<div class="slide">
    <StaticImage src="../../../../images/tl/graphql.png"  alt="erainterfaces-graphql" />
		</div>
    <div class="slide">
    <StaticImage src="../../../../images/tl/postgresql.png"  alt="erainterfaces-postgresql" />
		</div>
		<div class="slide">
    <StaticImage src="../../../../images/tl/lightspeed.png"  alt="erainterfaces-lighspeed" />
		</div>
		<div class="slide">
    <StaticImage src="../../../../images/tl/nextcloud.png"  alt="erainterfaces-nextcloud" />
		</div>
    <div class="slide">
    <StaticImage src="../../../../images/tl/php.png"  alt="erainterfaces-php" />
		</div>
    <div class="slide">
    <StaticImage src="../../../../images/tl/react.png"  alt="erainterfaces-react" />
		</div>
    <div class="slide">
    <StaticImage src="../../../../images/tl/redis.png"  alt="erainterfaces-redis" />
		</div>
    <div class="slide">
    <StaticImage src="../../../../images/tl/postman.png"  alt="erainterfaces-postman" />
		</div>
    <div class="slide">
    <StaticImage src="../../../../images/tl/vmware.png"  alt="erainterfaces-vmware" />
		</div>
    <div class="slide">
    <StaticImage src="../../../../images/tl/wordpress.png"  alt="erainterfaces-wordpress" />
		</div>
    <div class="slide">
    <StaticImage src="../../../../images/tl/bigbluebutton.png"  alt="erainterfaces-bigbluebutton" />
		</div>
    <div class="slide">
    <StaticImage src="../../../../images/tl/html-css.png" alt="erainterfaces-html-css" />
		</div>
	</div>
</div> 
</div>
             </div>         
  
                 <div className="col-lg-5 col-sm-12">
                <video src={video1} type="video/mp4" autoPlay loop muted playsInline className="videoalignment" alt="erainterfaces-our-team-video"/>
                </div> 
            </div>
            </div>
        </div>
      
       
)
        }
        //export default Section4 
    
    
const SubTitle=styled.div`
text-align:start;
padding-left:0 1rem;
margin-bottom:2rem;
font-size:2rem;
font-weight:bold;
`
const Title=styled.div`
text-align:start;
padding-left:0 1rem;
margin-bottom:0.8rem;
font-size:2rem;
font-weight:bold;
`
const TitleContainer=styled.div`
color:#CA0B00;
font-size:3rem;
padding-left:0 1rem;
margin-bottom: 1rem;

p {
font-size: 1.3rem;
}
`
const AboutElements=styled.div`
    height:100%;
    width: 100%;
    background-color:#141414;
    justify-content:center;
    align-items:center;
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px; `

const settings = {
    dots: false,
    arrows:false,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
   slidesToShow: 6,
   slidesToScroll: 6,
   pauseOnHover: true,
   initialSlide: 0,
  
      responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            initialSlide: 6
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
      }