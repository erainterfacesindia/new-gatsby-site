import React from 'react'
import styled from 'styled-components'
import './Style/global.css'



const Section4 = ({data}) => {
    return (
        <AboutContainer>
            <TitleContainer>About Us</TitleContainer>
            <SubTitle>Reliable & Cost Efficient Solutioning Company</SubTitle>
            <ContentWrapper>
            <ColumnOne>
            <Description>
                <p>ERA Interfaces wants to provide smart and proactive digital solutions to 
                ensure its customers stay relevant in these progressive and dynamic market conditions.</p>
                <ul class="checkmark">
	                  <li>Understand Your Needs</li>
	                 <li>Find the Perfect Solution</li>
                </ul>
                </Description>
                
                </ColumnOne>
                <ColumnTwo >
                <img className="about_home" src="/eragif.gif" alt="home_about image" />
                </ColumnTwo>
            </ContentWrapper>
        </AboutContainer>
    )
            }
            export default Section4
        
        

const AboutContainer=styled.div`
width: 100%;
background: black;
color:#fff;
padding: 5rem clac((100vw - 1300px)/2);
height:50%;
`
const TitleContainer=styled.p`
color:#f26a2e;
font-size:clamp(1.2rem,5vw,3rem);
padding-left:2rem;
margin-bottom: 4rem;
`
const SubTitle=styled.div`
text-align:start;
padding-left:2rem;
margin-bottom:2rem;
font-size:clamp(1.5rem,5vw,2rem);
font-weight:bold;
`
const Description=styled.div`
text-align:start;
padding-left:0 rem;
margin-bottom:3rem;

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
grid-template-columns:1fr 1fr;
margin-top: -2 rem;
`
const ColumnTwo=styled.div`
display:grid;
grid-template-columns:repeat(2 , 1fr);
margin-top: -2 rem;
grid-gap:30px;
margin-bottom: 8rem;

@media screen and (max-width:500px)
{
    grid-template-columns: 1fr;
}
`
