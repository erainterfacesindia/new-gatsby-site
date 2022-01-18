import * as React from "react"
import Layout from "../../components/Layout"
import '../../components/Style/global.css'
import Wrapper from '../../components/UI/Wrapper'
import { Badge } from 'react-bootstrap'
import SEO from '../../components/SEO'
import blogimage2 from '../../images/blogs/trending.webp'


const blog2 = () => {
    return (
        <Layout>
         <SEO title="BEST PRACTICES FOR CODING"/>  
       
        <div class="container-fluid pb50 py-5 uipad" style={{padding:"0 5%"}}>
    <div class="row">
    <h2 class="py-5">
  <Badge bg="danger">BEST PRACTICES FOR CODING</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
        <div class="col-md-12 mb40">
        <article> 
                <img src={blogimage2} alt="" class=" img-fluid" style={{height:"300px",width:"100%",objectFit:"cover"}}/>
                
                <div>
            <p class=" text-start py-5">Welcome to the wonderful world of software development. Prepare yourself for an exciting and thrilling journey filled with code, rules, and more code. And did I mention there are rules? If you are someone who is familiar with coding, then the concept of coding standards is nothing new to you. You may be a strong supporter of these guidelines or a freedom fighter who believe that code is a form of expression. Whatever the case may be, it doesn’t hurt to look at some of the best practices when it comes to writing a good piece of code.

It’s worth mentioning that while coding standards exist – they exist in many variations and often are merely guidelines that don’t have to be followed. Unless you want to write good code, then you probably should stick to some form of standards.</p>

<h4 class="py-3 text-danger text-start">Write comments and documentation</h4>
<p class=" text-start">Perhaps one of the first things you learn as a developer is to comment on your code. At first, it may seem like a waste of time, following the mentality of ‘If they are a developer too – they can understand it’. While it is true some of the time, commenting on your code and providing proper documentation will guide the other developers through the algorithm and logic that you implemented.
 But don’t get carried away and comment on every line of code! The obvious code should be left as is.</p>


<h4 class="py-4 text-danger text-start">Write readable yet efficient code</h4>
 <p class=" text-start">Readable codes are easy to follow, yet use optimal space and time. When writing code you may often want to write it in as few lines as possible. 
 Perhaps you can write an entire method or function in one line, but that only makes it harder to read and understand.</p>


<h4 class="py-4 text-danger text-start">Use helper methods</h4>
<p class=" text-start">It’s good practice to keep the code concise and succinct. A method should only implement what it needs to do. If a part of your implementation does something else, put it in a separate method and call that within your method.</p>

<p>If avoidable, do NOT hard-code!</p>

 <p>The only things that should be hard-coded are constants. That’s it.</p>


 <h4 class="py-4 text-danger text-start">Write test cases.</h4>
<p class=" text-start text-capitalize">Don’t forget the edge cases: 0s, empty strings/lists, nulls, etc.</p>

<p>This way you know what your method does, what it takes, and what it should return. You will know when it should work or when it should fail. A function should always be based on test cases; not tests on functions.</p>

<p class=" text-start text-capitalize">Write readable yet efficient code. Conform to the coding standards of your current project</p>

<p class="fst-italic">“DISCIPLINED PERSONAL PRACTICES CAN REDUCE DEFECT INTRODUCTION RATES BY UP TO 75 PERCENT”</p>

<p>Every project/company has its own coding standards. Some might prefer one style over the other when it comes to things such as naming conventions, file structure, and spacing.</p>

<p>There are IDEs where you can set the preferred style, which will auto-correct you when you save. It is easier to read and, therefore understand, when all the files of the projects use the same style, naming convention, spacing, etc.</p>


 <h4 class="py-4 text-danger text-start">Use your IDE’s drop-down menu</h4>
<p class=" text-start">Not so much a standard, but good practice, these are very helpful and will help you make fewer coding errors.</p>

<p>For example: </p>

<p>If you want to rename a variable or a method, just use the “refactor” option of your IDE and it will change all the calls to that method/variable name. You don’t have to change them one by one which will make your code prone to error/failure.</p>

<p>If you want to create getter/setter methods of all your private variables, just use “create getter/setter” and the IDE will automatically create the methods for you.</p>



 <h4 class="py-4 text-danger text-start">APIs are handy</h4>
 <p class="fst-italic">“CURRENT SOFTWARE PROJECTS SPEND ABOUT 40 TO 50 PERCENT OF THEIR EFFORT ON AVOIDABLE REWORK”</p>

<p>Before implementing a method, make sure they’re not available for you to use. You don’t have to code if you can just import the functionality. It makes a developer’s life super easy.</p>

<p>The famous saying is “Don’t reinvent the wheel” and it stands true in many cases. However, you should always consider the implications of importing a library, especially if it is a third party. Aside from possible licensing issues, you may just be bloating your codebase. If all you need is a method that converts temperatures, you don’t have to import a library that does that and a hundred other things.</p>



<h4 class="py-4 text-danger text-start">Pair programming/code review</h4>
 <p class="fst-italic">“PEER REVIEWS CATCH 60 PERCENT OF THE DEFECTS”</p>

<p>These are very helpful when it comes to refactoring your code. Others might see better implementation to optimize your code or just make your code more elegant. It also ensures that developers adhere to standards and the work is double-checked. In addition to all that, it is a wonderful way for developers to learn from each other.</p>


 <h4 class="py-4 text-danger text-start">BACKUP AND SAVE YOUR WORK OFTEN</h4>
<p class=" text-start">Enough said. Dead battery, blackout, software glitch, fire, nuclear disaster – all of these may result in loss of data. Making sure you save often and back up your code on some kind of version control system is a simple way to ensure that your code stays safe.</p>

<p>It is a huge topic – one that can go on for many pages. In fact, if you ever wish to read up on Java coding standards, Oracle has just that. Application of these standards and practices also varies by application – whether you are working on a huge corporate project or helping your little brother with homework. Based on many factors, it is ultimately up to you to make sure that the code you develop is good code.</p>


                        </div>
                        </article>
                        </div>
                        </div>
                        </div>
                    
                        
                        </Layout>
                        
    )
}

export default blog2
