import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  background-color: #e8eaed;
  width: 100%;
  height: 926px;
  @media (max-width: 480px) {
    height: 192.9vw;
  }
`;

export const P = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;
  color: black;
  font-size: 32px;
  ${props => props.theme.mobile`
        font-size : 6.6667vw;
        margin-top: 4.16vw;
        margin-bottom: 2.08vw;
    `}
  span {
    color: #1cb1c3;
  }
`;

export const HeaderP = styled(P)`
  padding-top: 90px;
  margin-top: 0;
  ${props => props.theme.mobile`
        padding-top : 18.75vw;
    `}
`;

export const Mockup = styled.img`
  filter: drop-shadow(30.6409px 45.9613px 61.2818px rgba(75, 114, 150, 0.15));
  position: relative;
  top: 62px;
  ${props => props.theme.mobile`
    top : 12.91vw;
    width : 66.25vw;
  `}
`;
