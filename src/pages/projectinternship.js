import React from 'react'
import Layout from "../components/Layout"
import Projects from '../components/Pages/p&i/projects'
import ProjectSection2 from '../components/Pages/p&i/projectSection2'
import ProjectSection3 from '../components/Pages/p&i/Projectsection3'
import SEO from '../components/SEO'


const ProjectInternship = () => {
    return (
        <Layout>
             <SEO title="P&I"/>
             <Projects />
             {/* <ProjectSection2 /> */}
             <ProjectSection3 />

            
        </Layout>
    )
}

export default ProjectInternship
