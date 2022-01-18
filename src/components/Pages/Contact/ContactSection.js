import React from 'react'
import ContactInfoItem from './ContactInfoItem';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { Badge } from 'react-bootstrap'
import './contact.css'


const ContactSection = () => {
    return (
    
      <div class="container-fluid flex-wrap flex-md-nowrap py-5 contactpad">
      <h2 class="py-4">
  <Badge bg="danger">Contact US</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
        <div class="row">
        {/* <h2 class="py-3">
  <Badge bg="danger">Get In Touch</Badge>
                <span class="underline"></span> 
              </h2> */}
        <div className="col-lg-6 col-sm-12 py-4">
          <h2> Get In Touch</h2>
          <p>Smarter Business Solutions, Better Customer  Relations</p>
            <h4 class="py-3">Contact Details</h4>
        <ContactInfoItem icon={<MdLocalPhone size={30} />} text="9490258654" />
            <ContactInfoItem icon={<MdEmail size={30} />} text="connect@erainterfaces.com" />
            <ContactInfoItem text="#6, Daddys Southberg, Kammasandra, Electronic City, Bengaluru, Karnataka 560100" />
            </div>
       
      <div className="col-lg-6 col-sm-12 py-4">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "370px"}}
            // padding-left="20px"
          >
            <iframe
              src="/Capture.webp"
              title="ERA MAP"
              width="100%"
              height="100%"
            />
          </div>
          <br />
          </div>
          </div>
          </div>
       
           
    )
}

export default ContactSection
//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.231179942674!2d77.68881431482045!3d12.828332490950027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d43e0fb306b%3A0x66f8ca8261f5e49b!2sERAINTERFACES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1631800736369!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>