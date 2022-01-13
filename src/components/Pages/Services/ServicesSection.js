import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
 import { graphql } from "gatsby"
 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './services.css'
import Badge from 'react-bootstrap/Badge'
import '../../Style/global.css'
import { BsCodeSlash, BsPersonFill } from "react-icons/bs";
import { SiGooglescholar} from "react-icons/si";






const ServicesSection = () => {
    return (
        <div class="p-3s">
    <div class="container-fluid flex-wrap flex-md-nowrap py-5" style={{padding:"0 5%"}}>
    <div class="row">
        <h2 class="py-4">
  <Badge bg="danger">Services</Badge>
              </h2>
        <div id="educationsection" class="row py-3 my-1">
        <div  class="logo">
        <div  class="icon"><StaticImage src="../../../images/services/Group 72 (1).png" alt="erainterfaces-education-image" style={{height:"40px",width:"40px"}}/></div>
    <div class="text">EDUCATION</div>
</div>
</div>
<Slider {...settings}> 
    <div class="col-lg-3 text-center" >
        
        <div class="container m-0">
        <div class="mydivouter">
        
        <StaticImage src="../../../images/services/itlf2.webp" class="serviceimage" alt="erainterfaces-itlf-image"/>
        <div class="overlay"></div>
  {/* <div class="mybuttonoverlap text-center justify-content-center"><a href="#"class="text-white"> Know more </a></div>  */}
  </div>
</div>
       
        <h6 class="text-center p-3">ITLF</h6>
    </div>
    <div class="col-md-4 text-center" >
        
        <div class="container m-0">
        <div class="mydivouter">
        <StaticImage src="../../../images/services/coe.webp" class="serviceimage" alt="erainterfaces-coe-image"/>
        <div class="overlay"></div>
         <div class="mybuttonoverlap text-center justify-content-center"><a href="/coe"class="text-white">Know more </a></div> 
  </div>
</div>
        
        <h6 class="text-center p-3">COE</h6>
    </div>
    <div class="col-md-4 text-center" >
        
        <div class="container m-0" >
        <div class="mydivouter">
        <StaticImage src="../../../images/p&i.webp" class="serviceimage" alt="erainterfaces-p&i-image"/>
        <div class="overlay"></div>
        <div class="mybuttonoverlap text-center justify-content-center"><a href="/projectinternship"class="text-white">Know more </a></div>
  </div>
</div>
        
        <h6 class="text-center px-3 p-3">PROJECTS & INTERNSHIP  </h6>
    </div>

    <div class="col-md-4 text-center">
      
        <div class="container m-0">
        <div class="mydivouter">
        <StaticImage src="../../../images/services/assessment.webp" class="serviceimage" alt="erainterfaces-assessment-image"/>
        <div class="overlay"></div>
        {/* <div class="mybuttonoverlap text-center justify-content-center"><a href="#"class="text-white"> Know more </a></div> */}
  </div>
</div>
       
        <h6 class="text-center px-3 p-3">ASSESSMENT PORTAL</h6>
    </div>
    </Slider> 
   
    <div id="recruitmentSection" class="row py-3 my-1">
    <div class="logo">
    <div class="icon"><StaticImage src="../../../images/services/Group 73 (1).png" alt="erainterfaces-recruitmentlogo-image" style={{height:"40px",width:"40px"}}/></div>
    <div class="text">RECRUITMENT</div>
</div> 
      </div>
      
      <div class="col-md-4 text-center" >
       
        <div class="container m-0">
        <div class="mydivouter">
        <StaticImage src="../../../images/services/lateral.webp" class="serviceimage" alt="erainterfaces-lateralrecruitment-image"/>
        <div class="overlay"></div>
        {/* <div class="mybuttonoverlap text-center justify-content-center"><a href="#"class="text-white"> Know more </a></div> */}
  </div>
</div>
        
        <h6 class="text-center p-3">LATERAL RECRUITMENT</h6>
    </div>
    <div class="col-md-4 text-center" >
       
        <div class="container m-0">
        <div class="mydivouter">
        <StaticImage src="../../../images/services/Recruitment.jpg" class="serviceimage" alt="erainterfaces-hiringsuit-image"/>
        <div class="overlay"></div>
        {/* <div class="mybuttonoverlap text-center justify-content-center"><a href="#" class="text-white"> Know more </a></div> */}
  </div>
</div>
       
        <h6 class="text-center p-3">HIRING SUIT</h6>
    </div>
    <div class="col-md-4 text-center" >
      
        <div class="container m-0">
        <div class="mydivouter">
        <StaticImage src="../../../images/services/recruitment1.webp" class="serviceimage" alt="erainterfaces-recruitment-image"/>
        <div class="overlay"></div>
        {/* <div class="mybuttonoverlap text-center justify-content-center"><a href="#"class="text-white"> Know more </a></div> */}
  </div>
</div>
        
        <h6 class="text-center p-3">FRESHER HIRING</h6>
    </div>
    <div id="applicationSection" class="row py-3 my-1">
    <div class="logo">
    <div class="icon"><StaticImage src="../../../images/services/Group 74 (1).png" alt="erainterfaces-application-image" style={{height:"40px",width:"40px"}}/></div>
    <div class="text">APPLICATION</div>
</div>
      </div>
      <div class="col-md-4 text-center" >
       
        <div class="container m-0">
        <div class="mydivouter">
        <StaticImage src="../../../images/services/development.webp" className="serviceimage" alt="erainterfaces-webdevelopment-image"/>
        <div class="overlay"></div>
        {/* <div class="mybuttonoverlap text-center justify-content-center"><a href="#"class="text-white"> Know more </a></div> */}
  </div>
</div>
      
        <h6 class="text-center p-3">WEB DEVELOPMENT</h6>
    </div>
    <div class="col-md-4" >
        
        <div class="container m-0">
        <div class="mydivouter">
        <StaticImage src="../../../images/services/cross.webp" className="serviceimage"  alt="erainterfaces-crossplatform-image"/>
        <div class="overlay"></div>
        {/* <div class="mybuttonoverlap text-center justify-content-center"><a href="#"class="text-white"> Know more </a></div> */}
  </div>
</div>
        
        <h6 class="text-center px-3 p-3">APP DEVELOPMENT</h6>
    </div>
    <div class="col-md-4 text-center" >
       
        <div class="container m-0">
        <div class="mydivouter">
        <StaticImage src="../../../images/services/aiml.webp" className="serviceimage"  alt="erainterfaces-aiml-image"/>
        <div class="overlay"></div>
        {/* <div class="mybuttonoverlap text-center justify-content-center"><a href="#"class="text-white"> Know more </a></div> */}
  </div>
</div>
        
        <h6 class="text-center p-3">AI/ML</h6>
    </div>
  </div>
</div>
</div>

  
    )
}

export default ServicesSection

const settings = {
  dots: false,
  arrows: false,
      infinite: true,
       speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      pauseOnHover: true,
      initialSlide: 0,
      autoplay:true,
      autoplaySpeed:1500,
      mobileFirst: true,

      responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 3
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            settings: "unslick",
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 1,
            settings: "unslick",
            slidesToScroll: 1
          }
        }
      ]
    }