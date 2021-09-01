import React from 'react'
import styled from 'styled-components'
import AboutData from 'C:/erainterfaces/uday/new-gatsby-project/src/data/AboutData'


const Section2 = () => {
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
    min-height:50vh;
    margin-top: 4rem;
    justify-content:center;
    align-items:center;
    padding: 0 1rem;
    position: relative;
    display: grid;
    gap: 0rem;
    grid-gap: 2rem;
    .icon {
      font-size: 4rem;
      color: var(--clr-primary-5);
      margin-bottom: 1rem;
    }
    h4 {
      text-transform: uppercase;
      font-weight: 500;
    }
    p {
      color: var(--clr-grey-3);
      max-width: 35em;
    }
    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  `
export default Section2