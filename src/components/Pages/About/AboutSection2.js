import React from 'react'
import styled from 'styled-components'
import AboutData from '../../../data/AboutData'
import Wrapper from '../../UI/Wrapper'


const AboutSection2 = () => {

  // Style 

  const AboutElements=styled.div`
    height:50vh;
    background:#454545;
    justify-content:center;
    align-items:center;
    padding: 0rem calc((130vw - 1300px)/2);
    position: relative;
    display: grid;
    grid-gap: 4rem;
    h4 {
      color: white;
      text-align:center;
      text-transform: uppercase;
      font-weight: 500;
    }
    .icon {
      font-size: 4rem;
      color: #f26a2e;
      text-align: center;
    }
    
    p {
      color: white;
      max-width: 35em;
      font-weight: 250;
    }
    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `

  return (
    <Wrapper>
      {/* <Title title="about us" /> */}
      <AboutElements>
        {AboutData.map(({ id, icon, label, text }) => {
          return (
            <article key={id}>
               <h4>{label}</h4>
              <span>{icon}</span>
             
              <p>{text}</p>
            </article>
          )
        })}
      </AboutElements>
    </Wrapper>
  )
}
export default AboutSection2;