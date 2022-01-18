import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import './Style/global.css'
import { FaFacebookSquare, FaLinkedin,FaInstagram,FaYoutube,FaTwitter  } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { StaticImage } from 'gatsby-plugin-image';



const Footer = () => {
    return (
        <div class="p-3s">
        {/* <div class="container bootstrap snippets bootdey"> */}
       <div class="container-fluid flex-wrap flex-md-nowrap py-5" style={{padding:"0 5%"}}>
        <div class="row">
            <FooterLinksWrapper>
                <FooterDesc>  
                {/* aria-current="page" */}
                <a href="/" >
                <StaticImage src="../images/era_logo.png" className="footerlogo" alt="erainterfaces-era-logo"/> </a>
                <a href="https://goo.gl/maps/YFGM6E37R3QUzUTD8" target="_blank" style={{textDecoration:"none"}}>
                    <p class="text-white">R-22,3rd Cross,Nash-Square,Electronic City Phase 1,Bengaluru, Karnataka 5600100 </p></a>
                    <SocialIcons>
                        <FacebookLink
                        to="https://www.facebook.com/erainterfaces/"
                        target="_blank"
                        aria-label="facebook">
                           <FaFacebookSquare/>
                           </FacebookLink>
                        <LinkedinLink
                        to="https://www.linkedin.com/company/erainterfaces/"
                        target="_blank"
                        aria-label="linkedin">
                           <FaLinkedin/>
                           </LinkedinLink>
                        <InstagramLink
                        to="https://www.instagram.com/erainterfaces/"
                        target="_blank"
                        aria-label="instagram">
                           <FaInstagram/>
                        </InstagramLink>
                        <YoutubeLink
                        to="https://www.youtube.com/channel/UCkCaP7U2Dt5wP9-hq-coeBA/"
                        target="_blank"
                        aria-label="youtube">
                           <FaYoutube size={30}/>
                        </YoutubeLink>
                        <TwitterLink
                        to="https://twitter.com/erainterfaces/"
                        target="_blank"
                        aria-label="twitter">
                           <FaTwitter/>
                        </TwitterLink>
                    </SocialIcons>
                    <div class="text-start py-3">
                    <h4>Proud to be part of</h4>
                    <a href="https://finance.erainterfaces.com/startupindia-era.pdf" target="_blank">
                    <StaticImage src="../images/footer/start-up-India.png"/></a>
                    </div>
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>
                <h4 class="headerline">
                      QUICK LINKS
                        <span class="line"></span>
                           </h4>   
                           </FooterLinkTitle>
                    <FooterLink aria-current="page" to="/">Home</FooterLink> 
                    <FooterLink aria-current="page" to="/about">About</FooterLink>
                    <FooterLink aria-current="page" to="/services">Services</FooterLink>
                    <FooterLink aria-current="page" to="/industries">Industries</FooterLink>
                    <FooterLink aria-current="page" aria-current="page" to="/blogs">Blog</FooterLink>
                    <FooterLink aria-current="page" to="/contact">Contact us</FooterLink>
                </FooterLinkItems>
                {/* <div class="vertical"></div> */}
                <FooterLinkItems>
                    <FooterLinkTitle>
                    <h4 class="headerline">OTHER LINKS<span class="line"></span>
                           </h4> </FooterLinkTitle>
                    <FooterLink aria-current="page" to="/footerpages/privacypolicy">Privacy Policy</FooterLink>
                    <FooterLink aria-current="page" to="/footerpages/termsconditions">Terms & Condition</FooterLink>
                    <a href="https://finance.erainterfaces.com/MGT-7A.pdf" target="_blank" style={{textDecoration:"none",marginBottom:"0.5rem"}}>
                    <FooterLink >Reports</FooterLink></a>
                    <FooterLink aria-current="page" to="/sitemap.xml">Site Map</FooterLink> 
                </FooterLinkItems>
               
            </FooterLinksWrapper>
        </div>
        </div>
        <div class="text-center fa-3x bg-light text-dark p-2">
                   &copy;{new Date().getFullYear()}, ERAINTERFACES. All Rights Reserved. Built with <AiFillHeart size={22}color="red" /> in JAMStack
                    
                    {/* <img src="https://app.netlify.com/sites/era-testing/deploys" className="netlify-image"/> */}
                    
                </div>
                
        </div>
    )
}

export default Footer

// const FooterContainer =styled.div`
// padding: 5rem; /* clac((100vw - 1300px)/2); */
// display:grid;
// grid-template-columns:repat(3, 1fr);
// color:#fff;
// background:black;
// `
const FooterDesc = styled.div`
/* padding: 0 2rem; */

img{
    
}

@media only screen and (max-width: 991px)
{
    /* padding:1rem; */
}
`
const SocialIcons=styled.div`
 display :flex;
 color:white;
 justify-self: start;
 font-size: 24px;
`
const FooterLinksWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap:10px; 

@media screen and (max-width :920px)
{
    grid-template-columns: 1fr;
}
`

const FooterLinkItems = styled.div`
display: flex;
grid-template-columns:1fr 1fr;
flex-direction:column;
align-items:start;
padding: 1rem 1rem;

@media screen and (max-width: 400px)
{
    padding: 1rem;
}`

const FooterLinkTitle =styled.h2`
font-size:14px;
margin-bottom:0.5rem;
`

const FooterLink =styled(Link)`
text-decoration:none;
margin-bottom:0.5rem;
font-size:16px;
color:#B6B6B4;

&:hover {
    color:#D5302C;
    transition: 0.3s ease-out;

}`

const FooterBottom = styled.div`
color:white;
height:50px;
width:100%;
text-align:center;
position:absolute;
bottom:10px;
left:0px;
padding-top: 20px;
`
const FacebookLink=styled(Link)`
color:white;
padding: 0 10px;

&:hover {
    color:#4267B2;
    transition: 0.3s ease-out;
}
`
const LinkedinLink=styled(Link)`
color:white;
padding: 0 10px;

&:hover {
    color:#0e76a8;
    transition: 0.3s ease-out;
}
`
const InstagramLink=styled(Link)`
color:white;
padding: 0 10px;

&:hover { 
    color: #bc2a8d;
    transition: 0.3s ease-out;
}`

// #8a3ab9

const YoutubeLink=styled(Link)`
color:white;
padding: 0 10px;

&:hover {
    color:#D5302C;
    transition: 0.3s ease-out;
}`

const TwitterLink=styled(Link)`
color:white;
padding: 0 10px;

&:hover {
    color:#00acee;
    transition: 0.3s ease-out;
}`