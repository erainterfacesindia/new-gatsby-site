import React from 'react'
import styled from 'styled-components'
import '../../Style/global.css'
import Wrapper from '../../UI/Wrapper'
import * as Styles from '../Home/AboutCompany/Section4.module.css'



const AboutSection1 = () => {
    return (
        <div class="p-3s bg-black text-white">
        <Wrapper>
            <div className={Styles.container + " row"}>
                <div className="col-lg-6 col-sm-12">
                    <TitleContainer>About Our Company</TitleContainer>
                        <SubTitle>Reliable & Cost Efficient Company</SubTitle>
                            <p>ERA Interfaces wants to provide smart and proactive digital solutions to 
                                ensure its customers stay relevant in these progressive and dynamic market conditions.</p>
                    </div>
                <div className="col-lg-6 col-sm-12">
                <img className="about" src="/eragif.gif" alt="home_about image" />
                </div>
            </div>
        </Wrapper>
        </div>
)
        }
        export default AboutSection1 
    
    
const SubTitle=styled.div`
text-align:start;
padding-left:0 1rem;
padding-bottom:2rem;
font-size:2rem;
`
const TitleContainer=styled.div`
font-size:3rem;
padding-left:0 1rem;
padding-bottom:1rem;

p {
font-size: 1.3rem;
}
`


