import React from 'react'
import styled from 'styled-components'
import '../../../Style/global.css'
import * as Styles from './Section4.module.css'
import Wrapper from '../../../UI/Wrapper'

const Section4 = () => {
    return (
    <div class="p-3 mb-2 bg-dark bg-gradient text-white">
        <Wrapper>
            <div className={Styles.container + " row"}>
                <div className="col-lg-6 col-sm-12">
                    <TitleContainer>About Our Company</TitleContainer>
                        <SubTitle>Reliable & Cost Efficient Company</SubTitle>
                            <p>ERA Interfaces wants to provide smart and proactive digital solutions to 
                                ensure its customers stay relevant in these progressive and dynamic market conditions.</p>
                        <ul class="checkmark">
                        <li>Understand Your Needs</li>
                        <li>Find the Perfect Solution</li>
                        </ul>
                    </div>
                <div className="col-lg-6 col-sm-12">
                <img className="about" src="/eragif.gif" alt="home_about image" />
                </div>
            </div>
        </Wrapper>
        </div>
)
        }
        export default Section4 
    
    
const SubTitle=styled.div`
text-align:start;
padding-left:0 1rem;
margin-bottom:2rem;
font-size:2rem;
font-weight:bold;
`
const TitleContainer=styled.div`
color:#f26a2e;
font-size:3rem;
padding-left:0 1rem;
margin-bottom: 1rem;

p {
font-size: 1.3rem;
}
`


