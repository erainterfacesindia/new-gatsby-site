import * as React from "react"
import styled from 'styled-components'
import { Button } from "../Button"
import Video from "../../assets/videos/green.mp4"


const HeroSection = () => {
    return (
        
        <HeroContainer>
            {/* <HeroBg>
                <VideoBg src={Video} type="video/mp4" autoPlay
               loop muted playsInline /> */}
            {/* </HeroBg>   */}
            <ContentWrapper>
            <ColumnOne>
            <HeroContent>               
                <HeroH1>Our Technology-Enabled Solutions!</HeroH1>
                <HeroP>Are tailored to meet the demands of individuals & organisations...</HeroP>
                 <Button primary="true" round="true" big="true" to="/about">Explore More</Button>
            </HeroContent>
            </ColumnOne>
            <ColumnTwo>
            <img className="about" src="/eragif.gif" alt="home_about image" />
            </ColumnTwo>
            </ContentWrapper>
        </HeroContainer>
    )
}

export default HeroSection

const HeroContainer = styled.div `
width: 100%;
background: black;
color:#fff;
padding: 5rem clac((100vw - 1300px)/2);
height:60vh;


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

// const HeroBg = styled.div`
// position: absolute;
// top: 0;
// bottom:0;
// right: 0;
// left:0;
// width:100%;
// overflow:hidden;
// `


const VideoBg = styled.video `
width: 100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
`

const HeroContent= styled.div`
z-index: 3;
 height: calc(100vh -80px);
 max-height: 100%;
padding: 0rem calc((100vw - 1300px)/2);`

const ContentWrapper=styled.div`
display:grid;
grid-template-columns:1fr 1fr;
padding:0 2rem;
margin-bottom: 5rem;

@media screen and (max-width:768px)
{
    grid-template-columns:1fr;
}`

// z-index: 3;
// height: calc(100vh -80px);
// max-height: 100%;
// padding: 0rem calc((100vw - 1300px)/2);
// 
// const HeroItems = styled.div`
// display: flex;
// flex-direction: column;
// height:100vh;
// max-height:100%;
// padding:0;
// color:#fff;
// line-height:1.1;
// font-weight:bold;
// `
const ColumnOne=styled.div`
display:grid;
grid-template-rows:1fr 1fr;
margin-top: 5rem;
`
const ColumnTwo=styled.div`
display:grid;
grid-template-columns:1fr 1fr;
margin-top: 5rem;
grid-gap:10px;

@media screen and (max-width: 768px)
{
    display:grid;
    flex-direction: column;
    padding: 0 1 rem;
}
`

const HeroH1 = styled.h1`
font-size: 3rem;
`

const HeroP = styled.p`
font-size: 1.8rem;
margin-bottom: 2rem;
`


