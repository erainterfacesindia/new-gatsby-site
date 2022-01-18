import * as React from "react"
import Layout from "../../components/Layout"
import '../../components/Style/global.css'
import Wrapper from '../../components/UI/Wrapper'
import { Badge } from 'react-bootstrap'
import SEO from '../../components/SEO'
import fimg1 from '../../images/blogs/emoji.gif'
// import fimg2 from '../../images/blogs/skeleton.webp'
// import fimg3 from '../../images/blogs/user-experience.gif'
import fimg4 from '../../images/blogs/SimilarMadeup.gif'
import fimg5 from '../../images/blogs/cinderella-fairy-godmother.gif'
import { StaticImage } from "gatsby-plugin-image"



const flutter = () => {
    return (
        <Layout>
           <SEO title="Why Flutter Over Any Other UI SDK"/>  
        
        <div class="container-fluid pb50 py-5 uipad" style={{padding:"0 5%"}}>
    <div class="row">
    <h2 class="py-5">
  <Badge bg="danger">Flutter Blog</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
        <div class="col-md-12 mb40">
        <article class="text-center"> 
                <StaticImage src="../../images/blogs/jamstack.jpeg" alt="" class=" img-fluid" style={{height:"400px",width:"100%",objectFit:"cover"}}/> 
                
                <div>
                <h1 class="py-4 text-white fa-4x text-center">Why Flutter Over Any Other UI SDK (Software Development Kit)</h1>
                <p class="text-start">Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase. Flutter is a game changing SDK. It is used by many top companies, such as:
                 Google, ebay, Tencent, Byte Dance, BMW, Alibaba.com and many more. Below are some of the reasons why developers are loving it:</p>
                 <ul>
                     <li class="text-start py-3">Fast, Reliable and offers robust support to its users.</li>
                     <img src={fimg1} alt="" class=" img-fluid" style={{height:"300px",width:"600px",objectFit:"cover"}}/>
                    <p class="text-muted">Image credit to:<a href="https://media.tenor.com/images/f05c56833ff461e9b9aad3a509132f0d/tenor.gif" target="_blank" style={{ textDecoration:"none",color:"white"}}>Tenor.com</a></p>
                    <li class="text-start pt-3">Multi-platform: It allows one access to the web, or the app from any device, attracting users from a wide spectrum of device owners.</li>
                    <li class="text-start">One can learn Flutter for free with Flutter Apprentice. Check this out before its time period.</li>
                    <p class="text-start"><a href="https://medium.com/flutter/learn-flutter-for-free-with-flutter-apprentice-32ced5f97a12" target="_blank" style={{ textDecoration:"none",color:"white"}} >https://medium.com/flutter/learn-flutter-for-free-with-flutter-apprentice-32ced5f97a12</a></p>
                    {/* <img src={fimg2} alt="" class=" img-fluid" style={{height:"400px",width:"600px",objectFit:"cover"}}/>
                    <p class="text-muted">Image credit to:<a href="https://community.nodebb.org/topic/11484/nodebb-now-with-gif-support" target="_blank" style={{ textDecoration:"none",color:"white"}}>community.nodebb.org</a></p> */}
                    <li class="text-start">Faster development with hot reload feature, which updates the UI automatically, hence improves the development experience.</li>
                    <li class="text-start">It is used to build web applications, cross platform mobile applications, and desktop applications.</li>
                    <li class="text-start">Beautiful native animations, and out of the box tools for developers.</li>
                    {/* <img src={fimg3} alt="" class=" img-fluid" style={{height:"400px",width:"600px",objectFit:"cover"}}/>
                    <p class="text-muted">Image credit to:<a href=" https://gifer.com/en/2DO" target="_blank" style={{ textDecoration:"none",color:"white"}}>gifer.com</a></p> */}
                    <li class="text-start pad-bottom-md">It has rich repository of UI components and built-in APIs</li>
                    <img src={fimg4} alt="" class=" img-fluid" style={{height:"250px",width:"600px",objectFit:"cover"}}/>
                    <p class="text-muted">Image credit to:<a href="https://www.pinterest.com/pin/839428818039942381/" target="_blank" style={{ textDecoration:"none",color:"white"}}>Pinterest</a></p>
                    <li class="text-start pt-3">Flutter apps are smaller in size, the main reason being the APIs used by Flutter are smaller in size compared to its competitor.</li>
                    <li class="text-start pad-bottom-md">It offers special developer tools such as Dart Analysis, Flutter Inspector which help developers analyze their code and keep them competent.</li>
                    <img src={fimg5} alt="" class=" img-fluid" style={{height:"400px",width:"600px",objectFit:"cover"}}/>
                    <p class="text-muted">Image credit to:<a href="https://tenor.com/view/cinderella-fairy-godmother-magic-bippity-boppity-boo-gif-6199236" target="_blank" style={{ textDecoration:"none",color:"white"}}>Tenor.com</a></p>
                    <li class="text-start">The framework currently supports six operating systems. One developer with just one code base and a bit of tweaking can launch their app on six systems: Android, iOS, macOS, Windows, Linux and Web.</li>
                    
                 </ul>

           
                        </div>
                        </article>
                        </div>
                        </div>
                        </div>
                     
                        
                        </Layout>
    )
}

export default flutter
