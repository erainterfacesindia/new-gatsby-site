import * as React from "react"
import Layout from "../../components/Layout"
import '../../components/Style/global.css'
import { Badge } from 'react-bootstrap'
import SEO from '../../components/SEO'
import { StaticImage } from "gatsby-plugin-image"


const internships = () => {
    return (
        <Layout>
            <SEO title="Internship Blog"/>
       
        <div class="container-fluid pb50 py-5 uipad" style={{padding:"0 5%"}}>
    <div class="row">
    <h2 class="py-5">
  <Badge bg="danger">PROJECT & INTERNSHIP</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
        <div class="col-md-12 mb40">
        <article class=" text-center"> 
                <StaticImage src="" alt="" class=" img-fluid" style={{height:"500px",width:"100%",objectFit:"cover"}}/>
                
                <div>
                    <h3 class="py-4">A smart template that works 24/7 for your company</h3>
                    <p class=" text-start">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, 
                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, 
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                        </p>
                        </div>
                        </article>
                        </div>
                        </div>
                        </div>
                    
                        </Layout>
                        
    )
}

export default internships
