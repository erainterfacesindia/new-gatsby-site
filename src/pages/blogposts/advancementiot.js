import * as React from "react"
import Layout from "../../components/Layout"
import '../../components/Style/global.css'
import Wrapper from '../../components/UI/Wrapper'
import { Badge } from 'react-bootstrap'
import SEO from '../../components/SEO'
import blogcoverimage from '../../images/blogs/iot_cover.png'
import img1 from '../../images/blogs/vccircle.gif'
import img2 from '../../images/blogs/springerlink.png'
import img3 from '../../images/blogs/dribble.gif'
import img4 from '../../images/blogs/unlimitedpower.gif'
import img5 from '../../images/blogs/X0XF.gif'
import img6 from '../../images/blogs/tensorflow.gif'


const advancementiot = () => {
    return (
        <Layout>
         <SEO title="The Advancements In IoT"/>  
       
        <div class="container-fluid pb50 py-5 uipad" style={{padding:"0 5%"}}>
    <div class="row">
    <h2 class="py-5">
  <Badge bg="danger">The Advancements In IoT</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
        <div class="col-md-12 mb40">
        <article class="text-center"> 
                {/* <img src={blogcoverimage} alt="" class=" img-fluid" style={{height:"500px",width:"100%",objectFit:"cover"}}/>  */}
                
                <div>
                <img src={img1} alt="vccircle" style={{height:"400px",width:"100%",objectFit:"cover"}}/>
                <p class="text-muted">Image credits to:<a href="https://www.vccircle.com/micro-vc-fund-gems-partners-backs-iot-startup-chariot" target="_blank" style={{ textDecoration:"none",color:"white"}}>VCCircle</a></p>
                <p class="text-start">The Internet of Things connects the physical world to the digital world, over wireless networks, without human to human interaction.
                         Smart home security systems, Wearable health monitors, Ultra-high speed wireless internet, Radio frequency identification tag are some of the common IoT we see in our 
                         day-to-day lives. According to research every person will use on average six IoT devices on a daily basis, in the near future. 
                         Below are some of the most popular advancements in IoT:</p>
                         <p class="text-start"><h5>Edge Computing:</h5> It allows data to be stored in micro-centers, providing many new options for the IoT. It stores data locally. Offers a much more economical, 
                    speedy and efficient way to data processing. This way, data can be made immediately accessible to a corresponding IoT device.</p>
                        <img src={img2} alt="" class=" img-fluid" style={{height:"400px",width:"600px",objectFit:"cover"}}/>
                        <p class="text-muted">Image credits to:<a href="https://link.springer.com/" target="_blank" style={{ textDecoration:"none",color:"white"}}>Springerlink</a></p>
                        <p class="text-start "><h5>Wearable Technology:</h5> People can wear clothes and items which can tell about their body in detail. We are not just talking about blood pressure, pulse rate, or oxygen rate but a glucose tracker, wearables for heart attack, 
                            a mood meter for patients who can't speak, artificial kidney and many more. IoT and wearables in pharma & health care is opening possibilities like never before.</p>
                            <img src={img3} alt="" class=" img-fluid" style={{height:"400px",width:"600px",objectFit:"cover"}}/>
                            <p class="text-muted">Image credits to:<a href="https://dribbble.com/shots/4140468-Real-World-Futures-VR-and-wearable-tech" target="_blank" style={{ textDecoration:"none",color:"white"}}>dribbble</a></p>
                            <p class="text-start"><h5>Sensors generating their own power:</h5> A California based startup is making different types of sensors, in which they are revolutionizing its model, 
                            which can generate its own power from a mix of resources, such as heat, vibrations, solar, etc. They also claim that such a sensor can live upto 20 years. 
                            Now, imagine all the sensors in the world without batteries</p>
                            <img src={img4} alt="" class=" img-fluid" style={{height:"400px",width:"600px",objectFit:"cover"}}/>
                            <p class="text-muted">Image credits to:<a href="https://giphy.com/explore/unlimited-power" target="_blank" style={{ textDecoration:"none",color:"white"}}>GIPHY</a></p>
                            <p class="text-start"><h5>Voice stimulated IoT:</h5> Some of the most common Voice stimulated IoT used are Siri, Amazon Echo, Google assistant. Voice user interface has changed the game in the financial institutions & Fintech institutions. 
                            According to them, accounts are more proof to its owner’s voice biometric than compared to the traditional methods.</p>
                             <img src={img5} alt="" class=" img-fluid" style={{height:"400px",width:"600px",objectFit:"cover"}}/>
                             <p class="text-muted">Image credits to:<a href="https://gifer.com/en/X0XF" target="_blank" style={{ textDecoration:"none",color:"white"}}>Gipher</a></p>
                             <p class="text-start"><h5>TinyML: </h5> Tiny Machine learning is where the worlds of IoT and machine learning meet. Earlier, the IoT device shared the data through the cloud where the hosted machine learning models manipulated the data. However, now with TinyML, 
                             data can be shared in a tiny chip inside of the IoT. One can run machine learning algorithms on small, low-power devices like microcontrollers.</p>
                             <img src={img6} alt="" class=" img-fluid" style={{height:"400px",width:"600px",objectFit:"cover"}}/>
                             <p class="text-muted">Image credits to:<a href="https://blog.tensorflow.org/2020/08/the-future-of-ml-tiny-and-bright.html" target="_blank" style={{ textDecoration:"none",color:"white"}}>TensorFlow Blog</a></p>
                        
                        </div>
                        </article>
                        </div>
                        </div>
                        </div>
                   
                        
                        </Layout>
                        
    )
}

export default advancementiot
