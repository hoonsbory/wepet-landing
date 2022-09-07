import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { HeaderP, P, Section } from '../commonStyle';

const FourthComp = () => {
  const canvas = useRef(null);

  useEffect(() => {
    const image = new Image();
    image.src = '/images/heart.png';
    image.onload = () => {
      const ctx = canvas.current.getContext('2d');
      var ww = 480;
      var wh = 926;
      var hearts = [];
      function init() {
        requestAnimationFrame(render);

        canvas.width = ww;
        canvas.height = wh;

        for (let i = 0; i < 15; i++) {
          hearts.push(new Heart());
        }
      }

      let divWdith = innerWidth > 480 ? 480 : innerWidth;
      let spawnY = divWdith === 480 ? divWdith * 1.4 : divWdith * 1.6;
      let spawnX = divWdith === 480 ? divWdith * 0.13 : divWdith * 0.2;
      function Heart() {
        this.x = spawnX;
        this.y = spawnY;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.vel = {
          x: (Math.random() - 0.5) * 1,
          y: Math.random() * 4 * -1,
        };
        this.targetScale = Math.random() * 0.15 + 0.04;
        this.scale = this.targetScale * Math.random();
      }
      Heart.prototype.update = function () {
        this.x += this.vel.x;
        this.y += this.vel.y;

        this.scale += (this.targetScale - this.scale) * 0.01;
        if (this.x - this.width * 0.5 > ww || this.x + this.width < 0) {
          this.scale = 0.04;
          this.x = spawnX;
          this.y = spawnY;
        }
        if (this.y - this.height > wh || this.y + this.height < 0) {
          this.scale = 0.04;
          this.x = spawnX;
          this.y = spawnY;
        }
        this.width = 473.8 * this.scale;
        this.height = 408.6 * this.scale;
      };
      Heart.prototype.draw = function () {
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(
          heartImage,
          this.x - this.width * 0.5,
          this.y - this.height * 0.5,
          this.width,
          this.height,
        );
      };

      function render() {
        ctx.clearRect(0, 0, ww, wh);
        for (let i = 0; i < 15; i++) {
          hearts[i].update();
          hearts[i].draw();
        }
        requestAnimationFrame(render);
      }

      var heartImage = new Image();
      heartImage.onload = init;
      heartImage.src =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NzMuOHB4IiBoZWlnaHQ9IjQwOC42cHgiIHZpZXdCb3g9IjAgMCA0NzMuOCA0MDguNiI+PHBhdGggZmlsbD0iI2QzMjkzMiIgZD0iTTQwNC42LDE2LjZDMzg1LjQsNi4xLDM2My41LDAsMzQwLDBjLTQxLjUsMC03OC41LDE4LjktMTAzLDQ4LjVDMjEyLjMsMTguOSwxNzUuMywwLDEzMy44LDAgYy0yMy4zLDAtNDUuMyw2LjEtNjQuNSwxNi42QzI3LjksMzkuNSwwLDgzLjQsMCwxMzMuOWMwLDE0LjQsMi40LDI4LjMsNi42LDQxLjJDMjkuNiwyNzguNCwyMzcsNDA4LjYsMjM3LDQwOC42IHMyMDcuMi0xMzAuMiwyMzAuMi0yMzMuNWM0LjMtMTIuOSw2LjYtMjYuOCw2LjYtNDEuMkM0NzMuOCw4My40LDQ0NS45LDM5LjYsNDA0LjYsMTYuNnoiLz48L3N2Zz4=';

      window.addEventListener('resize', function () {
        divWdith = innerWidth > 480 ? 480 : innerWidth;
        spawnY = divWdith === 480 ? divWdith * 1.4 : divWdith * 1.6;
      });
    };
  }, []);

  return (
    <Section>
      <HeaderP data-aos="fade-up">
        <span>위펫에서</span> 동물친구를 찾아보고
      </HeaderP>
      <P data-aos="fade-up">이야기를 나눠보세요!</P>
      <Mockup src="/images/heart_mockup.png" />
      <Feed src="/images/feed.png" />
      <Canvas width={480} height={926} ref={canvas} />
    </Section>
  );
};

const Mockup = styled.img`
  filter: drop-shadow(30.6409px 45.9613px 61.2818px rgba(75, 114, 150, 0.15));
  position: relative;
  top: 62px;
  ${props => props.theme.mobile`
    top : 12.91vw;
    width : 66.25vw;
  `}
`;

const Feed = styled.img`
  position: absolute;
  left: 40px;
  bottom: 144px;
  box-shadow: 0px 4px 14px rgb(0 0 0 / 25%);
  background: rgba(255, 255, 255, 0.89);
  border-radius: 10px;
`;
const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

export default FourthComp;
