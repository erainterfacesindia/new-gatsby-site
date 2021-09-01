import React from 'react'
import styled from 'styled-components'
import AboutData from '../../data/AboutData'


const AboutSection2 = () => {
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
const Wrapper = styled.div``
const AboutElements=styled.div`
    min-height:40vh;
    background:#34282C;
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
  }
  `
export default AboutSection2