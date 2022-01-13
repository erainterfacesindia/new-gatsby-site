import React, { useState } from "react"
import { Badge } from 'react-bootstrap'
import './OurAdvisors.css'
import '../../Style/global.css'
import img1 from '../../../images/advisors/ram.jpg'


const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p>
        {isReadMore ? text.slice(0, 500) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };




const OurAdvisors = () => {
    return (
      
         <div class="container-fluid flex-wrap flex-md-nowrap py-5" style={{padding:"0 5%"}}>
        <h2 class="py-5">
  <Badge bg="danger">Our Advisor</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
              
              <div class="advisors">
              <img src={img1} alt="erainterfaces-Ramganesh-image"/>
              <div class="advisors-text">
                  <h2>Dr.E.Ramganesh</h2><br/>
              <ReadMore>
           Dr.E.Ramganesh as Professor of Educational Technology is currently serving as Director, Institute for Entrepreneurship and Career Development and Vocational Education, Bharathidasan University, 
              Tiruchirappalli, Tamil Nadu, India besides he served as Adjunct Professor in UPSI, Malaysia for two years from 2018 to 2019. 
              He is serving as visiting professor in Avinashilingam Women’s Central university, Coimbatore from 2020 onwards. 
              He has been entrusted with number of responsibilities by the university namely Registrar, Finance Officer, Director of College and Curriculum Development, Director of UGC-Human Resource Development, 
              Nodal officer of Constituent Colleges of the University and Coordinator of Projects. He is the recipient of National and International  awards. He has published 86 articles in the national and international journals in the Scopus and web of science and 15 books cutting across various domains of Education.
               He has been serving as reviewer, associate editor and advisor in many Journals of repute at national and international level. He has completed 4 major research projects at an outlay of INR 1.6 crore. He organized more than 25 workshops /Capacity building programmes/Conferences/Seminar/Symposium at National and International Level. 
               He has been meritoriously selected by MHRD for the honour of LEAP programme during 2020. He is the expert member in University Grants Commission, National Accreditation and Assessment Council, National Council for Teacher Education, Ministry of Education, Government of India etc. To his credentials, he has been the expert member in Governing body, Academic Council, Research Committee and Board of Studies in many universities and colleges in India.
                He delivered more than 600 invited talks in diverse topics in Higher Education in India and abroad.              
                  
                  </ReadMore>
                  </div>
             
              {/* <img src="/img2.jpg" />
              <p><h2>Lorem ipsum</h2><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum est quis rhoncus dapibus. Sed lacinia ligula in tincidunt vestibulum. Quisque faucibus egestas porttitor. Maecenas mi turpis, 
                  tempor a velit at, consequat hendrerit lectus. Quisque vehicula sit amet lacus eget rhoncus.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum est quis rhoncus dapibus. Sed lacinia ligula in tincidunt vestibulum. Quisque faucibus egestas porttitor. Maecenas mi turpis, 
                  tempor a velit at, consequat hendrerit lectus. Quisque vehicula sit amet lacus eget rhoncus.
                  
                  </p> */}
                  
                  
                  </div>
                 
              </div>
             
             
    )
}

export default OurAdvisors

