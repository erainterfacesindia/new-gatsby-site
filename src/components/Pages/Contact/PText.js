import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  /* max-width: 300px; */
  margin: 0 auto;
  font-size: 1.2rem;
  line-height: 2rem;
  color:black;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}