import React from 'react'
import Background from '../../../images/hackernews.jpg'
import '../../Style/global.css'
import './jamstack.css'

const Hero = () => {
    return (
        <div class="p-3">
        {/* <div class="container-fluid flex-wrap flex-md-nowrap py-4" style={{padding:"0 5%"}}> */}
            <section class="section hero has-cover bg-danger pt-5 pt-md-5 pb-4 pb-md-5">
            <div class="cover-image"  style={{ backgroundImage: `url(${Background})`}}>
            </div>
            <div class="text-container text-container--medium">
                <div class="hero_content grid items-center">
                    <div class="hero_body my-2 cell-12 text-center">
                    <h1 class="hero_title">What is JAMstack?</h1>
                    <div class="hero_paragraph">
                <p class="text-center">JAM is the acronym for Javascript, API, and Markup language. It is an architecture designed to make a web, just as iron rods are to a building. As the nomenclature says it is a combination of Javascript- a programming language, API- acronym for Application Programming Interface, 
                    and Markup language to make an application. JAMStack is changing the dynamics of modern web architecture by following ways:</p>
                    </div>
                    </div>
                </div>
            </div>
            
                    </section>
        </div>
        // </div>
    )
}

export default Hero
