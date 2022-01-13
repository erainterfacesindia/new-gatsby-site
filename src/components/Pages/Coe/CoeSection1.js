import React from 'react'
import {BiNotepad} from "react-icons/bi"
import { MdLocalPhone } from 'react-icons/md'
import { Badge } from 'react-bootstrap'

const CoeSection1 = () => {
    return (
        
        <div class="container-fluid flex-wrap flex-md-nowrap py-5" style={{padding:"0 5%"}}>
        <h2 class="py-4 mt-3">
    <Badge bg="danger">Center Of Excellence</Badge>
                  {/* <span class="underline"></span>  */}
                </h2> 
        <div class="row">
                <div className="col-md-12 pt-3">
                    <h2>About Our COE</h2>
                            <p>Through CoE we aim to empower students through a team of experts to learn, explore, motivate them to innovate and get hands-on-experience on new technologies and bridge the gap between academia curriculum and industry requirements. We focus on enabling students to solve real-world challenges utilizing emerging Industry 4.0 technologies like IoT, Al, and many more. Our highly organized management consists of frequent 
                                productive engagement with students to enable them to overcome the most complex challenges and supervise them through-out  the learning period and much more.</p>    
                    </div>
            </div>
           <div class="container text-center" style={{margin:"10px 0px",maxWidth:"2560px"}}>
                <h2> Want To Know More?</h2>
            <div class="row justify-content-center">
            <div class="col col-lg-1 pt-3 px-2">
            <BiNotepad size={43}/>
            <a href="#" target="_blank" class="btn  btn-danger btn-sm text-white mt-2">Broucher</a>
             </div>
             <div class="col col-lg-1 pt-3 px-2">
             <MdLocalPhone size={43}/>
            <a href="/contact" class="btn  btn-danger btn-sm  text-white mt-2">Call now</a>
             </div>
        </div>
        </div>
        </div>
      
    )
    
}

export default CoeSection1
