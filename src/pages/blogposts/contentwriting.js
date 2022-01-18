import * as React from "react"
import Layout from "../../components/Layout"
import '../../components/Style/global.css'
import Wrapper from '../../components/UI/Wrapper'
import { Badge } from 'react-bootstrap'
import SEO from '../../components/SEO'
import coverimage from '../../images/blogs/contentwriting.jpeg'
import cimg1 from '../../images/blogs/typing.gif'
import cimg2 from '../../images/blogs/booklove.gif'
import cimg3 from '../../images/blogs/bookpages.gif'
import cimg4 from '../../images/blogs/you-got-that-right-pointing.gif'
import cimg5 from  '../../images/blogs/tipsy.gif'


const ContentWriting = () => {
    return (
        <Layout>
         <SEO title="Content Writing"/>  
       
        <div class="container-fluid pb50 py-5 uipad" style={{padding:"0 5%"}}>
    <div class="row">
    <h2 class="py-5">
  <Badge bg="danger">Content Writing</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
        <div class="col-md-12 mb40">
        <article class="text-center"> 
                <img src={coverimage} alt="" class=" img-fluid" style={{height:"400px",width:"100%",objectFit:"cover"}}/>
                
                <div>
                <h1 class="py-4 text-white fa-4x text-center">Why should you consider writing as a profession?</h1>
                <img src={cimg1} alt="" class=" img-fluid" style={{height:"400px",width:"550px",objectFit:"cover"}}/>
                <p class="text-muted">Gif credits to:<a href="https://media.giphy.com/media/30zBdDtNEJIYg/giphy.gif/" target="_blank" style={{ textDecoration:"none",color:"white"}}>Giphy</a></p>
                <ol>
                    <li class="text-start">It is lucrative</li>
                    <p class="text-start">Since the internet and social media, writing has never been taken more seriously than ever. It is spreading like wild fire.The by-products of writing are used every 
                        second by millions of people across the globe. People are constantly consuming blogs, captions and content on social media written by content writers, user-manuals and know-how by technical writers, poetry, books, movies & tv series written by screenwriters. 
                        Writers are setting the trend, and sagely choosing to show people what they like to show or inform. People are earning well & being rewarded for the same. </p>
                        <img src={cimg2} alt="" class="img-fluid py-3" style={{height:"400px",width:"550px",objectFit:"cover",alignItems:"center"}}/>
                        <p class="text-muted text-center">Gif credits to:<a href="https://www.wattpad.com/854444288-%F0%9D%90%8C%F0%9D%90%80%F0%9D%90%8D%F0%9D%90%88%F0%9D%90%80-a-next-gen-story-00-description-cast-list" target="_blank" style={{ textDecoration:"none",color:"white"}}>wattpad</a></p>
                        <li class="text-start">For the love of words!</li>
                        <p class="text-start">The liking of the romance between a pencil and diary never goes away in the writer's community. We, here, all are attracted to the beauty of words and sentences, and the way they perform magic, resolutions or ignite spark to revolution. What was the first written piece that you read and it inspired you to explore this domain? What was the last written piece which raised goosebumps all over your body? Or the piece which had you question your thoughts and values? and the one that made you a kinder person? 
                            Don't you think writing is an art that you should explore?</p>
                            <img src={cimg3} alt="" class="img-fluid py-3" style={{height:"400px",width:"550px",objectFit:"cover"}}/>
                            <p class="text-muted text-center">Gif credits to blog:<a href="https://blog.drjobpro.com/9-ways-to-enhance-research-skills-before-graduation/" target="_blank" style={{ textDecoration:"none",color:"white"}}>drjobrpo</a></p>
                        <li class="text-start">One can get exposure and gain knowledge of their favorite domain!
                            Fun Fact; As you start writing about your preferred subject matter you will develop more awareness about it. You will know more about the method of writing or the difficulties of writing a 
                            poem when you actually sit down to write one. But that is not all, there is always research, and a lot of learning, which leads one to develop a deeper awareness of the subject. </li>
                            <img src={cimg4} alt="" class="img-fluid py-3" style={{height:"400px",width:"550px",objectFit:"cover"}}/>
                            <p class="text-muted text-center">Gif credits to:<a href="https://tenor.com/search/thats-right-gifs" target="_blank" style={{ textDecoration:"none",color:"white"}}>Tenor</a></p>
                        <li class="text-start">Every organisation needs a content writer. The world is big and so is the realm of the content writing industry! 
                            You can write about any possible thing that this world has to offer: your grandma recipes, thoughts, physics, algebra, Django, IoT, how cool is React Native,
                             your last adventure, a rare disease that you would like people to develop awareness about, the pains of unrequited love, a story that stayed with your heart for the longest time, an unforgettable memory, an idea you would like to share, a threat that you see, a person you would like to meet, things that you would like to mend, Beliefs that should be questioned... 
                             the list is endless, and so are the fantasies and innovations. Isn't it?  You can enter any realm of the world through writing. </li>
                             <img src={cimg5} alt="" class="img-fluid py-3" style={{height:"400px",width:"550px",objectFit:"cover"}}/>
                             <p class="text-muted text-center">Gif credits to:<a href="https://www.tipestry.com/topics/5de16f9f4e10df7b1b8cee63/faceless-hunt-magic-beautiful-and-amazing-gif-" target="_blank" style={{ textDecoration:"none",color:"white"}}>Tipsy.com</a></p>
                        <li class="text-start">Spread awareness</li>
                        <p class="text-start">We know the world that has been shown to us by writers. There are so many writers yet to be explored, stories yet to be told, ideas yet to be shared, 
                            feelings yet to be labeled. Every time I touch a new piece of assignment - I learn something new and write something that many people wont know about. 
                            If not for writers, the world wouldn't know basic things about humans, and very millennial problem how-to-use this device. The world is changing rapidly and who 
                            else is going to make people aware and adjust to it. Writers! There are requirements of writers from different backgrounds across all the domains you can imagine:
                             someone who can write about their authentic self, someone who is needed by the community ( such as us), someone who is a creative writer, someone who can write 
                             drama, etc. We as humans love to explore each other's culture, the world would be a rather more aware space with your writing in it. </p>        
                         </ol>
                        </div>
                        </article>
                        </div>
                        </div>
                        </div>
                     
                        
                        </Layout>
                        
    )
}

export default ContentWriting
