import React from 'react'
import styled from 'styled-components'
import '../Style/global.css'



const AboutSection1 = () => {
    return (
        <AboutContainer>
            <ContentWrapper>
            <ColumnOne>
            <Description>
            <TitleContainer>About Our Company</TitleContainer>
            <SubTitle>Reliable & Cost Efficient Company</SubTitle>
                <p>We are on a mission to empower each organization and individuals to self sustain through our range of services and product offerings.</p>
                </Description>
                
                </ColumnOne>
                <ColumnTwo >
                <img className="about" src="/eragif.gif" alt="home_about image" />
                </ColumnTwo>
            </ContentWrapper>
        </AboutContainer>
    )
            }
            export default AboutSection1 
        
        

const AboutContainer=styled.div`
width: 100%;
background: black;
color:#fff;
padding: 5rem clac((100vw - 1300px)/2);
height:30%;
margin-top: -80px;
margin-bottom: -90px;

:before {
    content:"";
    position: absolute;
    top: 0;
    bottom:0;
    right: 0;
    left:0;
    z-index: 2;
    background: linear-gradient (
        180deg , rgba(0, 0, 0, 0.2)0%,
        rgba(0, 0, 0, 0.6)100%),
        linear-gradient (
            180deg, rgba(0, 0, 0, 0.2)0%, black 100%);
    )

}
`
const SubTitle=styled.div`
    text-align:start;
    padding-left:0 1rem;
    margin-bottom:2rem;
    font-size:2rem;
    font-weight:bold;
}
`
const TitleContainer=styled.div`
color:#f26a2e;
font-size:3rem;
padding-left:0 1rem;
margin-bottom: 1rem;
`
const Description=styled.div`
margin-top:10rem;
width: 100%;
text-align:start;
padding-left:0 rem;
margin-bottom:3rem;
height:30%;

p{
    font-size: 1.3rem;
}
`

const ContentWrapper=styled.div`
display:grid;
grid-template-columns:1fr 1fr;
padding:0 2rem;
margin-bottom: 5rem;

@media screen and (max-width:768px)
{
    grid-template-columns:1fr;
}`
const ColumnOne=styled.div`
display:grid;
grid-template-rows:1fr 1fr;
margin-top: -2 rem;
`
const ColumnTwo=styled.div`
display:grid;
grid-template-columns:1fr 1fr;
margin-top: 10rem;
grid-gap:10px;

@media screen and (max-width: 768px)
{
    display:flex;
    flex-direction: column;
    padding: 0 1 rem;
}
`
