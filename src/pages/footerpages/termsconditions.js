import * as React from "react"
import Layout from "../../components/Layout"
import '../../components/Style/global.css'
import { Badge } from 'react-bootstrap'
import SEO from '../../components/SEO'


const TermsCondition = () => {
    return (
            <Layout>
            <SEO title="Terms&Condition"/>
        
         <div class="container-fluid pb50 py-5 uipad" style={{padding:"0 5%"}}>
     <div class="row">
     <h2 class="py-5">
    <Badge bg="danger">Terms & Condition</Badge>
                 {/* <span class="underline"></span>  */}
               </h2> 
         <div class="col-md-12 mb40">
         <article> 
                 {/* <img src="/recruitment1.jpg" alt="" class=" img-fluid" style={{height:"500px",width:"100%",objectFit:"cover"}}/> */}
                 <p class=" text-start" style={{lineHeight:3}}> Last updated: February 15, 2021<br/>
    
    ERA INTERFACES (“us”, “we”, or “our”) operates the ERA INTERFACES website (the “Service”).<br/>
    
    This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.<br/>
    
    We will not use or share your information with anyone except as described in this Privacy Policy.<br/>
    
    We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at https://erainterfaces.com<br/>
                         </p>
                 <div>
    
                         <h2 class="py-2 ">Intellectual Property</h2>
                     <p class=" text-start" >The Service and its original content, features and functionality are and will remain the exclusive property of ERA INTERFACES and its licensors.
                         </p>
                        
                         <h2 class="py-2 ">Links To Other Web Sites</h2>
                     <p class=" text-start">Our Service may contain links to third-party web sites or services that are not owned or controlled by ERA INTERFACES.</p>
                     <p> ERA INTERFACES has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that ERA INTERFACES shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
                     <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>
                         
                         
                         <h2 class="py-2 ">Termination</h2>
                     <p class=" text-start">We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                     <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>


                     <h2 class="py-2 ">Disclaimer</h2>
                     <p class=" text-start">Your use of the Service is at your sole risk. The Service is provided on an “AS IS” and “AS AVAILABLE” basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>
                    
    
                     <h2 class="py-2 ">Compliance With Laws</h2>
                     <p class=" text-start">These Terms shall be governed and construed in accordance with the laws of India without regard to its conflict of law provisions.</p>
                     <p class=" text-start">Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>
                     
                
    
                     <h2 class="py-2 ">Changes</h2>
                     <p class=" text-start"> We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 60 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                     <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
    
    
                     <h2 class="py-2">Contact Us</h2>
                 <p class=" text-start">If you have any questions about this Privacy Policy, please contact us.</p>
                    </div>
                         </article>
                         </div>
                         </div>
                         </div>
                        
                         </Layout>
        )
}

export default TermsCondition
