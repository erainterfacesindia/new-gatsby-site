import React ,{useState} from 'react'
import './projectsection3.css'
import OurblogData from '../../../data/ourblogs'
import {Button} from '../../Button'
import { Badge } from 'react-bootstrap'
import '../../Style/global.css'
import { StaticImage } from 'gatsby-plugin-image'






const Projectsection3 = () => {
    // const [visible, setVisible]= useState(3);
    // const loadMore = () =>{
    //     setVisible(visible + visible);
    // }
    // const sliceData=OurblogData.CardData.slice(0, visible);
    
  return (
    <div class="p-3s">
    <div class="container-fluid flex-wrap flex-md-nowrap" style={{padding:"0 5%"}}>
    <h2 class="pad-bottom-md">Student Works</h2>
<div class="row" py-4>
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
  <a href="#" class="projectcontainer projectcontainer-image">
    <StaticImage
      src="../../../images/hackernews.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="erainterfaces-hackernews-image"
    />
    <div class="projectcontainer-image-info">
                            <h4>Hacker News Clone App </h4>
                            {/* <h5 style={{width:"fit-content",fontSize:"13px",border:"2px solid #fff",padding:"10px"}}>View Project Details</h5> */}
                        </div>
    </a>
    <a href="#" class="projectcontainer projectcontainer-image">
    <StaticImage
      src="../../../images/studentworks/bitcoin.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="erainterfaces-bitcoin-image"
    />
    <div class="projectcontainer-image-info">
                            <h4>Bitcoin Info Action </h4>
                            {/* <h5 style={{width:"fit-content",fontSize:"13px",border:"2px solid #fff",padding:"10px"}}>View Project Details</h5> */}
                        </div>
                        </a>
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
  <a href="#" class="projectcontainer projectcontainer-image">
    <StaticImage
      src="../../../images/studentworks/hospitalfinder.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="erainterfaces-hospitalfinder-image"
    />
    <div class="projectcontainer-image-info">
                            <h4>Heal Station(Hospital Finder) </h4>
                            {/* <h5 style={{width:"fit-content",fontSize:"13px",border:"2px solid #fff",padding:"10px"}}>View Project Details</h5> */}
                        </div>
    </a>

    <a href="#" class="projectcontainer projectcontainer-image">
    <StaticImage
      src="../../../images/studentworks/houserental.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="erainterfaces-houserental-image"
    />
    <div class="projectcontainer-image-info">
                            <h4>House Rental Management</h4>
                            {/* <h5 style={{width:"fit-content",fontSize:"13px",border:"2px solid #fff",padding:"10px"}}>View Project Details</h5> */}
                        </div>
    </a>
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
  <a href="#" class="projectcontainer projectcontainer-image">
    <StaticImage
      src="../../../images/studentworks/chatbot.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="erainterfaces-chatbot-image"
    />
    <div class="projectcontainer-image-info">
                            <h4>Chatbot for Educational Institution</h4>
                            {/* <h5 style={{width:"fit-content",fontSize:"13px",border:"2px solid #fff",padding:"10px"}}>View Project Details</h5> */}
                        </div>
    </a>

    <a href="#" class="projectcontainer projectcontainer-image">
    <StaticImage
      src="../../../images/studentworks/onlinebanking.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="erainterfaces-onlinebanking-image"
    />
    <div class="projectcontainer-image-info">
                            <h4>Online Banking</h4>
                            {/* <h5 style={{width:"fit-content",fontSize:"13px",border:"2px solid #fff",padding:"10px"}}>View Project Details</h5> */}
                        </div>
    </a>
  </div>
  {/* <div className="text-center mt-3 mb-3">   
                      <button className="btn btn-danger"  onClick={() => loadMore()}>Load More</button>
                      </div> */}
</div>
             </div>
             </div>
           
      )
     
  }
  
export default Projectsection3










































































