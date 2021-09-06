import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>  
                    <img src="/era_logo.png" alt="era-logo"/> 
                    <p>f-22,3rd Cross,Nash-Square,Electronic City Phase 1,Bengaluru, Karnataka 5600100 </p>
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>IMPORTANT LINKS</FooterLinkTitle>
                    <FooterLink to="/">Home</FooterLink>
                    <FooterLink to="/about">About</FooterLink>
                    <FooterLink to="/industries">Industry</FooterLink>
                    <FooterLink to="/contact">Contact</FooterLink>
                    <FooterLink to="/services">Serivces</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>PRIVACY</FooterLinkTitle>
                    <FooterLink to="/privacypolicy">Privacy Policy</FooterLink>
                    <FooterLink to="/terms">Terms & Condition</FooterLink>
                    <FooterLink to="/blog">Blog</FooterLink>
                    <FooterLink to="/sitemap">Site Map</FooterLink>
                     
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer =styled.div`
padding: 5rem; clac((100vw - 1300px)/2);
display:grid;
grid-template-columns:repat(3, 1fr);
color:#fff;
background:#34282C;
`
const FooterDesc = styled.div`
padding: 0 2rem;

img{
    margin-bottom:2rem;
    width : 250px;
}

@media screen and (max-width:400px)
{
    padding:1 rem;
}
`
const FooterLinksWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap:10px;

@media screen and (max-width :820px)
{
    grid-template-columns: 1fr;
}
`

const FooterLinkItems = styled.div`
display: flex;
grid-template-columns:1fr 1fr;
flex-direction:column;
align-itmes:flex-start;
padding: 1rem 2rem;

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
font-size:14px;
color:#B6B6B4;

&:hover {
    color:#f26a2e;
    transition: 0.3s ease-out;

}`