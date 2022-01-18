import * as React from "react"
import Layout from "../../components/Layout"
import '../../components/Style/global.css'
import { Badge } from 'react-bootstrap'
import SEO from '../../components/SEO'
import blogimage6 from '../../images/blogs/learningrecord.jpeg'


const blog4 = () => {
    return (
        <Layout>
            <SEO title="Learning Record Store"/>
        
        <div class="container-fluid pb50 py-5 uipad" style={{padding:"0 5%"}}>
    <div class="row">
    <h2 class="py-5">
  <Badge bg="danger">Learning Record Store</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
        <div class="col-md-12 mb40">
        <article > 
                <img src={blogimage6} alt="" class=" img-fluid" style={{height:"500px",width:"100%",objectFit:"cover"}}/>
                
                <div>
                    <h2 class="py-4 text-center">The importance of LRS in any LMS</h2>
                    <p class=" text-start">LSR: learning record store, is a data store which acts as a collection center of all the recorded data in the app.
                     It works by Experience API, an e-learning software, which allows learning content and learning systems to communicate to each other and records and tracks all 
                     types of learning experiences.</p>
                    <p>X-API, has let e-learning grow from its past limits and is blooming in today’s market. Below are some of the benefits one can find:</p>
                    <ul>
                        <li>Easy retrieval of data.</li><br/>
                        <p>Unlike SCORM, LSR is easy and simple to navigate. It has taken e-learning outside the web browsers. Now any LSR user can navigate the app through 
                            their IOs and android or tablet devices. One can shift smoothly between the Website and the app. It allows asynchronous learning and synchronous learning</p>
                        <p>A user can learn real time and store information. One can, also, search and retrieve any information from the collected records.</p>
                        <li>Organized data store</li><br/>
                        <p>A learner’s experience and activities is stored much more sophisticatedly than the traditional system. 
                            One can track real time performance, games, stimulation and offline activities</p>
                        <li>Wide spectrum of users.</li><br/>
                        <p>LRS users are not just confined to students, but even employees can benefit from this.
                             The features of LSR can be helpful to any domain and industry.</p>
                        <li>Deeper User insight</li><br/>
                        <p>With the detailed information about the users, one can dig deep and find gaps and strengths of their users, and can use it to their advantage. It can, also, be use to help the user better.
</p>
                        <li>Better Control</li><br/>
                        <p>One can watch their user’s actions, performance, progress and have better control over their actions. Controlling leads to better security.
</p>
                        <li>Better user engagement</li><br/>
                        <p>LSR lets one study about their user’s behavior deeply, an information which can help evaluate better methods to engage the users. 
                            One can assist the user better and personalize the content as per user’s commands.  </p>
                         <p>A misconception about LMS users is that they often think the data is under the LMS provider; however it is the LSR which captures the data and stores it. LSR benefits the LMS in many ways: 
                             provides built-in reports and dashboards, provides better insights to one and one’s users, can provide analytics on the user’s learning efforts, etc.</p>   
                    </ul>

                        </div>
                        </article>
                        </div>
                        </div>
                        </div>
                       
                        </Layout>
                        
    )
}

export default blog4
