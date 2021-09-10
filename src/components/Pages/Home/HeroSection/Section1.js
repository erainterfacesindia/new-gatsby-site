import * as React from "react"
import {Button} from "../../../Button"
import Wrapper from '../../../UI/Wrapper'
import * as heroStyles from './Section1.module.css';
import styled from 'styled-components'


const Section1 = (props) => {
    return (
        <div class="p-3s bg-black text-white">
        <Wrapper>
            <div className={heroStyles.container + " row"}>
                <div className="col-lg-6 col-sm-12 pad-top-xlg">               
                    <HeroH1  className="pad-bottom-md">Our Technology Enabled Solutions!</HeroH1>
                    <HeroP className="pad-bottom-md">Are tailored to meet the demands of individuals & organisations...</HeroP>
                    <Button primary="true" round="true" big="true" to="/about" className="pad-bottom-md"> Explore More</Button>
                </div>
                <div className="col-lg-6 col-sm-10">
                    <img className="about" src="/eragif.gif" alt="home_about image" />
                </div>
            </div>
        </Wrapper>
        </div>
    )
}

export default Section1
    

const HeroH1=styled.div`
text-align:start;
padding-top:5rem;
padding-left:0 1rem;
font-size:2rem;
font-weight:bold;
`
const HeroP=styled.div`
text-align:start;
font-size:1.8rem;`