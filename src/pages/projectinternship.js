import React from 'react'
import Layout from "../components/Layout"
import Projects from '../components/Pages/p&i/projects'
import SEO from '../components/SEO'
import ProjectSection2 from '../components/Pages/p&i/projectSection2'
import ProjectSection3 from '../components/Pages/p&i/Projectsection3'

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
