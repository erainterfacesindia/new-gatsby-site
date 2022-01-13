import * as React from "react"
import Layout from "../../components/Layout"
import '../../components/Style/global.css'
import Wrapper from '../../components/UI/Wrapper'
import { Badge } from 'react-bootstrap'
import SEO from '../../components/SEO'
import { StaticImage } from "gatsby-plugin-image"


const AboutRecruiting = () => {
    return (
        <Layout>
         <SEO title="Inbound recruiting and Outbound recruiting"/>  
       
        <div class="container-fluid pb50 py-5 uipad" style={{padding:"0 5%"}}>
    <div class="row">
    <h2 class="py-5">
  <Badge bg="danger">Inbound&Outbound Recruiting</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
        <div class="col-md-12 mb40">
        <article> 
                <StaticImage src="../../images/blogs/inbound_outbound.jpeg" alt="" class=" img-fluid" style={{height:"500px",width:"100%",objectFit:"cover"}}/>
                
                <div>
                <h1 class="py-4 text-white fa-4x text-center">Inbound Recruiting & Outbound Recruiting</h1>
            <p class=" text-start">Recruiting has never been this challenging, every year in our country there are millions of pass-outs and an ocean of people who have the skills 
            which are wanted by companies across the world. Now, how do you select the “one''? Here are two popular methods which are adopted by hiring managers around the world to 
            hire the “one”.</p> 
            <h4>Inbound Recruiting</h4>
            <p>Inbound recruiting, also known as inbound hiring, is a recruitment method where businesses attract candidates proactively and hire the best employees at the right time.
            They actively engage and attract people across the globe, such as Goldman Sachs market their brand and make advertisements and show it on instagram and other social media sites, to attract people across the globe. Think about all the brands you would like to work for and know a lot about, such as Google, which is known for having a smart campus with self-driving cars and provides free food to all its employees. Now, how did they spread the word about their company without giving the impression away?
            </p>
            <ol>
             <li>They made their about-the-company-content easily visible and accessible.</li>
             <li>Networking had them share the word easily to a wider audience.</li>
             <li>Well. It is 2021. SEO, Page speed are the go to knights-in-shining-armors for visibility quotient issues.</li>
            </ol>
            <h4>What is Outbound recruiting?</h4>
            <p class=" text-start">When a new post needs to be filled, outbound recruiting is a technique for finding and contacting candidates. 
            It is a method of hiring to achieve the aim of adding talent to the company. Here, unlike inbound recruiting, the hiring personnel reaches out to the potential interested candidates with the required skills and qualifications.
             In this process of hiring, the recruiters are very active, they religiously search for the candidate rigorously, which is why it is also called fast hiring:</p>
             <ol>
                 <li>One of the most popular ways to search and reach out to a candidate is to advertise about the job opening. 
                     One can post the job opening in a portal where candidates actively search for the jobs, such as Monster.com, Naukri.com, Shine.com, Linkedin. 
                     The format of job opening advertisements differs organisation to organisation and job position to job position. A job advertisement generally includes:
                     <ul>
                         <li>The description of the organisation.</li>
                         <li>The description of the Job</li>
                         <li>The required set of skills, certification, education.</li>
                         <li>The desired experience expected, or not, in the case of hiring recent graduates.</li>
                     </ul>
            </li>
            <li>Another way recruiters search the potential candidate is to ask for referrals. They actively ask people in their circle, or social media site, to enquire about a person who 
                would be happy to take the job, given the person has the required set of skills and qualifications.</li>
                <li>Mass email is a new way to grab the attention of the public towards the job. Often the recruiters send mass mail for multiple requirements in their company to masses. 
                    There is direct option to send mass mail to the candidates who are looking for a job in a job portals and mail sites as well.</li>
             </ol>
             <h4>How is Inbound recruiting and Outbound recruiting different?</h4>
             <p>Inbound recruiting is all about attracting candidates to you. Some of the ways one can perform this are:</p>
             <ul>
                 <li>Social media</li>
                 <li>Job board advertising</li>
                 <li>Programmatic digital advertising</li>
                 <li>Reviews and social proof</li>
                 <li>Opt-in email</li>
                 <li>Referrals</li>
                 <li>Events</li>
                 <li>Careers site content</li>
             </ul>
             <p>Outbound recruiting is about searching for candidates, and then reaching out to them. One can attain this through some of the following ways:</p>
             <ul>
                 <li>LinkedIn messages</li>
                 <li>Cold email</li>
                 <li>Cold calling</li>
                 <li>Headhunting</li>
                 <li>Cold job board messages</li>
                 <li>Rented candidate databases</li>
             </ul>

             <p>This isn't to argue that outbound is no longer viable. It has a purpose. When you get inbound right, though, outbound becomes easier since you've built a strong employer brand and market awareness, 
                 which makes outbound work more efficient and allows you to focus your outbound efforts on the most difficult tasks.</p>

                        </div>
                        </article>
                        </div>
                        </div>
                        </div>
                      
                        
                        </Layout>
                        
    )
}

export default AboutRecruiting
