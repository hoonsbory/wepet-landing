import React from 'react';
import styled from 'styled-components';

const KakaoChannel = () => {
  return (
    <Button
      data-aos="fade-up"
      data-aos-offset="0"
      onClick={() => open('http://pf.kakao.com/_rtMVxj')}
    >
      <img src="/images/kakao_channel.png" />
      위펫 친구추가
    </Button>
  );
};

const Button = styled.button`
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 17px 0px;
  gap: 10px;
  position: absolute;
  width: 420px;
  height: 74px;
  left: 30px;
  color: black;
  cursor: pointer;
  top: 813px;
  font-size: 26px;
  background: linear-gradient(0deg, #fae100, #fae100);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  outline: none;
  border: none;
  ${props => props.theme.mobile`
    padding : 3.54vw 0px;
    top : 169.37vw;
    left : 6.25vw;
    border-radius : 2.5vw;
    width : 87.5vw;
    height : 15.41vw;
    font-size : 5.41vw;
  `}
  img {
    ${props => props.theme.mobile`
        width : 7.29vw;
    `}
  }
  :hover {
    background: linear-gradient(0deg, #fdec59, #fae100);
  }
`;
export default KakaoChannel;
