import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Wrapper from '../../UI/Wrapper';
import styled from 'styled-components';
import * as Styles from './FeatureSection.module.css'



export const FeatureSection = () => {
    return (
        <div class="p-3s bg-black text-white">
           <Wrapper>
              <Heading>Industries We Serve</Heading>
                  <div className={Styles.container + " row"}>
                     <div className="col-lg-6 col-sm-10">
                          <img className="about" src="/photo.jpg" alt="image"/>
                      </div>
                         <div className="col-lg-6 col-sm-12">  
                              <h2>Recruitment</h2>
                                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                                      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                                      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                                      sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
                                      quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
                        </div>
                    </div>
  <div className={Styles.container + " row"}>
  <div className="col-lg-6 col-sm-12"> 
    <h2>Recruitment</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
        quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
    </div>
    <div className="col-lg-6 col-sm-10">
    <img className="about" src="/photo.jpg" alt="image"/>
    </div>
  </div>
  <div className={Styles.container + " row"}>
                     <div className="col-lg-6 col-sm-10">
                          <img className="about" src="/photo.jpg" alt="image"/>
                      </div>
                         <div className="col-lg-6 col-sm-12">  
                              <h2>Recruitment</h2>
                                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                                      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                                      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                                      sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
                                      quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
                        </div>
                    </div>
  <div className={Styles.container + " row"}>
  <div className="col-lg-6 col-sm-12"> 
    <h2>Recruitment</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
        quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
    </div>
    <div className="col-lg-6 col-sm-10">
    <img className="about" src="/photo.jpg" alt="image"/>
    </div>
  </div>
</Wrapper>
        </div>
    )
}
export default FeatureSection

const Heading = styled.div`
font-size: clamp(1.2rem,5vw,3rem);
text-align: center;
padding-bottom: 2rem;
color: #f26a2e;
padding:30px 0;
`