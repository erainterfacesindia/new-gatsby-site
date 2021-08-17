import { Link } from '@reach/router'
import React from 'react'
import Layout from '../component/layout'
import * as styles from '../styles/home.module.css'

export default function Home() {
    return (
        <Layout>
        <section className={styles.header}>  
            <div >
                <h2 > Our technology enabled solutions are tailored to meet the demands of individuals & organisations</h2>
                <Link className={styles.btn} to="/about">Explore More!</Link>         
        </div>
        < img src="/eragif.gif" alt="home page gif" style={{maxWidth: '100%', maxHeight:"100%"}}/>
        </section>
        <section >
          <div>
            <h1> Our Services</h1>

          </div>
          < img src="/gatsby.png" alt="home page " style={{maxWidth: '25%', maxHeight:"50%"}}/>
        </section>
       
        </Layout>
    )
}



