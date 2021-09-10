import React from 'react'
import styled from 'styled-components'
import AboutData from '../../../data/AboutData'
import Wrapper from '../../UI/Wrapper'


const AboutSection2 = () => {

  // Style 

  const AboutElements=styled.div`
    min-height:40vh;
    background:#454545;
    margin-top: -80px;
    margin-bottom: 50px;
    justify-content:center;
    align-items:center;
    padding: 0rem calc((130vw - 1300px)/2);
    position: relative;
    display: grid;
    gap: 4rem;
    grid-gap: 8rem;
    .icon {
      font-size: 4rem;
      color: #f26a2e;
      margin-bottom: 1rem;
    }
    h4 {
      color: white;
      text-transform: uppercase;
      font-weight: 500;
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
              <span>{icon}</span>
              <h4>{label}</h4>
              <p>{text}</p>
            </article>
          )
        })}
      </AboutElements>
    </Wrapper>
  )
}
export default AboutSection2;