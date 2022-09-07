import React from 'react';
import styled from 'styled-components';
import { HeaderP, P, Section } from '../commonStyle';
const SecondComp = () => {
  return (
    <Section>
      <HeaderP data-aos="fade-up">언제나 당신만 바라보는</HeaderP>
      <P data-aos="fade-up">
        반려동물도 <span>친구가 필요해!</span>
      </P>
      <Img src="/images/Group 37.png" />
      <Badge
        data-aos="fade-up"
        src="./images/dog_badge1.png"
        left="0"
        top="270"
        mobileWidth="43.33"
        mobileTop="56.25"
        mobileLeft="0"
      />
      <Badge
        data-aos="fade-up"
        src="./images/dog_badge2.png"
        left="275"
        top="237"
        mobileWidth="39.37"
        mobileLeft="57.29"
        mobileTop="49.37"
      />
      <Badge
        data-aos="fade-up"
        src="./images/dog_badge3.png"
        left="96"
        top="517"
        mobileWidth="37.29"
        mobileLeft="20"
        mobileTop="107.7"
      />
      <Badge
        data-aos="fade-up"
        src="./images/dog_badge4.png"
        left="8"
        top="643"
        mobileWidth="50.83"
        mobileLeft="1.66"
        mobileTop="133.95"
      />
      <Badge
        data-aos="fade-up"
        src="./images/dog_badge5.png"
        left="233"
        top="740"
        mobileWidth="42.29"
        mobileLeft="48.54"
        mobileTop="154.16"
      />
    </Section>
  );
};

const Img = styled.img`
  position: relative;
  top: -148px;
  ${props => props.theme.mobile`
    width : 100vw;
    top : -30.83vw
  `}
`;

const Badge = styled.img`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  ${props => props.theme.mobile`
    width : ${props => props.mobileWidth}vw;
    left: ${props => props.mobileLeft}vw;
    top: ${props => props.mobileTop}vw;
  `}
`;

export default SecondComp;
