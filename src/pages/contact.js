import React from "react"
import Layout from "../components/Layout"
import { Button } from "../components/Button"
import styled from "styled-components"


const Contact = () => {
    return (
      <Layout>
          <ContactPage>
            <article>
              <Title>Want To Get In Touch?</Title>
              <h4>Location</h4>
              <p>#6, Daddys Southberg, Kammasandra,
                 Electronic City, Bengaluru,
                 Karnataka 560100</p>
                 <h4>Call or Email </h4>
              <p>+91 9686653545</p>
              <p>connect@erainterfaces.com</p>
                 <h4>Office Hours</h4>
              <p>Mon - Sat: 9.00am to 7.00pm
                 Sunday: Closed</p>
            </article>
            <article>
              <form
                    name="contact-form"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field" 
                    >
                <div className="form-row">
                  <label htmlFor="name">your name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="form-row">
                  <label htmlFor="email">your email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="form-row">
                  <label htmlFor="message">message</label>
                  <textarea name="message" id="message"></textarea>
                </div>
                <Button type="submit" primary="true" round="true">Submit</Button>
              </form>
            </article>
            </ContactPage>
      </Layout>
    )
  }

  export default Contact

  const ContactPage = styled.div`
    display: grid;
    gap: 2rem 3rem;
    padding-bottom: 3rem;
    background-color:white;
    line-height: 3;
  }
  @media screen and (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    form {
        margin-top:2rem;
        width: 50%;
        background: var(--white);
        border-radius: var(--borderRadius);
        box-shadow: var(--shadow-2);
        padding: 2rem 2.5rem;
      }

      label {
        display: block;
        font-size: var(--smallText);
        margin-bottom: 0.5rem;
        text-transform: capitalize;
      }
      input,
      textarea {
        width: 100%;
        padding: 0.375rem 0.75rem;
        border-radius: var(--borderRadius);
        background: var(--grey-0);
        border-color: white;
        border: 1px solid var(--grey-300);
      }
      form-row {
        margin-bottom: 1rem;
      }
      textarea {
        width: 100%;
        height: 7rem;
      }
      
      ::placeholder {
        color: var(--grey-600);
      }
      form-alert {
        color: var(--red-dark);
        font-size: var(--extraSmallText);
        letter-spacing: var(--letterSpacing);
        text-transform: capitalize;
      }
      hr {
        border-top: var(--line);
      }
      form-loading {
        position: relative;
      }
      form-loading::before {
        background: var(--white);
        box-sizing: border-box;
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        border-radius: var(--borderRadius);
        opacity: 0.8;
      }
      @keyframes spinner {
        to {
          transform: rotate(360deg);
        }
    form-loading::after {
            content: "";
            position: absolute;
            box-sizing: border-box;
            top: calc(50% - 3rem);
            left: calc(50% - 3rem);
            width: 6rem;
            height: 6rem;
            border-radius: 50%;
            border: 3px solid #ccc;
            border-top-color: var(--clr-primary-5);
            animation: spinner 0.6s linear infinite;
          }
  }`

  const Title=styled.p`
color:#f26a2e;
font-size:2rem;
padding-left:0 1rem;
margin-bottom: 2rem;
`





