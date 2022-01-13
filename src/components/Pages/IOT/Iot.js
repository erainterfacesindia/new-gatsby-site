import React from 'react'
import './iot.css'
import { Badge } from 'react-bootstrap'
import {Button} from '../../Button'
import '../../Style/global.css'
import { StaticImage } from 'gatsby-plugin-image';



const Iot = () => {
    return (
        
        <div class="p-3">
           <div class="container-fluid flex-wrap flex-md-nowrap" style={{padding:"0 4%"}}>
           <h2 class="py-5">
      <Badge bg="danger">IoT</Badge>
                  </h2> 
                  </div>
                  <div class="hero">
                      <StaticImage src="../../../images/iot/iot.png" class=" img-fluid" style={{height:"500px",width:"100%",objectFit:"cover"}} alt="erainterfaces-iot-coverimage" />
                      <div class="hero-text">
                         <h1>Setup your own IOT lab in college</h1>
                           <p>Learn from industry experts</p>
                             </div> 
                             </div>   

                             <div class="py-3 service-22">
    {/* <div className="container"> */}
        <div class="row wrap-service-22">
            <div class="col-lg-6"> 
							<StaticImage src="../../../images/iot/iot2.jpg" class="rounded img-shadow img-fluid" alt="erainterfaces-iot-image" /> 
						</div>
            <div class="col-lg-6 mt-4 mt-md-0">
                <div class="text-box"> 
                <h4 class=" text-megna mt-2 mb-4">About Our IOT Center</h4>
                <p>We provide economical, basic, premium variants of COE IoT lab with facilities of more than  sensors to read the different parameters.
                         We have vast experience on most popularly used wireless technologies like LoRaWAN, WiFi, BLE, GSM etc.<br/> 
                    IoT COE lab provides more than 50 different sensors, various development kits to read the data & do real time IoT projects.
                         We provide access to our custom built Learning Management System (LMS), which helps students to get structurized, organised learning to do IoT projects. 
                         IoT projects are designed to be various verticals like smart city, smart health care, smart home etc. 
                         Students can conceptualize, research, design and develop on innovative IoT applications & solve real world problems.
                          We provide vertical, technology specialised COEs as part of premium variants like LoRaWAN COE, Smart city COE, Smart home COE etc.  
                    	</p>								
				</div>
            </div>      
        </div>
    {/* </div> */}
</div>

<div class=" service-22">
    {/* <div className="container"> */}
        <div class="row wrap-service-22">
            <div class="col-lg-6 mt-4 mt-md-0">
                <div class="text-box"> 
                <h4 class=" text-megna mt-2 mb-4">Objectives of the COE:</h4>
                    <ol>
                     <li> The vision of the CoE is to enable students to understand, learn and apply their skills in the emerging technology of Internet of Things</li>
                      <li> To upskill students & create innovation in IoT by solving real world challenges</li>
                       <li>To provide great career opportunities for participants in the field of IoT</li>
                       <li>To provide projects based learning added with innovation results in industry experience</li>
                       <li>To form a bridge between the industry and academic institutions to update their knowledge.</li>
                       <li> To understand innovative application’s needs such as Smart City, Smart Health, Smart Manufacturing, Smart Agriculture, etc.</li>
                       <li>To build industry capable talent and entrepreneurial ecosystem for IoT</li> 
                    </ol> 									
				</div>
            </div> 
            <div class="col-lg-6"> 
							<StaticImage src="../../../images/iot/iot5.jpg" class="rounded img-shadow img-fluid" alt="erainterfaces-Objectives of the COE-image"/> 
						</div>     
        </div>
    {/* </div> */}
</div>

<div class=" service-22">
    {/* <div className="container"> */}
        <div class="row wrap-service-22">
            <div class="col-lg-6"> 
							<StaticImage src="../../../images/iot/iot3.png" class="rounded img-shadow img-fluid" alt="erainterfaces-Faculty Development Program-image"/> 
						</div>
            <div class="col-lg-6 mt-4 mt-md-0">
                <div class="text-box"> 
                <h4 class=" text-megna mt-2 mb-4">Faculty Development Program (FDP):</h4>
                    <ol>
                       <li> Faculty will be benefited with training in IoT on par with industry standards & assists faculty to provide quality, out-come based learning to students.</li>
                        <li>Faculty will be assisting students in completing the learning platforms, completion of projects, conducting assessments</li>
                        <li>Faculty will be certified as ERA CERTIFIED CONTENT TRAINER on successful completion of FDP. </li>
                        <li>Weekly interactions with our company, industry experts helps faculty to be updated in the knowledge, happenings in the industry</li>
                    </ol>							
				</div>
            </div>      
        </div>
    {/* </div> */}
</div>

<div class="service-22">
    {/* <div className="container"> */}
        <div class="row wrap-service-22">
            <div class="col-lg-6 mt-4 mt-md-0">
                <div class="text-box"> {/* <small class="text-info font-weight-medium">Make your site in No-Time</small> */}
                    <h4 class=" text-megna mt-2 mb-4">Why choose ERA IOT?</h4>
                    <p>The Internet of Things (IoT) is at the epicenter of the Digital Transformation Revolution that is changing the shape of business, enterprise and people’s lives. 
                        This transformation influences everything from how we manage and operate our homes to automating processes across nearly all industries. 
                        Provides businesses and people better insight into and control over objects and environments that are currently beyond the reach of the internet. 
                        By doing so, IoT helps businesses and people to be more connected to the world around them and to do more meaningful, higher-level work.
                         IoT is smarter than the Internet. <br/>
                     According to numbers from the Improving Internet of Things (IoT) Security with Software-Defined Network (SDN) study,
                         there will be more than 75.44 billion connected IoT devices by 2025. With a forecast of over 7.33 billion mobile users by 2023 and more than 1,105 million connected wearable devices users by 2022, 
                         the Internet of Things is expected to grow into one of the smartest collective and collaborative systems in history.
                    <br/>
                    The COE intends to drive students towards path-breaking innovation in emerging technologies by bridging the gap between academia & industry trends. 
                    We focus on solving real-world challenges utilizing emerging Industry 4.0 technologies like IoT, AI etc. Consistent, productive engagement with students stands as unique proposition w.r.t other existing CoEs
                    </p>								
				</div>
            </div> 
            <div class="col-lg-6"> 
							<StaticImage src="../../../images/iot/iot4.png" class="rounded img-shadow img-fluid" alt="erainterfaces-eraiot-image"/> 
						</div>     
        </div>
    </div>    
                        </div>
                        
          
           
    )
}

export default Iot
