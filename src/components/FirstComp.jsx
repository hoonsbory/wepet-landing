import React from 'react';
import styled from 'styled-components';
import { P, Section } from '../commonStyle';
const FirstComp = () => {
  return (
    <Section>
      <Header data-aos="fade-up">
        <img src="/images/logo.png" />
        <P>내 소중한 반려동물,</P>
        <P>이젠 친구를 만들어주세요</P>
      </Header>
      <MockUp
        data-aos="flip-left"
        data-aos-offset="-100"
        src="/images/first_mockup.png"
      />
      <Hand
        data-aos="flip-left"
        data-aos-offset="-100"
        src="/images/hand_crop.png"
      />
    </Section>
  );
};

const Header = styled.header`
  img {
    width: 111px;
    height: 40px;
    padding-top: 68px;
    ${props => props.theme.mobile`
        width : 23.2292vw;
        height : 8.3vw;
        padding-top : 14.1667vw;
    `}
  }
`;

const Hand = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  ${props => props.theme.mobile`
        width : 95.6vw;
        height : 133.7vw;
        
    `}
`;
const MockUp = styled.img`
  z-index: 1;
  position: absolute;
  left: -6px;
  bottom: -3px;
  ${props => props.theme.mobile`
        width : 100vw;
        height : 158.1vw;
    `}
`;

export default FirstComp;
