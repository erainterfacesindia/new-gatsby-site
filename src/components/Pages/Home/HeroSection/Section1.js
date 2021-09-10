import * as React from "react"
import {Button} from "../../../Button"
import Wrapper from '../../../UI/Wrapper'
import * as heroStyles from './Section1.module.css';


const Section1 = (props) => {
    return (
        <div class="p-3 mb-2 bg-black text-white">
        <Wrapper>
            <div className={heroStyles.container + " row"}>
                <div className="col-lg-6 col-sm-12">               
                    <h1 className="display-3">Our Technology Enabled Solutions!</h1>
                    <p className="display-6">Are tailored to meet the demands of individuals & organisations...</p>
                    <Button primary="true" round="true" big="true" to="/about">Explore More</Button>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <img className="about" src="/eragif.gif" alt="home_about image" />
                </div>
            </div>
        </Wrapper>
        </div>
    )
}

export default Section1
