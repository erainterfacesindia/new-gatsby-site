import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Client.css'
import Wrapper from '../../../UI/Wrapper'
import { Badge } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image';

const Client = () => {
    return (
      <div class="p-3s">
     <div class="container-fluid flex-wrap flex-md-nowrap py-5 pt-0" style={{padding:"0 5%"}}>
      <h2 class="py-4">
  <Badge bg="danger">Our Clients</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
              <Wrapper>
              <div class="box">
  <Slider {...settings}>
  
              <div>
            <StaticImage src="../../../../images/client-logos/vsbec.jpg" alt="erainterfaces-vsbec"/>
            </div>
            <div>
            <StaticImage src="../../../../images/client-logos/giet.jpg" alt="erainterfaces-giet"/>
            </div>
            <div>
            <StaticImage src="../../../../images/client-logos/cmrtc.jpg" alt="erainterfaces-cmrtc"/>
            </div>
            <div>
            <StaticImage src="../../../../images/client-logos/geethanjali.jpg" alt="erainterfaces-geethanjali"/>
            </div>
            <div>
            <StaticImage src="../../../../images/client-logos/kpriet.jpg" alt="erainterfaces-kpriet"/>
            </div>
            <div>
            <StaticImage src="../../../../images/client-logos/rce.jpg" alt="erainterfaces-rce"/>
            </div>
            <div>
            <StaticImage src="../../../../images/client-logos/vsbcetc.jpg" alt="erainterfaces-vsbcetc"/>
            </div>
            <div>
            <StaticImage src="../../../../images/client-logos/svcet.jpg" alt="erainterfaces-svcet"/>
            </div>
            <div>
            <StaticImage src="../../../../images/client-logos/gla.jpg" alt="erainterfaces-gla"/>
            </div>
            <div>
            <StaticImage src="../../../../images/client-logos/udnfabrics.jpg" alt="erainterfaces-udnfabrics"/>
            </div>
            <div>
            <StaticImage src="../../../../images/client-logos/ksrct.jpg" alt="erainterfaces-ksrct"/>
            </div>
            
            </Slider>
            </div>
            </Wrapper>
         </div>
         </div>
         
    )
}

export default Client

const settings = {
  dots: false,
      infinite: true,
       speed: 500,
       autoplay: true,
       autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 3,
      pauseOnHover: true,
      initialSlide: 0,

    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    }