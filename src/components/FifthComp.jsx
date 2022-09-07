import React from 'react';
import styled from 'styled-components';
import { HeaderP, Mockup, P, Section } from '../commonStyle';

const FifthComp = () => {
  return (
    <_Section>
      <HeaderP data-aos="fade-up">산책친구, 어디서 찾지?</HeaderP>
      <P data-aos="fade-up">위펫으로 주변 친구를 찾아요~</P>
      <Mockup data-aos="flip-left" src="/images/map_mockup.png" />
    </_Section>
  );
};

const _Section = styled(Section)`
  background: linear-gradient(rgb(65, 159, 193), rgb(152, 212, 219));
  p {
    color: white;
  }
`;

export default FifthComp;
