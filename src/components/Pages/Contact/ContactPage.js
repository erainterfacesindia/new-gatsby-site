import React from 'react'
import { Badge } from 'react-bootstrap'
import ContactInfoItem from './ContactInfoItem';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import './contact.css'
import Background from '../../../images/contactmap.jpg'


const ContactPage = () => {
    return (

       
        <div class="container-fluid flex-wrap flex-md-nowrap py-4" style={{padding:"0 5%"}}>
        <h2 class="py-4 mt-4">
    <Badge bg="danger">Contact us</Badge>
                  {/* <span class="underline"></span>  */}
                </h2> 
                {/* <a href="https://goo.gl/maps/YFGM6E37R3QUzUTD8" target="_blank" style={{textDecoration:"none",cursor:"default"}}> */}
                <div>
                <a href="https://goo.gl/maps/YFGM6E37R3QUzUTD8" target="_blank" style={{textDecoration:"none"}}>
        <div class="contact2"  style={{ backgroundImage: `url(${Background})`}} id="contact2"></div></a>
    <div class="row contact-container">
      <div class="col-lg-12">
        <div class="card card-shadow border-0 mb-4">
          <div class="row">
            <div class="col-lg-8">
              <div class="contactbox p-4">
                <h2 class="text-black">For Any  Queries!</h2>
                <p class="text-muted mb-0">Please fill this form.</p>
                <form name="Contact Form" method="POST" target="blank" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfZ_rCGHVInjBLEn6Df2aR3yQA8UsBlieWfL9hpMYsiWTjq_w/formResponse">
                <input type="hidden" name="form-name" value="Contact Form" />
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group mt-3">
                        <input class="form-control" type="text" name="entry.2005620554" placeholder="Name" />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group mt-3">
                        <input class="form-control" type="email" name="entry.1106887909" placeholder="E-mail" />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group mt-3">
                        <input class="form-control" type="number" name="entry.1166974658" placeholder="Phone Number" />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group mt-3">
                        <input class="form-control" type="text"  name="entry.839337160" placeholder="Message" />
                      </div>
                    </div>
                    <div class="col-lg-12 ">
                      <button type="submit" class="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"><span> SUBMIT NOW <i class="ti-arrow-right"></i></span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-4">
            <h4 class="text-black p-4">Contact Details</h4>
            <a href="tel:+91 9686653545" target="_blank" style={{textDecoration:"none"}}>
        <ContactInfoItem icon={<MdLocalPhone size={30} />} text="+91 9686653545" /></a>
        <a href="mailto:connect@erainterfaces.com" target="_blank" style={{textDecoration:"none"}}>
            <ContactInfoItem icon={<MdEmail size={30} />} text="connect@erainterfaces.com" /></a>
            <ContactInfoItem text="R-22,3rd Cross,Nash-Square,Electronic City Phase 1,Bengaluru, Karnataka 5600100" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* </a> */}
  </div>


    )
}

export default ContactPage
