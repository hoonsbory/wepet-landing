import React from 'react';
import styled from 'styled-components';
import { HeaderP, Mockup, P, Section } from '../commonStyle';
import KakaoChannel from './KakaoChannel';

const SixthComp = () => {
  return (
    <Section>
      <HeaderP data-aos="fade-up">나만 보기 아까운 울애기</HeaderP>
      <P data-aos="fade-up">
        사진과 영상 <span>공유해보세요~</span>
      </P>
      <Stamp
        src="/images/dog_stamp.png"
        left="0"
        top="423"
        degree="0"
        mobileLeft="0"
        mobileTop="88.12"
      />
      <Stamp
        src="/images/dog_stamp.png"
        left="382"
        top="665"
        degree="0.11"
        mobileLeft="79.58"
        mobileTop="138.54"
      />
      <Mockup data-aos="flip-left" src="/images/share_mockup.png" />
      <KakaoChannel />
    </Section>
  );
};

const Stamp = styled.img`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  transform: rotate(${props => props.degree}turn);
  ${props => props.theme.mobile`
    width : 29.16vw;
    left : ${props => props.mobileLeft}vw;
    top : ${props => props.mobileTop}vw;
  `}
`;

export default SixthComp;
