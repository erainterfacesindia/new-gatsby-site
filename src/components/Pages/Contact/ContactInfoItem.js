import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  display: flex; 
  align-items: center;
  gap: 0.5rem;
  padding-right: 10px;
  /* border-radius: 8px; */
  .icon {
    color: #d5302c;
    padding: 1rem; 
    padding-top:0;
    display: flex;
    size:130px;
    align-items: center;
    justify-content: center;
  }
  svg {
    width: 2rem;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace size={30} />,
  text = 'I need text ',
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}