import React from 'react';
import styled, { keyframes } from 'styled-components';
import { HeaderP, Mockup, P, Section } from '../commonStyle';

const ThirdComp = () => {
  const Image_Arr = new Array(3).fill(0).map((i, idx) => i + idx + 1);
  const Concat_Image_Arr = Image_Arr.concat(Image_Arr);
  return (
    <_Section>
      <HeaderP data-aos="fade-up">우리동네 친구들은</HeaderP>
      <P data-aos="fade-up">지금 뭘 하고 있을까?</P>
      <Mockup src="/images/shorts_mockup.png" />
      <ShortsWrapper>
        {Concat_Image_Arr.map((i, idx) => (
          <ShortsImage src={`/images/shorts_image${i}.png`} idx={idx} />
        ))}
      </ShortsWrapper>
    </_Section>
  );
};

const _Section = styled(Section)`
  background: linear-gradient(rgb(65, 159, 193), rgb(152, 212, 219));
  p {
    color: white;
  }
`;

const UpDown_Keyframe = keyframes`
    0%{
        -webkit-transform: translateY(-10px);
    }
    50%{
        -webkit-transform: translateY(20px);
    }
    100%{
        -webkit-transform: translateY(-10px);
    }
`;
const DownUp_Keyframe1 = keyframes`
    0%{
        -webkit-transform: translateY(20px);
    }
    50%{
        -webkit-transform: translateY(-10px);
    }
    100%{
        -webkit-transform: translateY(20px);
    }
`;

const Rolling_Keyframe = keyframes`
    0%{
        -webkit-transform: translate(-50%, -422px);
    }
    50%{
        -webkit-transform: translate(0, -422px);
    }
    100%{
        -webkit-transform: translate(-50%, -422px);
    }
`;

const Mobile_Rolling_Keyframe = keyframes`
    0%{
        -webkit-transform: translate(-50%, -87.91vw);
    }
    50%{
         -webkit-transform: translate(0, -87.91vw);
    }
    100%{
        -webkit-transform: translate(-50%, -87.91vw);
    }
    
`;

const ShortsImage = styled.img`
  position: relative;
  margin-right: 10px;
  animation: 1.5s linear 0s infinite;
  animation-name: ${props =>
    props.idx % 2 === 0 ? UpDown_Keyframe : DownUp_Keyframe1};
  ${props => props.theme.mobile`
        width : 33.33vw;
  `}
`;

const ShortsWrapper = styled.div`
  display: flex;
  position: absolute;
  -webkit-transform: translate(-50%, -422px);
  animation: 9s linear 0s infinite;
  animation-name: ${Rolling_Keyframe};
  ${props => props.theme.mobile`
  animation-name : ${Mobile_Rolling_Keyframe};
    -webkit-transform: translate(-50%, -87.91vw);
  `}
`;

export default ThirdComp;
