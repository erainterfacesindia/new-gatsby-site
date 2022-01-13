import React from 'react'
import Wrapper from '../../UI/Wrapper';
import * as Styles from './FeatureSection.module.css'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import {
    GiGraduateCap,
    GiShoppingCart,
    GiHospital,
    GiHeartBeats,
  } from "react-icons/gi"
  import { FaUsers } from "react-icons/fa";
  import "./feature.css"
  import '../../Style/global.css'



 const FeatureSection = () => {
    return (
 
<div class="container-fluid flex-wrap flex-md-nowrap py-3 uipad" style={{padding:"0 5%"}}>
  <div className={Styles.container + " row"}>
  <h2 class="py-5">
  <Badge bg="danger">Industries We Serve</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
    <div class="col-lg-6 col-sm-12 text-center py-3">
      <FaUsers size={70} color="#f26a2e"/>
      <h4 class="text-white" to="/">RECRUITMENT</h4>
      <p className="aboutp">Our Frameworks are built with the end goal of bridging the gap between Industries and Academia, We provide services in Fresher Hiring,
       Lateral Recruitment, and SAAS Products for the HR domain. </p>
    </div>
    <div class="col-lg-6 col-sm-12 text-center py-3">
    <GiGraduateCap size={70} color="#f26a2e"/>
    <h4 class="text-white">EDUCATION</h4>
    <p className="aboutp">We partner with schools and universities to develop a digital ecosystem that senses & responds to the needs of all stakeholders.
     Students benefit from personalized learning, teachers create customized content, complete online assessments & parents follow the performance of their children.</p>
    </div>
     <div class="col-lg-6 col-sm-12 text-center py-3">
      <GiShoppingCart size={70} color="#f26a2e"/>
      <h4 class="text-white">E-COMMERCE</h4>
      <p className="aboutp">With our deep expertise in WordPress, Magento & Shopify portals we have successfully helped more than 10 SMB Companies in digital transformation.
       We have also combined our AI/ML expertise to bring seamless experiences and better user analytics.</p>
    </div>
    <div class="col-lg-6 col-sm-12 text-center py-3">
    <GiHeartBeats size={70} color="#f26a2e"/>
    <h4 class="text-white">HEALTH CARE</h4>
    <p className="aboutp center-block ">During COVID we have taken some open-source initiatives to automate some of the conventional repeated processes in the health care field and
     We've helped many hospitals in building their chatbots and appointment processes. </p>
    </div> 
    </div>
  </div>
  
 

)
}
  
export default FeatureSection

