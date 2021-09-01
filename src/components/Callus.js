import React from 'react'
import styled from "styled-components"
import {Button} from './Button'

const Callus = () => {
    return (
        <CallusContainer>
          <callusContent>
           <h1>Next Era Of Your Business, Start Here.  </h1>
           <Button as="button" type="submit" primary="true" round="true" 
           css={`           
           height:48px;
          

           @media screen and (max-width: 280px)
           {
               
               min-width:35px;
           }
        
           `}>Callus Now</Button>
          </callusContent>        
        </CallusContainer>
    )
}

export default Callus

const CallusContainer =styled.div`
background: #e85555;
display: flex;
justify-content:center;
align-items:center;
height: 50%;
padding: 0 1rem;
position: relative;
margin-top: -80px;
color:#fff;
z-index: 2;
    )

}
`
const callusContent = styled.div`
display: flex;
flex-direction: column;
algn-items: center;
padding: 0 2rem;


h1 {
    text-align: center;
    margin-bottom:1 rem;
    font-size: 1 rem;
    padding: 0 1 rem;
}

@media screen and (max-width: 768px)
{
    display:flex;
    flex-direction: column;
    padding: 0 1 rem;
}
`
