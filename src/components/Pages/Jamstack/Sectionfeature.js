import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import './sectionfeature.css'

const SectionFeature = () => {
    return (
        
        <div class="container-fluid flex-wrap flex-md-nowrap py-4" style={{padding:"0 5%"}}>
            <section>
            <div class="feature-container feature-container--medium mb-5 text-center">
                    <h2 class="feature_title mt-0">Why JAMstack?</h2>  
                         <hr/>
            </div>
            <div class="card-deck">
            <div class="row">
            <div class="col-md-4 mb-4">
                    <div class="box-content">
                        <div class="text-center">
                        <StaticImage src="../../../images/jamstack-icons/verified.png" 
                            width={120}
                            height={120} 
                            alt="erainterfaces-education_image"/> 
                        </div>
                        <div class="box-desc">
                            <h2>Security</h2>
                            <p>The Jamstack removes multiple moving parts and systems from the hosting infrastructure resulting in fewer servers and systems to harden against attack.</p>
                            <p>Serving pages and assets as pre-generated files allows read-only hosting reducing attack vectors even further. Meanwhile dynamic tools and services can be provided by vendors with teams dedicated to securing their specific systems and providing high levels of service.</p> 
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="box-content">
                        <div class="text-center">
                        <StaticImage src="../../../images/jamstack-icons/scale.png" 
                            width={120}
                            height={120} 
                            alt="erainterfaces-education_image"/> 
                        </div>
                        <div class="box-desc">
                            <h2>Scale</h2>
                            <p>Popular architectures deal with heavy traffic loads by adding logic to cache popular views and resources. The Jamstack provides this by default. When sites can be served entirely from a CDN there is no complex logic or workflow to determine what assets can be cached and when.</p>
                            <p>  With Jamstack sites everything can be cached in a content delivery network. With simpler deployments, built-in redundancy and incredible load capacity.</p> 
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="box-content">
                        <div class="text-center">
                        <StaticImage src="../../../images/jamstack-icons/performance.png" 
                            width={120}
                            height={120} 
                            alt="erainterfaces-education_image"/> 
                        </div>
                        <div class="box-desc">
                            <h2>Performance</h2>
                            <p>Page loading speeds have an impact on user experience and conversion. Jamstack sites remove the need to generate page views on a server at request time by instead generating pages ahead of time during a build.</p>
                           <p>With all the pages are already available on a CDN close to the user and ready to serve, very high performance is possible without introducing expensive or complex infrastructure.</p> 
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="box-content">
                        <div class="text-center">
                        <StaticImage src="../../../images/jamstack-icons/web-maintenance.png" 
                            width={120}
                            height={120} 
                            alt="erainterfaces-education_image"/> 
                        </div>
                        <div class="box-desc">
                            <h2>Maintainability</h2>
                            <p>When hosting complexity is reduced, so are maintenance tasks. A pre-generated site, being served directly from a simple host or directly from a CDN does not need a team of experts to "keep the lights on".</p>
                            <p>The work was done during the build, so now the generated site is stable and can be hosted without servers which might require patching, updating and maintain.</p> 
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="box-content">
                        <div class="text-center">
                        <StaticImage src="../../../images/jamstack-icons/portable.png" 
                            width={118}
                            height={120} 
                            alt="erainterfaces-education_image"/> 
                        </div>
                        <div class="box-desc">
                            <h2>Portability</h2>
                            <p>Jamstack sites are pre-generated. That means that you can host them from a wide variety of hosting services and have greater ability to move them to your preferred host. Any simple static hosting solution should be able to serve a Jamstack site.</p>
                            <p>Bye-bye infrastructure lock-in.</p> 
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="box-content">
                        <div class="text-center">
                        <StaticImage src="../../../images/jamstack-icons/dynamic-globe.png" 
                            width={120}
                            height={120} 
                            alt="erainterfaces-education_image"/> 
                        </div>
                        <div class="box-desc">
                            <h2>Dynamic Functionality</h2>
                            <p>Jamstack architecture aims to make dynamically generated static site while taking the best parts of web 1.0 and combines it with web 2.0. Lot of misconception arises around the term “static sites” that the sites are inflexible or fixed. </p>
                            <p> But the context for the term “static sites” is that browsers don’t need any help delivering their content — they’re able to use them natively without a server handling a processing step first. The site can also load data asynchronously, read & write data into databases, handle file processing and perform much more dynamic functionality.</p> 
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                    </section>
        </div>
        
    )
}

export default SectionFeature
