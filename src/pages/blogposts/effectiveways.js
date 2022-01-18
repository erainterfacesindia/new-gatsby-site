import * as React from "react"
import Layout from "../../components/Layout"
import '../../components/Style/global.css'
import { Badge } from 'react-bootstrap'
import SEO from '../../components/SEO'
import { StaticImage } from "gatsby-plugin-image"


const blog4 = () => {
    return (
        <Layout>
            <SEO title="Effective ways for recruitment"/>
       
        <div class="container-fluid pb50 py-5 uipad" style={{padding:"0 5%"}}>
    <div class="row">
    <h2 class="py-5">
  <Badge bg="danger">Effective ways for recruitment</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
        <div class="col-md-12 mb40">
        <article> 
                <StaticImage src='../../images/blogs/recruitment_cover.jpeg' alt="" class=" img-fluid" style={{height:"500px",width:"100%",objectFit:"cover"}}/>
                
                <div>
                <h4 class="py-4 text-danger text-start"> Competent
</h4>
 <p class="text-start">This is still the first factor to consider. Does the potential employee have the necessary skills, experiences, and education to successfully complete the tasks you need to be performed?

</p>

  <h4 class="py-4 text-danger text-start"> Capable
</h4>
 <p class="text-start">Will this person complete not only the easy tasks but will he or she also find ways to deliver on the functions that require more effort and creativity? For me, being capable means the employee has potential for growth and the ability and willingness to take on more responsibility.

</p>

  <h4 class="py-4 text-danger text-start"> Compatible
</h4>
 <p class="text-start">Can this person get along with colleagues, and more importantly, can he or she get along with existing and potential clients and partners? A critical component to also remember is the person’s willingness and ability to be harmonious with you, his or her boss. If the new employee can’t, there will be problems.

</p>

  <h4 class="py-4 text-danger text-start">Commitment
</h4>
 <p class="text-start">Does the person have values that align with yours? Are they honest; 
 do they tell the truth and keep promises? Are they above reproach? Are they selfless and a team player?</p>

  <h4 class="py-4 text-danger text-start"> Character</h4>
 <p class="text-start">Before deciding on the best LMS for your organization, consider that there will be times when live customer support will be needed.
  This often happens during the implementation and integration phases, but it can arise anytime.</p>

  <h4 class="py-4 text-danger text-start">Culture</h4>
 <p class="text-start">Every business has a culture or a way that people behave and interact with each other. Culture is based on certain values, expectations, policies, and procedures that influence the behavior of a leader and employees. Workers who don’t reflect a company’s culture tend to be disruptive and difficult.

</p>

  <h4 class="py-4 text-danger text-start">Compensation</h4>
 <p class="text-start">As the employer, be sure the person hired agrees to a market-based compensation package and is satisfied with what is offered. If not, an employee may feel unappreciated and thereby underperform. 
 Be careful about granting stock in the company; if not handled well, it will create future challenges.</p>
                        </div>
                        </article>
                        </div>
                        </div>
                        </div>
                     
                        </Layout>
                        
    )
}

export default blog4
